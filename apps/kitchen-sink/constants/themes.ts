export type ThemeName =
  | "default"
  | "ocean"
  | "forest"
  | "sunset"
  | "lavender"
  | "cyber"
  | "rose";

export interface Theme {
  name: ThemeName;
  displayName: string;
}

export const themes: Theme[] = [
  { name: "default", displayName: "Default" },
  { name: "ocean", displayName: "Ocean" },
  { name: "forest", displayName: "Forest" },
  { name: "sunset", displayName: "Sunset" },
  { name: "lavender", displayName: "Lavender" },
  { name: "cyber", displayName: "Cyber" },
  { name: "rose", displayName: "Rose" },
];
