import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { RFPForm } from "@/components/RFPForm";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vevadeco.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VevadeCo",
  description:
    "Since 2012, VevadeCo has provided web development, app development, and Shopify development for businesses in Burlington, Hamilton, Brantford, and St. Catharines.",
  url: siteUrl,
  foundingDate: "2012",
  serviceType: [
    "Web Development",
    "App Development",
    "Shopify Development",
    "Custom Software Development",
    "Lead Generation Systems",
    "Marketing Services",
    "AI Solutions",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Burlington",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
    {
      "@type": "City",
      name: "Hamilton",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
    {
      "@type": "City",
      name: "Brantford",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
    {
      "@type": "City",
      name: "St. Catharines",
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    },
    "Ontario",
    "Canada",
  ],
  knowsAbout: [
    "Web development",
    "App development",
    "Shopify development",
    "Lead generation systems",
    "AI and automation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <WorkShowcase />
        <Services />
        <Process />
        <Testimonials />
        <RFPForm />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
