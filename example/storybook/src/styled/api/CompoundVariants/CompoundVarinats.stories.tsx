import type { ComponentMeta } from '@storybook/react-native';
import { CompoundVariants } from './CompoundVariants';
const MyCompoundVariantsMeta: ComponentMeta<typeof CompoundVariants> = {
  title: 'styled/api/stories/CompoundVariants',
  component: CompoundVariants,
};

export { CompoundVariants } from './CompoundVariants';
export default MyCompoundVariantsMeta;
