# @gluestack-ui/alert

## Installation

To use `@gluestack-ui/alert`, all you need to do is install the
`@gluestack-ui/alert` package:

```sh
$ yarn add @gluestack-ui/alert

# or

$ npm i @gluestack-ui/alert
```

## Usage

Alerts are used to communicate the status of a system, feature, or page. They indicate a specific state that may require attention from the user. Here's an example how to use this package to create one:

```jsx
import { createAlert } from '@gluestack-ui/alert';
import { Root, Text, Icon } from './styled-components';
export const Alert = createAlert({
  Root,
  Text,
  Icon,
});
```

## Customizing the Alert:

Default styling of all these components can be found in the components/core/alert file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Alert/index.tsx) of the styled `Alert` components.

```jsx
// import the styles
import { Root, Text, Icon } from '../components/core/alert/styled-components';

// Understanding the API
const Alert: any = Root;
AlertIcon = Icon;
AlertText = Text;

// Using the alert component
export default () => (
  <Alert>
    <AlertIcon />
    <AlertText />
  </Alert>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/feedback/alert)
