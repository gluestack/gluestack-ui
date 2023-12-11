# @gluestack-ui/spinner

## Installation

To use `@gluestack-ui/spinner`, all you need to do is install the
`@gluestack-ui/spinner` package:

```sh
$ yarn add @gluestack-ui/spinner

# or

$ npm i @gluestack-ui/spinner
```

## Usage

Spinners are designed to give visual cues to users that an action is being processed or that a change or result is expected. They are useful for improving the user experience by reducing frustration and uncertainty. Here's an example how to use this package to create one:

```jsx
import { createSpinner } from '@gluestack-ui/spinner';
import { Root } from './styled-components';

export const Spinner = createSpinner({ Root });
```

## Customizing the Spinner:

Default styling of all these components can be found in the components/core/spinner file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Spinner/index.tsx) of the styled `Spinner` components.

```jsx
// import the styles
import { Root } from '../components/core/spinner/styled-components';

// import the createSpinner function
import { createSpinner } from '@gluestack-ui/spinner';

// Understanding the API
const Spinner = createSpinner({
  Root,
});

// Using the spinner component
export default () => <Spinner />;
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/feedback/spinner).
