import type { ComponentMeta } from '@storybook/react-native';
import PinInput from './PinInput';
// import InputIcon from './InputIcon';

const PinInputMeta: ComponentMeta<typeof PinInput> = {
  title: 'stories/PinInput',
  component: PinInput,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The PinInput component is your go-to tool for gathering user OTP in a sleek and user-friendly text field. Whether you're designing a simple login form or a complex search feature, this component has got you covered.`,
  },
  argTypes: {
    // size: {
    //   control: 'select',
    //   options: ['sm', 'md', 'lg', 'xl'],
    // },
    // variant: {
    //   control: 'select',
    //   options: ['outline', 'underlined', 'rounded'],
    // },
    // isInvalid: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isHovered: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isFocused: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
    // isDisabled: {
    //   control: 'boolean',
    //   options: [true, false],
    // },
  },
  args: {
    // size: 'sm',
    // variant: 'outline',
    // isInvalid: false,
    // isDisabled: false,
    // isHovered: false,
    // isFocused: false,
  },
};

export default PinInputMeta;

export { PinInput };
