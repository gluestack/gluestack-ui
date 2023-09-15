import { get } from '../core/colorMode';

/**
 *
 * @returns Current color mode value (light or dark)
 */
export const useColorMode = () => {
  return get();
};
