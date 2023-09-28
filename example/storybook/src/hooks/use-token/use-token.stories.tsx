import type { ComponentMeta } from '@storybook/react-native';
import { config } from '@gluestack-ui/themed';
import useToken from './useToken';
const UseTokenMeta: ComponentMeta<typeof useToken> = {
  title: 'stories/hooks/useToken',
  component: useToken,
  args: {
    scale: 'colors',
    token: 'green500',
  },
  argTypes: {
    scale: {
      control: 'select',
      options: ['colors'],
    },
    token: {
      control: 'select',
      options: [...Object.keys(config.theme.tokens.colors)],
    },
  },
};

export default UseTokenMeta;
export { useToken };
