import type { ComponentMeta } from '@storybook/react-native';
import { AllIcons } from './AllIcons';
import { Icon } from '@gluestack/ui-compiled';

const MyIconsMeta: ComponentMeta<typeof Icon> = {
  title: 'stories/MEDIA AND ICONS/Icons',
  component: Icon,
  argTypes: {},
  args: {},
};

export default MyIconsMeta;
export { AllIcons };
