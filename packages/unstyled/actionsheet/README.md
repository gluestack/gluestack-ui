# `@gluestack-ui/actionsheet`

The Actionsheet component presents a set of options to the user, overlaid on top of the app's content, allowing them to take quick actions without leaving the current page or view.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/actionsheet
```

## Usage

Default styling of all these components can be found in the components/core/actionsheet file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Actionsheet/styled-components/index.tsx) of the styled Actionsheet components.

```jsx
// import the styles
import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
} from '../components/core/actionsheet/styled-components';

// import the createActionsheet function
import { createActionsheet } from '@gluestack-ui/actionsheet';

// Understanding the API
const Actionsheet = createActionsheet({
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
});

// Using the actionsheet component
export default () => (
  <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
    <ActionsheetBackdrop />
    <ActionsheetContent>
      <ActionsheetDragIndicatorWrapper>
        <ActionsheetDragIndicator />
      </ActionsheetDragIndicatorWrapper>
      <ActionsheetItem onPress={handleClose}>
        <ActionsheetItemText>Community</ActionsheetItemText>
      </ActionsheetItem>
    </ActionsheetContent>
  </Actionsheet>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
