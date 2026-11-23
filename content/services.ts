export interface Service {
  slug: string;
  title: string;
  icon: "line-chart" | "repeat" | "compass" | "pie-chart" | "briefcase" | "layers";
  summary: string;
  intro: string;
  points: string[];
  /** True when the copy is a placeholder awaiting client approval. */
  placeholder: boolean;
}

export const services: Service[] = [
  {
    slug: "equities-trading",
    title: "Equities Trading",
    icon: "line-chart",
    summary:
      "Order placement, execution and settlement on the Nigerian exchange, backed by research and live market access.",
    intro:
      "Place orders and have them executed and settled on the Nigerian exchange, with an online platform, real-time insight and advice shaped around your goals.",
    points: [
      "Order placement, trade execution and settlement on the Nigerian exchange",
      "Online trading platform with real-time market data, portfolio monitoring and execution from anywhere",
      "Real-time insights from the firm's traders",
      "Research and analysis on listed companies",
      "Tailored advice to meet your goals and manage risk",
    ],
    placeholder: false,
  },
  {
    slug: "nasd-otc-trading",
    title: "NASD (OTC Trading)",
    icon: "repeat",
    summary: "Access to securities traded over the counter on the NASD platform.",
    intro:
      "[Placeholder] Sigma can facilitate trading in securities quoted on the NASD over-the-counter platform.",
    points: [
      "[Placeholder] Order placement for NASD-quoted securities",
      "[Placeholder] Guidance on settlement and documentation",
      "[Placeholder] Pricing and liquidity information from your representative",
    ],
    placeholder: true,
  },
  {
    slug: "investment-advisory-services",
    title: "Investment Advisory Services",
    icon: "compass",
    summary: "Considered advice that matches your objectives and appetite for risk.",
    intro:
      "[Placeholder] Advice that begins with your objectives, time horizon and tolerance for risk.",
    points: [
      "[Placeholder] Goal-based investment guidance",
      "[Placeholder] Risk-matched recommendations",
      "[Placeholder] Periodic review of positions",
    ],
    placeholder: true,
  },
  {
    slug: "portfolio-management",
    title: "Portfolio Management",
    icon: "pie-chart",
    summary: "Professional oversight of your portfolio in line with an agreed mandate.",
    intro:
      "[Placeholder] Professional management of a portfolio of securities in line with a mandate agreed with you.",
    points: [
      "[Placeholder] Mandate-driven portfolio construction",
      "[Placeholder] Ongoing monitoring and rebalancing",
      "[Placeholder] Clear periodic reporting",
    ],
    placeholder: true,
  },
  {
    slug: "consulting",
    title: "Consulting",
    icon: "briefcase",
    summary: "Capital-market guidance for companies and institutions.",
    intro:
      "[Placeholder] Practical guidance for companies and institutions engaging with the Nigerian capital market.",
    points: [
      "[Placeholder] Capital-market engagement advice",
      "[Placeholder] Transaction process support",
      "[Placeholder] Regulatory navigation",
    ],
    placeholder: true,
  },
  {
    slug: "others",
    title: "Other Services",
    icon: "layers",
    summary: "Additional capital-market services offered alongside our core business.",
    intro:
      "[Placeholder] Additional services offered alongside our core business. Ask your representative what is available.",
    points: [
      "[Placeholder] FGN Savings Bond subscriptions",
      "[Placeholder] Share transfers and e-dividend mandates",
      "[Placeholder] Account servicing support",
    ],
    placeholder: true,
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
