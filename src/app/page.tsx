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
import { JsonLd } from "@/components/JsonLd";
import { faqs } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { faqPageJsonLd, HOME_DESCRIPTION, HOME_TITLE } from "@/lib/site";

export const metadata = pageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
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
