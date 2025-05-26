import type { ComponentMeta } from '@storybook/react-native';
import UseBreakPointValueBasic from './useBreakPointValue';

const UseBreakPointValueBasicMeta: ComponentMeta<
  typeof UseBreakPointValueBasic
> = {
  title: 'stories/UseBreakPointValueBasic',
  component: UseBreakPointValueBasic,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {},
  argTypes: {},
  args: {},
};

export default UseBreakPointValueBasicMeta;

export { UseBreakPointValueBasic };
