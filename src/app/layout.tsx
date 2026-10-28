import { JsonLd } from "@/components/JsonLd";
import { VevadeFooter } from "@/components/VevadeFooter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { businessJsonLd, HOME_DESCRIPTION, HOME_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: "%s | Vevade",
  },
  description: HOME_DESCRIPTION,
  authors: [{ name: "Vevade" }],
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Vevade",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full bg-background font-sans text-foreground antialiased flex min-h-full flex-col">
        <JsonLd data={businessJsonLd} />
        <SmoothScroll />
        {children}
        <VevadeFooter />
      </body>
    </html>
  );
}
