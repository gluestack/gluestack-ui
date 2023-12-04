# @gluestack-ui/popover

## Installation

To use `@gluestack-ui/popover`, all you need to do is install the
`@gluestack-ui/popover` package:

```sh
$ yarn add @gluestack-ui/popover

# or

$ npm i @gluestack-ui/popover
```

## Usage

Popovers often provide contextual information or quick access to related actions without requiring the user to navigate to a different page or view. Here's an example how to use this package to create one:

```jsx
import { createPopover } from '@gluestack-ui/popover';
import { styled } from '../styled';
import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from './styled-components';

export const Popover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  //@ts-ignore
  AnimatePresence: styled.Component,
});
```

## Customizing the Popover:

Default styling of all these components can be found in the components/core/popover file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Popover/index.tsx) of the styled `Popover` components.

```jsx
// import the styles

import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from '../components/core/popover/styled-components';

// import the createPopover function
import { createPopover } from '@gluestack-ui/popover';

// Understanding the API
export const Popover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
});

// Using the popover component
export default () => (
  <Popover>
    <PopoverBackdrop />
    <PopoverContent>
      <PopoverHeader>
        <PopoverCloseButton />
      </PopoverHeader>
      <PopoverBody />
      <PopoverFooter />
    </PopoverContent>
  </Popover>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/overlay/popover)
