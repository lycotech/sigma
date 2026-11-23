export type DownloadCategory = "Account opening" | "Mandates" | "Other";

export interface DownloadItem {
  title: string;
  category: DownloadCategory;
  description: string;
  href: string;
  external?: boolean;
}

// TODO: replace "#" hrefs with real file URLs once the client supplies the documents.
export const downloads: DownloadItem[] = [
  { title: "Account Opening Form (Individual)", category: "Account opening", description: "For personal investors.", href: "#" },
  { title: "Account Opening Form (Corporate)", category: "Account opening", description: "For companies and institutions.", href: "#" },
  { title: "Estate Account Opening Form", category: "Account opening", description: "For estates of deceased holders.", href: "#" },
  { title: "Minor Account Opening Form", category: "Account opening", description: "For investors under 18.", href: "#" },
  { title: "Buy Mandate Form", category: "Mandates", description: "Instruct us to buy securities.", href: "#" },
  { title: "Sell Mandate Form", category: "Mandates", description: "Instruct us to sell securities.", href: "#" },
  { title: "FGN Savings Bond Form", category: "Mandates", description: "Subscribe to FGN Savings Bonds.", href: "#" },
  { title: "Shares Transfer Form", category: "Other", description: "Transfer shares between holders.", href: "#" },
  { title: "Online Trading SLA", category: "Other", description: "Service level agreement for online trading.", href: "#" },
  {
    title: "e-Dividend Mandate Forms",
    category: "Other",
    description: "Opens the SEC notice page.",
    href: "https://sec.gov.ng",
    external: true,
  },
];

export const downloadCategories: ("All" | DownloadCategory)[] = [
  "All",
  "Account opening",
  "Mandates",
  "Other",
];
