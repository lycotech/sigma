/** Core brand facts. Only facts supplied by Sigma Securities appear here. */
export const site = {
  name: "Sigma Securities Limited",
  shortName: "Sigma Securities",
  url: "https://www.sigmasecuritiesltd.com.ng",
  tagline: "Swift and Reliable Mandate Execution",
  heroSub:
    "Start your investment journey with Sigma Securities. Access the Nigerian capital market with confidence.",
  email: "frontdesk@sigmasecurities.com.ng",
  phones: [
    { label: "+234 816 334 3578", href: "tel:+2348163343578" },
    { label: "+234 908 360 6969", href: "tel:+2349083606969" },
  ],
  links: {
    clientLogin: "https://app.sigmasecurities.com.ng",
    ipo: "https://invest.sigmasecuritiesltd.com.ng/",
  },
  vision:
    "To be the undisputed leading and dominant full services stock-broking firm in Nigeria.",
  mission:
    "To provide reliable, first-class services through well-trained, motivated staff and strong technology, with high standards of integrity, ethics and transparency.",
  trust: ["Licensed broker-dealer", "SEC registered", "NGX dealing member", "Since 1995"],
  pillars: [
    {
      title: "State-of-the-art technology",
      body: "Online trading access and modern execution tools keep your mandates moving without friction.",
      icon: "cpu",
    },
    {
      title: "Competent, well-motivated staff",
      body: "Well-trained people who take ownership of your instructions from order to settlement.",
      icon: "users",
    },
    {
      title: "Foreign partnership",
      body: "A growing international client base and partnerships that widen your reach into the Nigerian market.",
      icon: "globe",
    },
  ],
  approach: [
    "Client-centred service and consistent performance",
    "Profitable partnership between clients, shareholders and employees",
    "Value investing, with risk matched to return",
    "Fast, efficient trade execution",
    "Flexible, negotiable fees",
    "Online trading access",
  ],
  timeline: [
    {
      date: "30 May 1995",
      title: "Incorporated",
      body: "Sigma Securities Limited is incorporated as a limited liability company in Nigeria and registered with the SEC as a broker-dealer.",
    },
    {
      date: "26 July 1995",
      title: "Dealing membership granted",
      body: "The Nigerian Stock Exchange grants Sigma a Dealing Membership licence.",
    },
    {
      date: "1 April 1997",
      title: "Operations begin",
      body: "Trading operations commence from Lagos, the start of a growing client base at home and abroad.",
    },
  ],
  steps: [
    { title: "Choose your account type", body: "Individual, corporate, estate or minor." },
    { title: "Complete the forms", body: "Download and fill in the relevant account opening form." },
    { title: "Submit with documents", body: "Return the form with the required supporting documents." },
    { title: "Start trading", body: "Place mandates through your Sigma representative or online." },
  ],
  regulators: [
    { name: "nse.com.ng", href: "https://nse.com.ng" },
    { name: "nasdng.com", href: "https://nasdng.com" },
    { name: "sec.gov.ng", href: "https://sec.gov.ng" },
    { name: "cenbank.org", href: "https://cenbank.org" },
    { name: "pencom.gov.ng", href: "https://pencom.gov.ng" },
    { name: "amcon.com.ng", href: "https://amcon.com.ng" },
  ],
  disclaimer:
    "Investing in securities involves risk, including the possible loss of capital. Past performance is not a guide to future results. Nothing on this website is an offer or solicitation. [Wording pending compliance review.]",
} as const;
