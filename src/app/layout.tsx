import { SITE_CONFIG } from "@/lib/site-config";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cooperBlackStd = localFont({
  variable: "--font-cooper-black-std",
  src: "./../../fonts/Cooper Std Black.ttf",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name} `,
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  creator: "BONK",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@" + SITE_CONFIG.xHandle,
  },
  keywords: [
    "buddies for paws",
    "bfp",
    "bonk",
    "bonk ecosystem",
    "charity",
    "animal welfare",
    "wildlife conservation",
    "web3 charity",
  ],
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cooperBlackStd.variable} ${inter.variable} relative z-0 flex min-h-screen flex-col antialiased`}
      >
        {children}
        <GoogleAnalytics gaId="G-0C67RBPTW7" />
      </body>
    </html>
  );
}
