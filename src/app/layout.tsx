import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SITE_CONFIG } from "@/lib/site-config";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cooperBlackStd = localFont({
  variable: "--font-cooper-black-std",
  src: "./../../public/Cooper Std Black.ttf",
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
  keywords: [],
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
        <TooltipProvider delayDuration={200}>
          <Nav />
          {children}
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  );
}
