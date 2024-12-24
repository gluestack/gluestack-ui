import type { ComponentMeta } from '@storybook/react-native';
import Actionsheet from './Actionsheet';

const ActionsheetMeta: ComponentMeta<typeof Actionsheet> = {
  title: 'stories/Actionsheet',
  component: Actionsheet,
  // metaInfo is required for figma generation
  // @ts-ignore
  metaInfo: {
    componentDescription: `The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.`,
  },
};

export default ActionsheetMeta;

export { Actionsheet };
