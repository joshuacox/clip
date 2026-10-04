import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 py-12 text-sm text-zinc-600 dark:text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1: Brand & Summary */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-emerald-500 text-zinc-950 font-mono font-bold flex items-center justify-center text-sm shadow-sm">
                📋
              </span>
              <span className="font-mono text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                clip
              </span>
            </div>
            <p className="max-w-md text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
              A fast, lightweight, POSIX-compliant clipboard utility for Linux, macOS, and WSL.
              Unifies clipboard access across Wayland, X11, and terminal environments with zero friction.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-200 mb-3">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#installation" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/#usage" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Usage Examples
                </Link>
              </li>
              <li>
                <Link href="/#reference" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  CLI Reference
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Troubleshooting FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Project */}
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-200 mb-3">Project & Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  About the Project
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/joshuacox/clip/blob/master/LICENSE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  GPL-3.0 License
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/joshuacox/clip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Joshua Cox and clip contributors. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <a href="/ads.txt" className="hover:underline">ads.txt</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
