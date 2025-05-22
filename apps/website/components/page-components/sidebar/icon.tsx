import * as LucideIcons from "lucide-react-native";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export function Icon({ name, size = 20, color = "#64748b", className }: IconProps) {
  // @ts-ignore - Lucide icons are dynamically accessed
  const IconComponent = LucideIcons[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react-native`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
}
