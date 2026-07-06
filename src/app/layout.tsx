import { VevadeFooter } from "@/components/VevadeFooter";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vevadeco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VevadeCo — Custom Development & Marketing Agency",
    template: "%s | VevadeCo",
  },
  description:
    "VevadeCo builds custom web applications, lead generation systems, and AI tools. Request a free proposal for your next project.",
  keywords: [
    "custom software development",
    "lead generation",
    "marketing agency",
    "SaaS development",
    "web applications",
    "VevadeCo",
  ],
  authors: [{ name: "VevadeCo" }],
  openGraph: {
    title: "VevadeCo — Custom Solutions That Convert",
    description:
      "Development and marketing agency specializing in custom SaaS platforms, lead systems, and AI-powered tools.",
    type: "website",
    url: siteUrl,
    siteName: "VevadeCo",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VevadeCo — Custom Solutions That Convert",
    description:
      "We build custom web apps, lead systems, and AI tools tailored to your business.",
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
        <SmoothScroll />
        {children}
        <VevadeFooter />
      </body>
    </html>
  );
}
