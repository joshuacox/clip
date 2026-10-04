import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "About clip - Project History and Motivation",
  description: "Learn about the motivation, history, and development behind the clip command-line clipboard wrapper.",
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1 mb-4"
        >
          ← Back to Documentation
        </Link>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          About clip
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          The story behind the project, architecture philosophy, and contributors.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">The Problem</h2>
          <p>
            Copying and pasting text in terminal environments is something software engineers do dozens of times per day. Yet, the native tools are cumbersome:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>On X11: <code className="font-mono">xclip -selection clipboard -i</code> or <code className="font-mono">xsel --clipboard --input</code>.</li>
            <li>On Wayland: <code className="font-mono">wl-copy</code> and <code className="font-mono">wl-paste</code>.</li>
            <li>On macOS: <code className="font-mono">pbcopy</code> and <code className="font-mono">pbpaste</code>.</li>
            <li>On Windows / WSL: <code className="font-mono">clip.exe</code>.</li>
          </ul>
          <p className="mt-2">
            Remembering disparate flags or maintaining separate aliases across desktop workstations, laptops, and virtual environments is frustrating.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">The Solution</h2>
          <p>
            <code className="font-mono text-emerald-500 font-semibold">clip</code> was created by Joshua Cox with a simple ethos: <em>typing clipboard operations should be as fast and intuitive as typing <code className="font-mono">cat</code> or <code className="font-mono">ls</code>.</em>
          </p>
          <p className="mt-2">
            By analyzing the active desktop session (<code className="font-mono">$WAYLAND_DISPLAY</code>, <code className="font-mono">$DISPLAY</code>) and available system binaries, <code className="font-mono">clip</code> automatically routes your data to the right place without requiring explicit configuration.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Design Principles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Zero Dependencies</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Built as a pure POSIX shell script. Runs out-of-the-box on minimal container and embedded systems without installing heavy runtimes.
              </p>
            </div>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40">
              <h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Fail-Safe Input</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Validates input files, flags, and terminal pipes upfront so commands fail quickly and safely with descriptive errors to stderr.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Contributing & Source Code</h2>
          <p>
            Contributions, bug reports, and pull requests are welcomed on GitHub:
          </p>
          <p>
            <a
              href="https://github.com/joshuacox/clip"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <span>github.com/joshuacox/clip</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </p>
        </section>
      </div>

      <AdBanner slot="7777777777" className="mt-12" />
    </article>
  );
}
