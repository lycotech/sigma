export interface Office {
  city: string;
  role: string;
  address: string;
  /** Position on the stylised map, in % of the SVG viewBox. */
  map: { x: number; y: number };
}

export const offices: Office[] = [
  {
    city: "Lagos",
    role: "Head Office",
    address: "18, St Gregory College Road, Ikoyi, Lagos",
    map: { x: 22, y: 82 },
  },
  {
    city: "Abuja",
    role: "Abuja Office",
    address: "No 10 Nairobi Street, Wuse-2, Abuja",
    map: { x: 46, y: 46 },
  },
  {
    city: "Jalingo",
    role: "Taraba Office",
    address: "Investment House No. 134, Hammaruwa Way, Jalingo, Taraba State",
    map: { x: 74, y: 56 },
  },
];
