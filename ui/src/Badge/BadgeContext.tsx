import { createContext } from '../../src/utils/createContext';

export const [BadgeProvider, useBadge] = createContext<any>('BadgeContext');
