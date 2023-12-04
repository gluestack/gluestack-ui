# @gluestack-ui/image

## Installation

To use `@gluestack-ui/image`, all you need to do is install the
`@gluestack-ui/image` package:

```sh
$ yarn add @gluestack-ui/image

# or

$ npm i @gluestack-ui/image
```

## Usage

A image component is a graphical user interface element that enables users to act by clicking or tapping. It can be customized in size, shape, color, and behavior to fit the design of the application or website. Here's an example how to use this package to create one:

```jsx
import { createImage } from '@gluestack-ui/image';
import { Root } from './styled-components';

export const Image = createImage({
  Root,
});
```

## Customizing the Image:

Default styling of all these components can be found in the components/core/image file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Image/index.tsx) of the styled `Image` components.

```jsx
// import the styles
import { Root } from '../components/core/image/styled-components';

// import the createImage function
import { createImage } from '@gluestack-ui/image';

// Understanding the API
const Image = createImage({
  Root,
});

// Using the image component
export default () => <Image />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/image).
