import Link from "next/link";
import CodeBlock from "./components/CodeBlock";
import AdBanner from "./components/AdBanner";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* 1. Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full text-xs font-mono font-medium bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 shadow-sm">
          <span>✨ New in v1.1.0: Native Wayland & macOS Support, Paste Mode, and POSIX Compliance</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-6 leading-tight">
          Clipboard management at the speed of your shell.
        </h1>

        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          <code className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">clip</code> is a lightweight, zero-dependency CLI wrapper that provides a seamless, unified clipboard experience across <strong>Wayland</strong>, <strong>X11</strong>, <strong>macOS</strong>, and <strong>WSL</strong>.
        </p>

        {/* Quick Install Box */}
        <div className="max-w-xl mx-auto text-left mb-8">
          <CodeBlock
            code="curl -sL https://git.io/clipinstall | bash"
            caption="Quick Install (One-liner)"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#installation"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-emerald-500 hover:bg-emerald-400 text-zinc-950 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            Get Started
          </a>
          <a
            href="#reference"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
          >
            CLI Reference
          </a>
          <a
            href="https://github.com/joshuacox/clip"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl font-medium text-sm bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-900 dark:border dark:border-zinc-700 dark:hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>
      </section>

      {/* Top Ad Unit */}
      <AdBanner slot="9876543210" format="auto" />

      {/* 2. Key Features Grid */}
      <section id="features" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Why use <code className="text-emerald-500 font-mono">clip</code>?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Native clipboard tools like <code className="font-mono">xclip</code>, <code className="font-mono">wl-copy</code>, and <code className="font-mono">pbcopy</code> have inconsistent syntax and flags. <code className="font-mono text-emerald-500">clip</code> standardizes your workflow across all environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Auto Display Detection
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Detects whether you are running under <strong>Wayland</strong> (<code className="font-mono">wl-copy</code>), <strong>X11</strong> (<code className="font-mono">xclip</code> or <code className="font-mono">xsel</code>), <strong>macOS</strong> (<code className="font-mono">pbcopy</code>), or <strong>WSL</strong>. No flags required.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              ✂️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Trim Trailing Newlines
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Tired of unwanted newlines when copying API keys, paths, or passwords? Use <code className="font-mono text-emerald-500">-n</code> or <code className="font-mono text-emerald-500">--trim</code> to cleanly strip the trailing newline.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              📋
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Bidirectional Paste
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Not just copying—run <code className="font-mono text-emerald-500">clip -p</code> to dump clipboard data directly into standard output, pipes, or files. You can also symlink it as <code className="font-mono">paste</code>.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              📁
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Safe Multi-File Handling
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Pass one or more files directly. <code className="font-mono">clip</code> verifies all file permissions upfront before concatenating and streaming them safely to your clipboard buffer.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🖱️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Primary Selection Buffer
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Target the middle-click mouse highlight buffer on X11 and Wayland using the <code className="font-mono text-emerald-500">-s</code> / <code className="font-mono text-emerald-500">--primary</code> flag.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-xl mb-4 font-mono font-bold">
              🛡️
            </div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Strict POSIX Compliance
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Written cleanly for <code className="font-mono">/bin/sh</code>. Zero bashisms, zero Python, zero runtime overhead. Tested thoroughly with Debian <code className="font-mono">dash</code> and CI ShellCheck.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Usage & Guides */}
      <section id="usage" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Common Usage Patterns
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explore everyday shell workflows made easier with <code className="font-mono text-emerald-500">clip</code>.
          </p>
        </div>

        <div className="space-y-8">
          {/* Example 1 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              1. Piping Command Output
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Send the output of any command pipeline straight to the clipboard:
            </p>
            <CodeBlock
              code="date -I | cut -d- -f2 | clip"
              caption="Example: Pipe date into clipboard"
            />
          </div>

          {/* Example 2 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              2. Trimming Trailing Newline (-n)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Essential when copying paths, passwords, or authentication tokens into forms or terminal prompts:
            </p>
            <CodeBlock
              code="pwd | clip -n"
              caption="Example: Copy working directory without trailing newline"
            />
          </div>

          {/* Example 3 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              3. Copying One or More Files
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              No need to type <code className="font-mono">cat file | ...</code>. Just pass filenames directly:
            </p>
            <CodeBlock
              code={`# Single file\nclip ~/.ssh/id_ed25519.pub\n\n# Multiple files concatenated\nclip part1.txt part2.txt part3.txt`}
              caption="Example: Direct file copying"
            />
          </div>

          {/* Example 4 */}
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              4. Pasting from Clipboard (-p / --paste)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">
              Extract current clipboard content and pipe to other utilities:
            </p>
            <CodeBlock
              code={`# Print to terminal\nclip -p\n\n# Save to a file\nclip -p > notes.txt\n\n# Pipe to grep or jq\nclip -p | jq '.'`}
              caption="Example: Paste operations"
            />
          </div>
        </div>
      </section>

      {/* Mid-page Ad Unit */}
      <AdBanner slot="1357924680" format="auto" />

      {/* 4. Supported Platforms & Backends */}
      <section id="platforms" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Platform Support Matrix
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            <code className="font-mono text-emerald-500">clip</code> inspects your environment variables and available utilities to select the fastest native backend.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-zinc-100 dark:bg-zinc-900/80 text-zinc-900 dark:text-zinc-100 font-semibold border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="py-3.5 px-4">Environment</th>
                <th className="py-3.5 px-4">Condition</th>
                <th className="py-3.5 px-4">Copy Utility</th>
                <th className="py-3.5 px-4">Paste Utility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-600 dark:text-zinc-400">
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                <td className="py-3 px-4 font-medium text-zinc-900 dark:text-white">Wayland</td>
                <td className="py-3 px-4 font-mono text-xs">$WAYLAND_DISPLAY set</td>
                <td className="py-3 px-4 font-mono text-emerald-500">wl-copy</td>
                <td className="py-3 px-4 font-mono text-emerald-500">wl-paste</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                <td className="py-3 px-4 font-medium text-zinc-900 dark:text-white">X11 (Primary)</td>
                <td className="py-3 px-4 font-mono text-xs">$DISPLAY set & xclip</td>
                <td className="py-3 px-4 font-mono text-emerald-500">xclip -in</td>
                <td className="py-3 px-4 font-mono text-emerald-500">xclip -out</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                <td className="py-3 px-4 font-medium text-zinc-900 dark:text-white">X11 (Alternative)</td>
                <td className="py-3 px-4 font-mono text-xs">$DISPLAY set & xsel</td>
                <td className="py-3 px-4 font-mono text-emerald-500">xsel --input</td>
                <td className="py-3 px-4 font-mono text-emerald-500">xsel --output</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                <td className="py-3 px-4 font-medium text-zinc-900 dark:text-white">macOS</td>
                <td className="py-3 px-4 font-mono text-xs">pbcopy command found</td>
                <td className="py-3 px-4 font-mono text-emerald-500">pbcopy</td>
                <td className="py-3 px-4 font-mono text-emerald-500">pbpaste</td>
              </tr>
              <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-900/30">
                <td className="py-3 px-4 font-medium text-zinc-900 dark:text-white">Windows / WSL</td>
                <td className="py-3 px-4 font-mono text-xs">clip.exe command found</td>
                <td className="py-3 px-4 font-mono text-emerald-500">clip.exe</td>
                <td className="py-3 px-4 font-mono text-emerald-500">powershell Get-Clipboard</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 5. CLI Reference */}
      <section id="reference" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Command-Line Reference
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Complete flag manual and options reference for <code className="font-mono text-emerald-500">clip</code>.
          </p>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">-p, -o, --paste</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Action</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Outputs current clipboard contents to standard output. Cannot be combined with file arguments.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">-n, --trim</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Filter</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Strips the single trailing newline character (<code className="font-mono">\n</code>) from incoming data before saving to clipboard.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">-s, --primary</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Buffer</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Targets the primary mouse selection buffer instead of the default clipboard buffer (supported on X11 and Wayland).
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">-h, --help</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Info</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Displays standard command-line usage summary, supported options, and exits with code 0.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">-v, --version</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Info</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Displays the current release version of <code className="font-mono">clip</code> and exits with code 0.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">--</span>
              <span className="text-xs px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono">Syntax</span>
            </div>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Disambiguation delimiter. Tells <code className="font-mono">clip</code> to treat all subsequent arguments as filenames, even if they begin with a hyphen.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Installation Guide */}
      <section id="installation" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Installation Methods
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Choose the installation method that fits your environment best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Method 1: via Makefile (Recommended)
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Installs binary to <code className="font-mono">/usr/local/bin/clip</code> and man page to <code className="font-mono">/usr/local/share/man/man1/clip.1</code>.
            </p>
            <CodeBlock
              code="git clone https://github.com/joshuacox/clip.git\ncd clip\nsudo make install"
              caption="Build with Makefile"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Method 2: Quick Installer
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Downloads and executes the bootstrap installer automatically.
            </p>
            <CodeBlock
              code="curl -sL https://git.io/clipinstall | bash"
              caption="Quick Install"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Method 3: via CMake
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Standard CMake out-of-source build configuration.
            </p>
            <CodeBlock
              code="mkdir build && cd build\ncmake ..\nsudo make install"
              caption="CMake Build"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Method 4: via Ansible
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              Deploy across fleet servers using the included Ansible playbook.
            </p>
            <CodeBlock
              code="ansible-playbook -i hosts clip.yaml"
              caption="Ansible Playbook"
            />
          </div>
        </div>
      </section>

      {/* 7. Troubleshooting & FAQ */}
      <section id="faq" className="py-12 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-3xl mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            Frequently Asked Questions & Troubleshooting
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Tips for running <code className="font-mono text-emerald-500">clip</code> across SSH, tmux, and containerized sessions.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              How does clip behave over SSH sessions?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              When SSHing into a remote machine with X11 forwarding enabled (<code className="font-mono">ssh -X</code> or <code className="font-mono">ssh -Y</code>), your <code className="font-mono">$DISPLAY</code> environment variable is automatically forwarded. <code className="font-mono">clip</code> detects this and sends clipboard content directly back to your local machine&apos;s X server via <code className="font-mono">xclip</code>.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              What packages do I need installed on Linux?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
              On Wayland compositors (GNOME, Sway, Hyprland), install <code className="font-mono text-emerald-500">wl-clipboard</code>. On X11 desktop environments, install <code className="font-mono text-emerald-500">xclip</code> or <code className="font-mono text-emerald-500">xsel</code>:
            </p>
            <CodeBlock
              code={`# Debian / Ubuntu (Wayland)\nsudo apt install wl-clipboard\n\n# Debian / Ubuntu (X11)\nsudo apt install xclip\n\n# Fedora / RHEL\nsudo dnf install wl-clipboard xclip\n\n# Arch Linux\nsudo pacman -S wl-clipboard xclip`}
              caption="Installing underlying clipboard backends"
            />
          </div>

          <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
              Can I create a dedicated &lsquo;paste&rsquo; command?
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Yes! <code className="font-mono">clip</code> inspects how it is invoked. If you symlink it as <code className="font-mono">paste</code> or <code className="font-mono">clip-paste</code> (e.g. <code className="font-mono">sudo ln -s /usr/local/bin/clip /usr/local/bin/paste</code>), running <code className="font-mono">paste</code> will automatically output the clipboard content without requiring the <code className="font-mono">-p</code> flag.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Ad Unit */}
      <AdBanner slot="2468013579" format="auto" />
    </div>
  );
}
