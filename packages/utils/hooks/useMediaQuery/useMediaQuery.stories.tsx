import type { ComponentMeta } from '@storybook/react-native';
import UseMediaQueryBasic from './useMediaQuery';

const UseMediaQueryBasicMeta: ComponentMeta<typeof UseMediaQueryBasic> = {
  title: 'stories/UseMediaQueryBasic',
  component: UseMediaQueryBasic,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {},
  argTypes: {},
  args: {},
};

export default UseMediaQueryBasicMeta;

export { UseMediaQueryBasic };
