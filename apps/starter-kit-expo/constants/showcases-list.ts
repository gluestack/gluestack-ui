import type { ComponentItem } from '@/components/custom/bottom-control-bar';

export type ShowcaseItem = ComponentItem & {
  description?: string;
};

export const SHOWCASES_LIST: ShowcaseItem[] = [
  {
    title: 'Login Flow',
    path: 'login',
    description: 'Complete authentication experience',
  },
  {
    title: 'Dashboard',
    path: 'dashboard',
    description: 'Analytics and data visualization',
  },
  {
    title: 'Profile',
    path: 'profile',
    description: 'User profile and settings',
  },
  {
    title: 'E-Commerce',
    path: 'ecommerce',
    description: 'Shopping cart and checkout',
  },
  {
    title: 'Social Feed',
    path: 'social',
    description: 'Timeline and interactions',
  },
];

export const getShowcaseByPath = (path: string): ComponentItem | undefined => {
  return SHOWCASES_LIST.find((s) => s.path === path);
};

