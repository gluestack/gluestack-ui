# @gluestack-ui/grid

## Installation

To use `@gluestack-ui/grid`, all you need to do is install the
`@gluestack-ui/grid` package:

```sh
$ yarn add @gluestack-ui/grid

# or

$ npm i @gluestack-ui/grid
```

## Usage

When you need to Grid-align content, the Grid component comes in handy. It is a layout component that can be used with other components to create complex layouts and positioning.

```jsx
import { createGrid } from '@gluestack-ui/grid';
import { Parent, Root, Item } from './styled-components';

export const Gridn = createGrid({
  Parent,
  Root,
  Item,
});
```

## Customizing the Grid:

Default styling of all these components can be found in the components/core/grid file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/grid/index.tsx) of the styled `grid` components.

```jsx
// import the styles
import { Parent, Root, Item } from '../components/core/grid/styled-components';

// import the createGrid function
import { createGrid } from '@gluestack-ui/grid';

// Understanding the API
const Grid = createGrid({
  Parent,
  Root,
  Item,
});

// Using the GRID component
export default () => (
  <Grid>
    <GridItem></GridItem>
  </Grid>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/layout/grid).
