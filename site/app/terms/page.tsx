import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Terms of Service - clip Documentation",
  description: "Terms and conditions of use for the clip open source documentation website.",
};

export default function TermsOfService() {
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
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and utilizing this website or downloading the <code className="font-mono text-emerald-500">clip</code> software utility, you agree to be bound by these Terms of Service, applicable laws, and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. Open Source License</h2>
          <p>
            The software distributed under this project is free and open-source software licensed under the <strong>GNU General Public License v3.0 (GPL-3.0)</strong>. You may inspect, modify, and redistribute the code under the terms of said license. Documentation content on this site is provided for informational and educational purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Disclaimer & Limitation of Liability</h2>
          <p>
            The software and documentation are provided &ldquo;as is&rdquo;, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose, and non-infringement. In no event shall the authors or copyright holders be liable for any claim, damages, or other liability arising from the use of the software.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Third-Party Links & Advertisements</h2>
          <p>
            This website may contain links to third-party web sites or services and displays third-party advertisements via Google AdSense. We do not warrant the offerings of any of these entities/individuals or the content of their websites.
          </p>
        </section>
      </div>

      <AdBanner slot="6666666666" className="mt-12" />
    </article>
  );
}
