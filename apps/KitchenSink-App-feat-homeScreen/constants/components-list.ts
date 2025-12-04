import {
  AccordionIcon,
  AlertDialogIcon,
  AlertIcon,
  AvatarIcon,
} from "@/components/custom/custom-icons";
import type { ComponentItem } from "@/components/custom/bottom-control-bar";

export const COMPONENTS_LIST: ComponentItem[] = [
  { title: "Accordion", path: "accordion", count: 7, icon: AccordionIcon },
  { title: "Alert", path: "alert", count: 4, icon: AlertIcon },
  {
    title: "Alert-Dialog",
    path: "alert-dialog",
    count: 4,
    icon: AlertDialogIcon,
  },
  { title: "Avatar", path: "avatar", count: 4, icon: AvatarIcon },
  { title: "Checkbox", path: "checkbox", count: 4 },
  { title: "Chip", path: "chip", count: 4 },
  { title: "Dialog", path: "dialog", count: 4 },
  { title: "Divider", path: "divider", count: 4 },
  { title: "Error View", path: "error-view", count: 4 },
  { title: "Form Field", path: "form-field", count: 4 },
  { title: "Popover", path: "popover", count: 4 },
  { title: "Pressable Feedback", path: "pressable-feedback", count: 4 },
  { title: "Radio Group", path: "radio-group", count: 4 },
  { title: "Scroll Shadow", path: "scroll-shadow", count: 4 },
  { title: "Select", path: "select", count: 4 },
  { title: "Skeleton", path: "skeleton", count: 4 },
  { title: "Spinner", path: "spinner", count: 4 },
  { title: "Surface", path: "surface", count: 4 },
  { title: "Switch", path: "switch", count: 4 },
  { title: "Tabs", path: "tabs", count: 4 },
  { title: "Text Field", path: "text-field", count: 4 },
];

export const getComponentByPath = (path: string): ComponentItem | undefined => {
  return COMPONENTS_LIST.find((c) => c.path === path);
};
