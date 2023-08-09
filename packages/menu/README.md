# `@gluestack-ui/menu`

The Menu component creates a user-friendly dropdown interface that can be utilized to present a range of options or actions. This feature ensures accessibility and ease of use for the user.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/menu
```

## Usage

Default styling of all these components can be found in the components/core/menu file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Menu/styled-components/index.tsx) of the styled Menu components.

```jsx
// import the styles
import {
  Root,
  Item,
  Label,
  Backdrop,
} from '../components/core/menu/styled-components';

// import the createMenu function
import { createMenu } from '@gluestack-ui/menu';

// Understanding the API
const Menu = createMenu({
  Root,
  Item,
  Label,
  Backdrop,
});

// Using the menu component
export default () => (
  <Menu>
    <MenuItem>
      <MenuItemLabel />
    </MenuItem>
  </Menu>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
