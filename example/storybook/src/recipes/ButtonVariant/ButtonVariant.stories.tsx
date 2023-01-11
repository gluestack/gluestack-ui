import type { ComponentMeta } from '@storybook/react-native';
import { ButtonVariant } from './ButtonVariant';
const MyButtonVariantMeta: ComponentMeta<typeof ButtonVariant> = {
  title: 'recipes/ButtonVariant',
  component: ButtonVariant,
};

export { ButtonVariant } from './ButtonVariant';
export default MyButtonVariantMeta;
