# @gluestack-ui/tooltip

## Installation

To use `@gluestack-ui/tooltip`, all you need to do is install the
`@gluestack-ui/tooltip` package:

```sh
$ yarn add @gluestack-ui/tooltip

# or

$ npm i @gluestack-ui/tooltip
```

## Usage

Whether you need to provide helpful hints to new users or display extra details for power users, the Tooltip component is a simple and effective way. Here's an example how to use this package to create one:

```jsx
import { Root, Content } from '../components/core/tooltip/styled-components';
import { createTooltip } from '@gluestack-ui/tooltip';
export const Tooltip = createTooltip({
  Root,
  Content,
});
```

## Customizing the tooltip:

Default styling of all these components can be found in the components/core/tooltip file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Tooltip/index.tsx) of the styled `tooltip` components.

```jsx
// import the styles

import { Root, Content } from '../components/core/tooltip/styled-components';

// import the createTooltip function
import { createTooltip } from '@gluestack-ui/tooltip';

// Understanding the API
export const Tooltip = createTooltip({
  Root,
  Content,
});

// Using the tooltip component
export default () => (
  <Tooltip>
    <TooltipContent />
  </Tooltip>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/overlay/tooltip).
