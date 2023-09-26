import { resolveComponentThemes } from './createConfig';

export const createComponents = <T>(components: T): T => {
  return resolveComponentThemes({}, components);
};
