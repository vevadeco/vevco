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
  {
    id: "valencia",
    name: "Valencia Theater Seating",
    tagline: "Shopify stores and a custom 3D seating configurator",
    description:
      "Shopify stores for the US, UK, and Canada markets. The configurator shows a live preview, and configuration-driven pricing carries into the Shopify cart through line-item properties.",
    features: [
      "Seat model, materials, and colours, including two-tone, stitching, and embroidery",
      "Lighting and accessory finishes, and row layout with risers",
      "Model display stabilized with dedicated model hosting",
      "Extended-warranty widget and reviews with Amazon imports",
      "Pay-over-time and crypto payments",
      "Custom affiliate tracking and exit-intent email capture",
    ],
    accent: "#9f1239",
    accentBg: "#fff1f2",
    icon: "armchair",
    category: "Shopify",
    screenshots: [
      {
        src: "/images/valencia-theater-seating.png",
        alt: "Valencia Theater Seating Canada store homepage",
        width: 1440,
        height: 1000,
      },
      {
        src: "/images/valencia-oslo-3d.png",
        alt: "Oslo 3D seating configurator on the Valencia Theater Seating US store",
        width: 1440,
        height: 1000,
      },
    ],
    links: [
      {
        href: "https://ca.valenciatheaterseating.com",
        label: "Canada store",
      },
      {
        href: "https://us.valenciatheaterseating.com/products/oslo-3d",
        label: "Oslo 3D configurator",
      },
    ],
  },
  {
    id: "fiera",
    name: "Fièra Cosmetics",
    tagline: "Custom Shopify theme",
    description:
      "A custom Shopify theme, with PDP templates and custom snippets, kept in GitHub so the theme could be reviewed and rolled back.",
    features: [
      "QA, performance, and conversion work",
      "Landing pages and BFCM funnels",
    ],
    accent: "#6d28d9",
    accentBg: "#f5f3ff",
    icon: "sparkles",
    category: "Shopify",
    screenshots: [
      {
        src: "/images/fiera-cosmetics.png",
        alt: "Fièra Cosmetics homepage",
        width: 1440,
        height: 1000,
      },
    ],
    links: [
      {
        href: "https://fieracosmetics.com",
        label: "fieracosmetics.com",
      },
    ],
  },
] as const;

export const services = [
  {
    title: "Web & App Development",
    description:
      "Custom websites and web applications for businesses in Hamilton, Burlington, Oakville, St. Catharines, and the Niagara region — built around how you operate.",
    icon: "code",
  },
  {
    title: "Shopify Development",
    description:
      "Theme builds, custom Shopify apps, migrations, and conversion-focused storefronts that sell — from launch to scale.",
    icon: "shopping",
    href: "/shopify-development",
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
      "Vevade built our entire lead system from scratch. Quote requests doubled in the first month and our team finally has one place to manage every lead.",
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
    question: "What types of projects does Vevade take on?",
    answer:
      "We design and build custom websites, web apps, Shopify stores, and lead systems. Since 2012 the work has included marketing sites, storefronts, and tools shaped around how a business actually operates. If you need a template with a logo dropped in, we are probably not the right studio.",
  },
  {
    question: "Which cities do you serve?",
    answer:
      "We are a Hamilton-area studio and regularly work with businesses in Hamilton, Burlington, Oakville, St. Catharines, and the Niagara region. Most projects run over video. In-person meetings in Hamilton are available when they help. Email sales@vevade.com or call 289-855-0968.",
  },
  {
    question: "How much does a website or Shopify project cost?",
    answer:
      "Projects start at $1,999 CAD for a focused website or Shopify setup. Larger stores and custom web apps are quoted as a fixed scope after a short discovery call. Ongoing updates are $70/hour. You get a written proposal before any build starts.",
  },
  {
    question: "Can you help with Shopify stores and custom Shopify apps?",
    answer:
      "Yes. Shopify development covers new store setup, theme customization, migrations, checkout and shipping, and app integrations. If a custom workflow would fit a web app better than a store, we will say so before you pay for the wrong platform.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "A straightforward brochure site or standard Shopify launch often takes a few weeks once the content and scope are confirmed. Custom applications and larger catalogues take longer. Every proposal includes a timeline.",
  },
  {
    question: "What's included in a proposal?",
    answer:
      "Scope, a milestone timeline, fixed pricing, and what you will own when we finish: the domain, the hosting, and the code. No surprise retainers. Most proposals go out within 48 hours of the discovery call.",
  },
  {
    question: "What happens after I submit a request?",
    answer:
      "We review the brief within one business day and schedule a free 30-minute discovery call. You can also start by emailing sales@vevade.com or calling 289-855-0968.",
  },
] as const;

export const stats = [
  { value: "2012", label: "Operating since" },
  { value: "48hr", label: "Proposal turnaround" },
  { value: "100%", label: "Custom-built solutions" },
] as const;
