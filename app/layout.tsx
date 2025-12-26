import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SmoothScrollHandler } from "@/components/providers/SmoothScroll";
import { metadata as siteMetadata } from "./metadata";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const falcon = localFont({
  src: "../public/fonts/Falcon.woff",
  variable: "--font-falcon",
  weight: "400",
  style: "normal",
});

export const metadata: Metadata = {
  ...siteMetadata,
  metadataBase: new URL('https://atlaconsult.se/'), // Assigning a default metadataBase
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ATLA IT Consulting AB - Future-ready automation solutions',
    description: 'Vi hjälper företag att effektivisera och automatisera sina processer med moderna digitala lösningar.',
    url: 'https://atlaconsult.se/',
    siteName: 'ATLA IT Consulting AB',
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sv"
      suppressHydrationWarning
      className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable} ${falcon.variable}`}
    >
      <body suppressHydrationWarning className={`${inter.className} min-h-screen flex flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ATLA IT Consulting AB",
              url: "https://atlaconsult.se",
              logo: "https://atlaconsult.se/1icon.png",
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@atlaconsult.se",
                contactType: "customer service",
              },
              sameAs: [
                "https://x.com",
                "https://linkedin.com",
                "https://github.com"
              ]
            }),
          }}
        />
        <SmoothScrollHandler>
          <main className="flex-grow">{children}</main>
        </SmoothScrollHandler>
        <CookieBanner />
      </body>
    </html>
  );
}
