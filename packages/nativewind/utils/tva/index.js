import { deepMergeObjects } from '../utils/deepMerge';
import { tv } from 'tailwind-variants';
const tvatemp = (
  options,
  /**
   * The config object allows you to modify the default configuration.
   * @see https://www.tailwind-variants.org/docs/api-reference#config-optional
   */
  config
) => {
  const parentVariants = options?.parentVariants;
  const parentCompoundVariants = options?.parentCompoundVariants;
  delete options.parentVariants;
  delete options.parentCompoundVariants;
  options.variants = deepMergeObjects(parentVariants, options.variants);
  if (
    Array.isArray(parentCompoundVariants) &&
    parentCompoundVariants.length > 0
  ) {
    if (!options.compoundVariants) {
      options.compoundVariants = [];
    }
    options.compoundVariants = [
      ...parentCompoundVariants,
      ...options.compoundVariants,
    ];
  }
  const callback = tv(options, config);
  return (inlineProps) => {
    const { parentVariants: inlineParentVariants = {}, ...variant } =
      inlineProps;
    const mergedVariants = deepMergeObjects(inlineParentVariants, variant);
    return callback({ ...mergedVariants });
  };
};
export const tva = tvatemp;
