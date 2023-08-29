import type { ComponentMeta } from '@storybook/react-native';
import { ButtonStateProps } from './ButtonStateProps';
const MyButtonStatePropsMeta: ComponentMeta<typeof ButtonStateProps> = {
  title: 'api/stories/ButtonStateProps',
  component: ButtonStateProps,
};

export { ButtonStateProps } from './ButtonStateProps';
export default MyButtonStatePropsMeta;
