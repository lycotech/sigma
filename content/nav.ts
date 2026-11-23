export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "Downloads", href: "/downloads/" },
  {
    label: "Policy statement",
    href: "/policies/data-privacy/",
    children: [
      { label: "Data Subject Access Request Policy", href: "/policies/data-subject-access-request/" },
      { label: "Data Privacy Policy", href: "/policies/data-privacy/" },
      { label: "Website Policy", href: "/policies/website/" },
      { label: "Privacy Notice", href: "/policies/privacy-notice/" },
      { label: "Data Breach Policy", href: "/policies/data-breach/" },
      { label: "Data Protection Policy", href: "/policies/data-protection/" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact/",
    children: [
      { label: "Contact", href: "/contact/", description: "Offices, phone and email" },
      { label: "Data Protection Officer", href: "/contact/dpo/", description: "Privacy enquiries" },
      { label: "Account Update", href: "/account-update/", description: "Update your records" },
    ],
  },
];

export const footerQuickLinks = [
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services/" },
  { label: "s-Trader", href: "/s-trader/" },
  { label: "Open an Account", href: "/open-account/" },
  { label: "Account Update", href: "/account-update/" },
  { label: "Downloads", href: "/downloads/" },
  { label: "Dangote Ref IPO", href: "/ipo/" },
  { label: "Contact", href: "/contact/" },
];
