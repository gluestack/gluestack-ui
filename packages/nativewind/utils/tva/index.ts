import type { TVA } from '../types';
import type { TVConfig } from 'tailwind-variants/dist/config';
import { deepMergeObjects } from '../utils/deepMerge';
// @ts-ignore
import { tv } from 'tailwind-variants';

const tvatemp = (
  options: {
    /**
     * Extend allows for easy composition of components.
     * @see https://www.tailwind-variants.org/docs/composing-components
     */
    extend?: any;
    /**
     * Base allows you to set a base class for a component.
     */
    base?: any;
    /**
     * Slots allow you to separate a component into multiple parts.
     * @see https://www.tailwind-variants.org/docs/slots
     */
    slots?: any;
    /**
     * Variants allow you to create multiple versions of the same component.
     * @see https://www.tailwind-variants.org/docs/variants#adding-variants
     */
    variants?: any;
    /**
     * Compound variants allow you to apply classes to multiple variants at once.
     * @see https://www.tailwind-variants.org/docs/variants#compound-variants
     */
    compoundVariants?: any;
    /**
     * Compound slots allow you to apply classes to multiple slots at once.
     */
    compoundSlots?: any;
    /**
     * Default variants allow you to set default variants for a component.
     * @see https://www.tailwind-variants.org/docs/variants#default-variants
     */
    defaultVariants?: any;
    parentVariants?: any;
    parentCompoundVariants?: any;
  },
  /**
   * The config object allows you to modify the default configuration.
   * @see https://www.tailwind-variants.org/docs/api-reference#config-optional
   */
  config: TVConfig
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

  return (inlineProps: any) => {
    const { parentVariants: inlineParentVariants = {}, ...variant } =
      inlineProps;

    const mergedVariants = deepMergeObjects(inlineParentVariants, variant);

    return callback({ ...mergedVariants });
  };
};

export const tva = tvatemp as TVA;
