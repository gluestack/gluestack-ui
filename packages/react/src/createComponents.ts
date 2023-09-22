import { resolveComponentThemes } from './createConfig';
import type { CreateComponents } from './types';

export const createComponents = <T extends Record<string, any>>(
  components: CreateComponents<T>
): CreateComponents<T> => {
  return resolveComponentThemes({}, components);
};
