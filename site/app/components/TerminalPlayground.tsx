"use client";

import { useState } from "react";

interface TerminalCommand {
  label: string;
  command: string;
  data: string;
  hasNewline: boolean;
  backend: string;
}

export default function TerminalPlayground() {
  const [clipboard, setClipboard] = useState<string>("Hello from clip!");
  const [history, setHistory] = useState<Array<{ type: "cmd" | "out" | "info"; text: string }>>([
    { type: "info", text: "Interactive clip Simulator initialized. Click a preset command below or type your own." },
  ]);
  const [customInput, setCustomInput] = useState("");
  const [activeBackend, setActiveBackend] = useState("Wayland (wl-copy)");

  const presets: TerminalCommand[] = [
    {
      label: "Copy Date",
      command: "date -I | clip",
      data: new Date().toISOString().split("T")[0] + "\n",
      hasNewline: true,
      backend: "Wayland (wl-copy)",
    },
    {
      label: "Trim Newline (-n)",
      command: "pwd | clip -n",
      data: "/home/developer/workspace",
      hasNewline: false,
      backend: "X11 (xclip)",
    },
    {
      label: "Paste Buffer (-p)",
      command: "clip -p",
      data: "",
      hasNewline: false,
      backend: "Wayland (wl-paste)",
    },
    {
      label: "Clear Buffer (-c)",
      command: "clip -c",
      data: "",
      hasNewline: false,
      backend: "Wayland (wl-copy)",
    },
    {
      label: "OSC 52 over SSH",
      command: 'echo "token_abc123" | clip -n --osc52',
      data: "token_abc123",
      hasNewline: false,
      backend: "Terminal OSC 52 (ANSI)",
    },
  ];

  const runCommand = (cmd: TerminalCommand) => {
    setActiveBackend(cmd.backend);
    if (cmd.command === "clip -p") {
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${cmd.command}` },
        { type: "out", text: clipboard.length > 0 ? clipboard : "(clipboard is currently empty)" },
      ]);
    } else if (cmd.command === "clip -c") {
      setClipboard("");
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${cmd.command}` },
        { type: "info", text: "Clipboard cleared successfully (0 bytes)." },
      ]);
    } else {
      setClipboard(cmd.data);
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${cmd.command}` },
        {
          type: "info",
          text: `[${cmd.backend}] Copied ${cmd.data.length} bytes to system clipboard${cmd.hasNewline ? " (with trailing newline)" : " (trimmed)"}.`,
        },
      ]);
    }
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    const input = customInput.trim();
    setCustomInput("");

    if (input === "clip -p") {
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${input}` },
        { type: "out", text: clipboard || "(clipboard is currently empty)" },
      ]);
    } else if (input === "clip -c") {
      setClipboard("");
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${input}` },
        { type: "info", text: "Clipboard cleared (0 bytes)." },
      ]);
    } else if (input.includes("| clip -n")) {
      const parts = input.split("| clip -n")[0].trim();
      const cleanData = parts.replace(/^echo\s+["']?/, "").replace(/["']?$/, "");
      setClipboard(cleanData);
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${input}` },
        { type: "info", text: `Copied "${cleanData}" to clipboard without trailing newline.` },
      ]);
    } else if (input.includes("| clip")) {
      const parts = input.split("| clip")[0].trim();
      const cleanData = parts.replace(/^echo\s+["']?/, "").replace(/["']?$/, "") + "\n";
      setClipboard(cleanData);
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${input}` },
        { type: "info", text: `Copied "${cleanData.trimEnd()}\\n" to clipboard.` },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        { type: "cmd", text: `$ ${input}` },
        { type: "info", text: "Simulated output. Try preset commands like 'echo hello | clip' or 'clip -p'." },
      ]);
    }
  };

  return (
    <div className="w-full my-12 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 shadow-xl overflow-hidden">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-xs text-zinc-400">clip interactive terminal simulator</span>
        </div>
        <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {activeBackend}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-zinc-800">
        {/* Terminal Screen (2 cols) */}
        <div className="lg:col-span-2 p-4 flex flex-col justify-between h-[340px]">
          <div className="font-mono text-xs space-y-2 overflow-y-auto pr-2 scrollbar-thin">
            {history.slice(-8).map((item, idx) => (
              <div key={idx} className="leading-relaxed">
                {item.type === "cmd" && <span className="text-emerald-400 font-bold">{item.text}</span>}
                {item.type === "out" && <div className="text-zinc-200 pl-4 py-1 bg-zinc-900/60 rounded my-0.5 whitespace-pre-wrap">{item.text}</div>}
                {item.type === "info" && <span className="text-zinc-500 italic">{item.text}</span>}
              </div>
            ))}
          </div>

          {/* Interactive Input Form */}
          <form onSubmit={handleCustomSubmit} className="mt-4 pt-3 border-t border-zinc-800 flex items-center gap-2 font-mono text-xs">
            <span className="text-emerald-500 font-bold">$</span>
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="e.g. echo 'Secret Key' | clip -n"
              className="flex-1 bg-transparent text-zinc-100 placeholder-zinc-600 focus:outline-none"
            />
            <button
              type="submit"
              className="px-2.5 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors text-[11px]"
            >
              Run
            </button>
          </form>
        </div>

        {/* Live Clipboard Inspector (1 col) */}
        <div className="p-4 bg-zinc-900/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <span>📋</span> Simulated Clipboard
              </h4>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                {clipboard.length} bytes
              </span>
            </div>

            <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800 font-mono text-xs text-emerald-300 min-h-[90px] max-h-[120px] overflow-y-auto whitespace-pre-wrap break-all">
              {clipboard.length > 0 ? (
                <>
                  {clipboard}
                  {clipboard.endsWith("\n") && (
                    <span className="text-zinc-600 select-none">[↵ newline]</span>
                  )}
                </>
              ) : (
                <span className="text-zinc-600 italic">&lt;empty buffer&gt;</span>
              )}
            </div>
          </div>

          {/* Interactive Preset Buttons */}
          <div className="mt-4 pt-3 border-t border-zinc-800">
            <span className="block text-[11px] font-medium text-zinc-400 mb-2">
              Try Preset Commands:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {presets.map((p, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => runCommand(p)}
                  className="px-2 py-1 text-[11px] font-mono rounded bg-zinc-800 hover:bg-emerald-950 hover:text-emerald-300 hover:border-emerald-700 text-zinc-300 border border-zinc-700 transition-colors"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
