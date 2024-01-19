import type { ComponentMeta } from '@storybook/react-native';
import Actionsheet from './Actionsheet';
import ActionsheetScrollView from './ActionsheetScrollView';
import ActionsheetFlatList from './ActionsheetFlatList';
import ActionsheetVirtualizedList from './ActionsheetVirtualizedList';
import ActionsheetSectionList from './ActionsheetSectionList';
import ActionsheetIcon from './ActionsheetIcon';
import ActionsheetAvoidKeyboard from './ActionsheetAvoidKeyboard';
import ActionsheetWithKeyboardAvoidingViewWithSnapPoints from './ActionsheetAvoidKeyboardWithSnapPoints';

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'components/COMPOSITES/Actionsheet',
  component: Actionsheet,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
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
  ActionsheetWithKeyboardAvoidingViewWithSnapPoints,
};
