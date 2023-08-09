# @gluestack-ui/link

## Installation

To use `@gluestack-ui/link`, all you need to do is install the
`@gluestack-ui/link` package:

```sh
$ yarn add @gluestack-ui/link

# or

$ npm i @gluestack-ui/link
```

## Usage

With links, users can navigate seamlessly throughout a website. This component has a hyperlinked appearance for a user-friendly experience. Here's an example how to use this package to create one:

```jsx
import { Root, Text } from './styled-components';
import { createLink } from '@gluestack-ui/link';

export const Link = createLink({
  Root,
  Text,
});
```

## Customizing the Link:

Default styling of all these components can be found in the components/core/link file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Link/index.tsx) of the styled `Link` components.

```jsx
// import the styles
import { Root } from '../components/core/link/styled-components';

// import the createLink function
import { createLink } from '@gluestack-ui/link';

// Understanding the API
const Link = createLink({
  Root,
});

// Using the link component
export default () => (
  <Link href="">
    <LinkText />
  </Link>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/link).
