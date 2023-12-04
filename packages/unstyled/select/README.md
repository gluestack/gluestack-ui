# `@gluestack-ui/select`

Select offers a dynamic and user-friendly way to present a list of options in a closed view, with the ability to expand and select items from a dropdown list.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/select
```

## Usage

Default styling of all these components can be found in the components/select file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Select/styled-components/index.tsx) of the styled Select components.

```jsx
// import animation configured styled function
import { styled } from '../styled';

// import the styles
import {
  Root as StyledSelectRoot,
  Trigger as StyledSelectTrigger,
  Input as StyledSelectInput,
  Icon as StyledSelectIcon,
} from '../components/core/select/styled-components';

import {
  Root,
  Content,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Backdrop,
  Icon,
  FlatList,
  ScrollView,
  SectionHeaderText,
  SectionList,
  VirtualizedList,
} from '../components/core/actionsheet/styled-components';

// import the createSelect and createActionsheet function
import { createSelect } from '@gluestack-ui/select';
import { createActionsheet } from '@gluestack-ui/actionsheet';

// Understanding the API
const Actionsheet = createActionsheet({
  Root,
  Backdrop,
  Content,
  DragIndicator,
  IndicatorWrapper,
  Item,
  ItemText,
  Icon,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  SectionHeaderText,
  AnimatePresence: styled.Component,
});

const Select = createSelect(
  {
    Root: StyledSelectRoot,
    Trigger: StyledSelectTrigger,
    Input: StyledSelectInput,
    Icon: StyledSelectIcon,
  },
  {
    Portal: Actionsheet,
    Backdrop: Actionsheet.Backdrop,
    Content: Actionsheet.Content,
    DragIndicator: Actionsheet.DragIndicator,
    DragIndicatorWrapper: Actionsheet.DragIndicatorWrapper,
    Item: Actionsheet.Item,
    ItemText: Actionsheet.ItemText,
    ScrollView: Actionsheet.ScrollView,
    VirtualizedList: Actionsheet.VirtualizedList,
    FlatList: Actionsheet.FlatList,
    SectionList: Actionsheet.SectionList,
    SectionHeaderText: Actionsheet.SectionHeaderText,
  }
);

// Using the select component
export default () => (
  <Select isDisabled={isDisabled} isInvalid={isInvalid}>
    <SelectTrigger>
      <SelectInput placeholder="Select option" />
      <SelectIcon mr="$3">
        <Icon as={ChevronDownIcon} />
      </SelectIcon>
    </SelectTrigger>
    <SelectPortal>
      <SelectBackdrop />
      <SelectContent>
        <SelectDragIndicatorWrapper>
          <SelectDragIndicator />
        </SelectDragIndicatorWrapper>
        <SelectItem label="UX Research" value="UX Research" />
        <SelectItem label="Web Development" value="Web Development" />
      </SelectContent>
    </SelectPortal>
  </Select>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
