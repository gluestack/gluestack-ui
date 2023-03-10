/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from '@storybook/react-native';

global.STORIES = [
  {
    titlePrefix: '',
    directory: './components',
    files: '**/*.stories.?(ts|tsx|js|jsx)',
    importPathMatcher:
      '^\\.[\\\\/](?:components(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$',
  },
];

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require('react-native').LogBox.ignoreLogs([
      '`clearDecorators` is deprecated and will be removed in Storybook 7.0',
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch {}

const getStories = () => {
  return [
    require('../src/components/Actionsheet/Actionsheet.stories.tsx'),
    require('../src/components/Text/Text.stories.tsx'),
    require('../src/components/AlertDialog/AlertDialog.stories.tsx'),
    require('../src/components/Avatar/Avatar.stories.tsx'),
    require('../src/components/Alert/Alert.stories.tsx'),
    require('../src/components/Button/Button.stories.tsx'),
    require('../src/components/Badge/Badge.stories.tsx'),
    require('../src/components/Button/ButtonGroup.stories.tsx'),
    require('../src/components/Checkbox/Checkbox.stories.tsx'),
    require('../src/components/Divider/Divider.stories.tsx'),
    require('../src/components/Fab/Fab.stories.tsx'),
    require('../src/components/FormControl/FormControl.stories.tsx'),
    require('../src/components/Heading/Heading.stories.tsx'),
    require('../src/components/HStack/HStack.stories.tsx'),
    // require('../src/components/Icon/Icon.stories.tsx'),
    require('../src/components/Input/Input.stories.tsx'),
    // require('../src/components/InputGroup/InputGroup.stories.tsx'),
    require('../src/components/Link/Link.stories.tsx'),
    require('../src/components/Menu/Menu.stories.tsx'),
    require('../src/components/Modal/Modal.stories.tsx'),
    // require('../src/components/Overlay/Overlay.stories.tsx'),
    require('../src/components/Popover/Popover.stories.tsx'),
    require('../src/components/Pressable/Pressable.stories.tsx'),
    require('../src/components/Progress/Progress.stories.tsx'),
    require('../src/components/Radio/Radio.stories.tsx'),
    // require('../src/components/Stack/Stack.stories.tsx'),
    require('../src/components/Select/Select.stories.tsx'),
    require('../src/components/Slider/Slider.stories.tsx'),
    require('../src/components/Spinner/Spinner.stories.tsx'),
    require('../src/components/Switch/Switch.stories.tsx'),
    require('../src/components/Text/Text.stories.tsx'),
    require('../src/components/TextArea/TextArea.stories.tsx'),
    require('../src/components/Toast/Toast.stories.tsx'),
    require('../src/components/Tooltip/Tooltip.stories.tsx'),
    // require('../src/components/Transitions/Transitions.stories.tsx'),
    require('../src/components/VStack/VStack.stories.tsx'),
    // require('../src/components/Tabs/Tabs.stories.tsx'),
  ];
};

configure(getStories, module, false);
