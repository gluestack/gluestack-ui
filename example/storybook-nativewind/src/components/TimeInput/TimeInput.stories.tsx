import type { ComponentMeta } from '@storybook/react-native';
import TimeInput from './TimeInput';

const TimeInputMeta: ComponentMeta<typeof TimeInput> = {
  title: 'stories/TimeInput',
  component: TimeInput,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The TimeInput component is designed to accommodate larger amounts of text input. It allows multi-line input and can be easily customized to fit the user's needs.`,
  },
  argTypes: {},
  args: {},
};

export default TimeInputMeta;

export { TimeInput };
