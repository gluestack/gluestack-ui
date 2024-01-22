import { tv } from 'tailwind-variants';
import { deepMergeObjects } from '../deepMerge';

export function tva(options: any) {
  const parentVariants = Object.assign({}, options.parentVariants);
  delete options.parentVariants;
  options.variants = deepMergeObjects(parentVariants, options.variants);
  const callback = tv(options);

  return (inlineProps: any) => {
    const { parentVariants: inlineParentVariants = {}, ...variant } =
      inlineProps;

    const mergedVariants = deepMergeObjects(inlineParentVariants, variant);

    return callback({ ...mergedVariants });
  };
}
