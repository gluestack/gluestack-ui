# `@gluestack-ui/fab`

The Floating Action Button (FAB) is a dynamic button that stays visible and provides access to a primary action throughout the user's journey in the application. It is a powerful UI element that adds a touch of elegance and convenience to the user experience.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npm install @gluestack-ui/fab
```

## Usage

Default styling of all these components can be found in the components/core/fab file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Fab/styled-components/index.tsx) of the styled Fab components.

```jsx
// import the styles
import { Root, Label } from '../components/core/fab/styled-components';
// import the createFab function
import { createFab } from '@gluestack-ui/fab';
// Understanding the API
const Fab = createFab({
  Root,
  Label,
});
// Using the fab component
export default () => (
  <Fab>
    <FabLabel />
  </Fab>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
