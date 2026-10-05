import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "clip - Fast, Cross-Platform Command-Line Clipboard Utility",
  description:
    "A POSIX-compliant command-line clipboard utility supporting Wayland (wl-copy), X11 (xclip/xsel), macOS (pbcopy), and WSL. Pipe outputs, copy files, trim newlines, and paste effortlessly.",
  keywords: [
    "clip",
    "clipboard cli",
    "xclip wrapper",
    "wl-copy wrapper",
    "linux clipboard",
    "wayland clipboard",
    "posix clipboard",
    "command line copy paste",
  ],
  authors: [{ name: "Joshua Cox" }],
  other: {
    "google-adsense-account": "ca-pub-8973108060277483",
  },
  openGraph: {
    title: "clip - Fast, Cross-Platform Command-Line Clipboard Utility",
    description:
      "A fast, POSIX-compliant clipboard wrapper for Wayland, X11, macOS, and WSL. Stream pipelines and files directly into your clipboard.",
    type: "website",
    url: "https://clip.joshuacox.com",
    siteName: "clip Documentation",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L1H2CLH4R3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-L1H2CLH4R3');
          `}
        </Script>

        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8973108060277483"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-zinc-950">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
