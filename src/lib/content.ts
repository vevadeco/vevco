export const serviceAreas = [
  "Burlington",
  "Hamilton",
  "Brantford",
  "St. Catharines",
] as const;

export const products = [
  {
    id: "floorhub",
    name: "FloorHub",
    tagline: "All-in-one flooring business management",
    description:
      "Inventory, invoicing, lead capture, and contractor management — built for flooring retailers who need one dashboard to run the whole operation.",
    features: [
      "Square-footage to box invoicing with Stripe payments",
      "Facebook Lead Ads integration & pipeline tracking",
      "Inventory, expenses, and team role management",
    ],
    accent: "#ea580c",
    accentBg: "#fff7ed",
    icon: "layers",
    category: "SaaS Platform",
  },
  {
    id: "earls",
    name: "Earl's Lead System",
    tagline: "High-converting landscaping lead generation",
    description:
      "A conversion-optimized website and admin CRM for Earl's Landscaping — capturing GTA homeowners and giving the team a dashboard to close more jobs.",
    features: [
      "Quote forms with service-area targeting & local SEO",
      "Admin dashboard with lead status & CSV export",
      "Testimonials, analytics, and promo banner management",
    ],
    accent: "#2f5233",
    accentBg: "#f0fdf4",
    icon: "leaf",
    category: "Lead Generation",
  },
  {
    id: "profithunter",
    name: "Profit Hunter",
    tagline: "AI-powered trading intelligence platform",
    description:
      "A personal trading control room that scans 100+ crypto pairs, scores opportunities with ML, and executes trades with automated take-profit and stop-loss.",
    features: [
      "Multi-market scanner with technical analysis engine",
      "Neural network predictions with confidence scoring",
      "Auto-trading with TP/SL and real-time monitoring",
    ],
    accent: "#00f0ff",
    accentBg: "#0d0d12",
    icon: "trending",
    category: "AI Trading",
  },
] as const;

export const services = [
  {
    title: "Web & App Development",
    description:
      "Custom websites, web applications, and mobile-ready apps for businesses in Burlington, Hamilton, Brantford, and St. Catharines — built around how you actually operate.",
    icon: "code",
  },
  {
    title: "Shopify Development",
    description:
      "Theme builds, custom Shopify apps, migrations, and conversion-focused storefronts that sell — from launch to scale.",
    icon: "shopping",
  },
  {
    title: "Lead Generation Systems",
    description:
      "High-converting landing pages, CRM backends, and automated follow-up flows that turn visitors into booked calls.",
    icon: "target",
  },
  {
    title: "AI & Automation",
    description:
      "Machine learning integrations, trading systems, and workflow automation that save hours every week.",
    icon: "sparkles",
  },
  {
    title: "Marketing & Growth",
    description:
      "Local SEO, paid acquisition strategy, and conversion optimization to help Southern Ontario businesses scale what's already working.",
    icon: "chart",
  },
] as const;

export const process = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn your goals, constraints, and timeline in a free 30-minute call. No pitch deck — just clarity.",
  },
  {
    step: "02",
    title: "Custom Proposal",
    description:
      "Within 48 hours you receive a scoped proposal with timeline, milestones, and transparent pricing.",
  },
  {
    step: "03",
    title: "Build & Launch",
    description:
      "We ship in focused sprints with weekly demos. You see progress every step, not just at the end.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "VevadeCo built our entire lead system from scratch. Quote requests doubled in the first month and our team finally has one place to manage every lead.",
    name: "Earl's Landscaping",
    role: "Hamilton, ON",
  },
  {
    quote:
      "FloorHub replaced four separate tools we were duct-taping together. Invoicing, inventory, and Facebook leads — all in one dashboard our staff actually uses.",
    name: "Flooring Retailer",
    role: "Ontario, Canada",
  },
  {
    quote:
      "The trading platform they built scans markets faster than anything I've used commercially. The ML scoring alone changed how I trade.",
    name: "Independent Trader",
    role: "Crypto Markets",
  },
] as const;

export const faqs = [
  {
    question: "What types of projects does VevadeCo take on?",
    answer:
      "We specialize in web development, app development, Shopify development, lead generation systems, AI-powered tools, and marketing automation. If you need software built around your business — not the other way around — we're a fit.",
  },
  {
    question: "Do you serve Burlington, Hamilton, Brantford, and St. Catharines?",
    answer:
      "Yes. We've been operating since 2012 and regularly partner with businesses across Burlington, Hamilton, Brantford, and St. Catharines for web development, app development, and Shopify projects — while also supporting clients beyond Southern Ontario.",
  },
  {
    question: "Can you help with Shopify stores and custom Shopify apps?",
    answer:
      "Absolutely. Shopify development is a core specialty — from theme customization and store launches to custom apps, checkout improvements, and migrations that keep your catalog and SEO intact.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Lead generation sites and Shopify storefronts often launch in 2–4 weeks. SaaS platforms and complex apps typically run 6–12 weeks depending on scope. We'll give you an exact timeline in your proposal.",
  },
  {
    question: "What's included in a proposal?",
    answer:
      "Every proposal includes scope breakdown, milestone timeline, fixed pricing, tech stack recommendations, and post-launch support options. No surprise invoices.",
  },
  {
    question: "Do you work with startups and established businesses?",
    answer:
      "Both. We've built products from zero for new ventures and replaced legacy systems for established operators since 2012. Budget and timeline flex to match where you are.",
  },
  {
    question: "What happens after I submit an RFP?",
    answer:
      "We review your brief within one business day and reach out to schedule a discovery call. Most proposals are delivered within 48 hours of that call.",
  },
] as const;

export const stats = [
  { value: "2012", label: "Operating since" },
  { value: "48hr", label: "Proposal turnaround" },
  { value: "100%", label: "Custom-built solutions" },
] as const;
