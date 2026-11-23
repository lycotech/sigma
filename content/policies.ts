export interface Policy {
  slug: string;
  title: string;
  summary: string;
}

export const policies: Policy[] = [
  { slug: "data-subject-access-request", title: "Data Subject Access Request Policy", summary: "How to request access to the personal data we hold about you." },
  { slug: "data-privacy", title: "Data Privacy Policy", summary: "How Sigma Securities collects, uses and protects personal data." },
  { slug: "website", title: "Website Policy", summary: "Terms for using this website." },
  { slug: "privacy-notice", title: "Privacy Notice", summary: "A plain-language summary of our privacy practices." },
  { slug: "data-breach", title: "Data Breach Policy", summary: "How we respond to personal data breaches." },
  { slug: "data-protection", title: "Data Protection Policy", summary: "Our commitments under Nigerian data protection law." },
];

export const policySections = [
  "Purpose and scope",
  "Information we collect",
  "How we use information",
  "Your rights",
  "Contact",
];

export const getPolicy = (slug: string) => policies.find((p) => p.slug === slug);
