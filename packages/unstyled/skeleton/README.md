# `@gluestack-ui/skeleton`

Skeleton showcases the loading state of a component.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx install @gluestack-ui/skeleton
```

## Usage

Default styling of all these components can be found in the components/skeleton file.

```jsx
// import the styles
import {
  Root as StyledSkeletonRoot,
  Highlight as StyledSkeletonHighlight,
  Text as StyledSkeletonText,
} from './styled-components';

// import the createSkeleton function
import { createSkeleton } from '@gluestack-ui/skeleton';

export const Skeleton = createSkeleton(
  {
    Root: StyledSkeletonRoot,
    Highlight: StyledSkeletonHighlight,
    Text: StyledSkeletonText,
  },
  {}
);
export const SkeletonText = Skeleton.Text;

// Using the skeleton component
export default () => (
  <>
    <Skeleton h={40} mb="$3" $_highlight-bg="blue" />
    <Skeleton.Text lines={4} />
    <Skeleton isLoaded>
      <Text>Loaded!</Text>
    </Skeleton>
  </>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
