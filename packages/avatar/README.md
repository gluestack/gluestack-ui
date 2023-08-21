# @gluestack-ui/avatar

## Installation

To use `@gluestack-ui/avatar`, all you need to do is install the
`@gluestack-ui/avatar` package:

```sh
$ yarn add @gluestack-ui/avatar

# or

$ npm i @gluestack-ui/avatar
```

## Usage

The Avatar component is a versatile UI element representing a user with profile pictures, initials, or a fallback icon. It adds a personal touch to the user interface, making it more engaging. Here's an example how to use this package to create one:

```jsx
import {
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
} from '../components/core/avatar/styled-components';
import { createAvatar } from '@gluestack-ui/avatar';
const Avatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});
```

## Customizing the avatar:

Default styling of all these components can be found in the components/core/avatar file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Avatar/index.tsx) of the styled `avatar` components.

```jsx
// import the styles
import {
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
} from '../components/core/avatar/styled-components';

// import the createAvatar function
import { createAvatar } from '@gluestack-ui/avatar';

// Understanding the API
const Avatar = createAvatar({
  Root,
  Badge,
  Group,
  Image,
  FallbackText,
});

// Using the avatar component
export default () => (
  <AvatarGroup>
    <Avatar>
      <AvatarFallbackText />
      <AvatarBadge />
    </Avatar>
  </AvatarGroup>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/media-and-icons/avatar).
