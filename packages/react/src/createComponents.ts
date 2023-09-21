import type { CreateComponents } from './types';

export const createComponents = <T extends Record<string, any>>(
  components: CreateComponents<T>
) => {
  return components;
};
