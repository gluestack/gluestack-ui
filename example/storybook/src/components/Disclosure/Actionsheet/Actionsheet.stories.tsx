import type { ComponentMeta } from '@storybook/react-native';
import { ActionsheetExample as Actionsheet } from './Actionsheet';
import { ActionsheetExample as ActionsheetScrollView } from './ActionsheetScrollView';
import { ActionsheetExample as ActionsheetFlatList } from './ActionsheetFlatList';
import { ActionsheetExample as ActionsheetVirtualizedList } from './ActionsheetVirtualizedList';
import { ActionsheetExample as ActionsheetSectionList } from './ActionsheetSectionList';
import { ActionsheetExample as ActionsheetIcon } from './ActionsheetIcon';
import { ActionsheetExample as ActionsheetAvoidKeyboard } from './ActionsheetAvoidKeyboard';

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'stories/DISCLOSURE/Actionsheet',
  component: Actionsheet,
  argTypes: {
    showActionsheet: {
      control: 'boolean',
    },
  },
  args: {
    showActionsheet: false,
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
  ActionsheetIcon,
  ActionsheetScrollView,
  ActionsheetFlatList,
  ActionsheetVirtualizedList,
  ActionsheetSectionList,
  ActionsheetAvoidKeyboard,
};
