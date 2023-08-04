import type { ComponentMeta } from '@storybook/react-native';
import Actionsheet from './Actionsheet';
import ActionsheetScrollView from './ActionsheetScrollView';
import ActionsheetMemoized from './ActionsheetMemoized';
import ActionsheetFlatList from './ActionsheetFlatList';
import ActionsheetVirtualizedList from './ActionsheetVirtualizedList';
import ActionsheetSectionList from './ActionsheetSectionList';
import ActionsheetIcon from './ActionsheetIcon';
import ActionsheetAvoidKeyboard from './ActionsheetAvoidKeyboard';
import ActionsheetAnimate from './ActionsheetAnimate';

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'stories/DISCLOSURE/Actionsheet',
  component: Actionsheet,
  argTypes: {
    showActionsheet: {
      control: 'boolean',
      options: [true, false],
    },
  },
  args: {
    showActionsheet: true,
  },
  parameters: {
    docs: {
      description: {
        component: '**markdown** description goes here',
      },
    },
  },
};

export default ActionsheetMeta;

export {
  Actionsheet,
  ActionsheetMemoized,
  // ActionsheetIcon,
  ActionsheetScrollView,
  ActionsheetFlatList,
  ActionsheetVirtualizedList,
  ActionsheetSectionList,
  ActionsheetAvoidKeyboard,
  ActionsheetAnimate,
};
