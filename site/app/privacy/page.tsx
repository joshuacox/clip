import type { Metadata } from "next";
import Link from "next/link";
import AdBanner from "../components/AdBanner";

export const metadata: Metadata = {
  title: "Privacy Policy - clip Documentation",
  description: "Privacy policy for the clip project documentation website and Google AdSense policies.",
};

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">
          Last updated: October 2026
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-700 dark:text-zinc-300 leading-relaxed text-sm sm:text-base">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">1. Overview</h2>
          <p>
            This Privacy Policy governs the manner in which the <strong>clip</strong> documentation website collects, uses, maintains, and discloses information collected from visitors of this website. We respect your privacy and are committed to protecting any information that may be gathered while accessing our documentation and software resources.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">2. The clip CLI Tool Itself</h2>
          <p>
            The <code className="font-mono text-emerald-500">clip</code> command-line utility is open-source software running locally on your workstation. It does <strong>not</strong> collect, transmit, phone-home, or track any telemetry, user input, clipboard data, or system details. All clipboard processing happens strictly within your local system boundaries.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">3. Web Server Log Files</h2>
          <p>
            Like most standard website servers, this website uses log files. These files merely log visitors to the site—usually a standard procedure for hosting companies and hosting analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user movement around the site, and gather demographic information. IP addresses and other such information are not linked to any personally identifiable information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">4. Cookies and Web Beacons</h2>
          <p>
            This website uses cookies to store information about visitors&apos; preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based on visitors&apos; browser type or other information that the visitor sends via their browser.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">5. Google DoubleClick DART Cookies & Google AdSense</h2>
          <p>
            Google is a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>
              Third-party vendors, including Google, use cookies to serve ads based on a user&apos;s prior visits to this website or other websites.
            </li>
            <li>
              Google&apos;s use of advertising cookies enables it and its partners to serve ads to users based on their visit to our site and/or other sites on the Internet.
            </li>
            <li>
              Users may opt out of personalized advertising by visiting{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:underline"
              >
                Google Ads Settings
              </a>
              . Alternatively, users can opt out of a third-party vendor&apos;s use of cookies for personalized advertising by visiting{" "}
              <a
                href="https://www.aboutads.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-500 hover:underline"
              >
                aboutads.info
              </a>
              .
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">6. CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p>
            Under the California Consumer Privacy Act (CCPA), California consumers have the right to request that a business disclose the categories and specific pieces of personal data collected, delete personal data collected, and not sell personal data. If you make a request, we have one month to respond to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">7. GDPR Data Protection Rights</h2>
          <p>
            We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>The right to access – You have the right to request copies of your personal data.</li>
            <li>The right to rectification – You have the right to request correction of any inaccurate information.</li>
            <li>The right to erasure – You have the right to request erasure of your personal data under certain conditions.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">8. Contact Information</h2>
          <p>
            If you have questions or require more information about our Privacy Policy, please contact us via our GitHub repository issues page at{" "}
            <a
              href="https://github.com/joshuacox/clip/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:underline"
            >
              github.com/joshuacox/clip/issues
            </a>
            .
          </p>
        </section>
      </div>

      <AdBanner slot="5555555555" className="mt-12" />
    </article>
  );
}
