# `@gluestack-ui/progress`

The Progress component is designed to display the progress of a task that involves multiple steps and takes some time to complete. It helps users stay informed about the current status of a lengthy process.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx gluestack-ui@latest add progress
```

## Usage

Default styling of the component can be found in the components/core/progress file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Progress/styled-components/index.tsx) of the styled Progress component.

```jsx
// import the styles
import {
  Root,
  FilledTrack,
} from '../components/core/progress/styled-components';

// import the createProgress function
import { createProgress } from '@gluestack-ui/progress';

// Understanding the API
const Progress = createProgress({
  Root,
  FilledTrack,
});

// Using the Progress component
export default () => (
  <Progress>
    <ProgressFilledTrack />
  </Progress>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
