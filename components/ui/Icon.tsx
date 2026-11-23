import {
  Briefcase,
  Compass,
  Cpu,
  Globe,
  Layers,
  LineChart,
  PieChart,
  Repeat,
  Users,
  type LucideProps,
} from "lucide-react";

const icons = {
  "line-chart": LineChart,
  repeat: Repeat,
  compass: Compass,
  "pie-chart": PieChart,
  briefcase: Briefcase,
  layers: Layers,
  cpu: Cpu,
  users: Users,
  globe: Globe,
};

export type IconName = keyof typeof icons;

/** Renders a lucide icon from a string key so content files stay free of component imports. */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp = icons[name as IconName] ?? Layers;
  return <Cmp aria-hidden {...props} />;
}
