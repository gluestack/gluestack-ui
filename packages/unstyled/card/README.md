# @gluestack-ui/card

## Installation

To use `@gluestack-ui/card`, all you need to do is install the
`@gluestack-ui/card` package:

```sh
$ yarn add @gluestack-ui/card

# or

$ npm i @gluestack-ui/card
```

## Usage

A Card component serves as a visual container that groups related content and actions. Here's an example how to use this package to create one:

```jsx
import { createCard } from '@gluestack-ui/button';
import { Root } from './styled-components';

export const Card = createCard({
  Root,
});
```

## Customizing the Card:

Default styling of all these components can be found in the components/core/card file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Card/index.tsx) of the styled `Card` components.

```jsx
// import the styles
import { Root } from '../components/core/button/styled-components';

// import the createCard function
import { createCard } from '@gluestack-ui/card';

// Understanding the API
const Card = createCard({
  Root,
});

// Using the card component
export default () => <Card></Card>;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/data-display/card).
