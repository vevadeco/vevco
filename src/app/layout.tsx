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
    default:
      "VevadeCo — Web, App & Shopify Development in Burlington, Hamilton, Brantford & St. Catharines",
    template: "%s | VevadeCo",
  },
  description:
    "Since 2012, VevadeCo has delivered web development, app development, and Shopify development for businesses in Burlington, Hamilton, Brantford, and St. Catharines. Request a free proposal.",
  keywords: [
    "web development Burlington",
    "web development Hamilton",
    "web development Brantford",
    "web development St. Catharines",
    "app development Burlington",
    "app development Hamilton",
    "app development Brantford",
    "app development St. Catharines",
    "Shopify development",
    "Shopify development Ontario",
    "custom software development",
    "lead generation",
    "SaaS development",
    "VevadeCo",
  ],
  authors: [{ name: "VevadeCo" }],
  openGraph: {
    title:
      "VevadeCo — Web, App & Shopify Development Since 2012",
    description:
      "Custom web development, app development, and Shopify development for Burlington, Hamilton, Brantford, and St. Catharines businesses.",
    type: "website",
    url: siteUrl,
    siteName: "VevadeCo",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "VevadeCo — Web, App & Shopify Development Since 2012",
    description:
      "Web, app, and Shopify development for Burlington, Hamilton, Brantford, and St. Catharines — operating since 2012.",
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
