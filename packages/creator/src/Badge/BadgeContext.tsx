import { createContext } from '../utils/createContext';

export const [BadgeProvider, useBadge] = createContext<any>('BadgeContext');
