# @gluestack-ui/slider

## Installation

To use `@gluestack-ui/slider`, all you need to do is install the
`@gluestack-ui/slider` package:

```sh
$ yarn add @gluestack-ui/slider

# or

$ npm i @gluestack-ui/slider
```

## Usage

The Slider component enables an intuitive selection of values within a designated range. Users can easily adjust their selection by sliding a visual indicator along the track. Here's an example how to use this package to create one:

```jsx
import {
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from '../components/core/slider/styled-components';
import { createSlider } from '@gluestack-ui/slider';
const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
});
```

## Customizing the slider:

Default styling of all these components can be found in the components/core/slider file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/development/example/storybook/src/ui-components/Slider/index.tsx) of the styled `slider` components.

```jsx
// import the styles
import {
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
} from '../components/core/slider/styled-components';

// import the createSlider function
import { createSlider } from '@gluestack-ui/slider';

// Understanding the API
const Slider = createSlider({
  Root,
  Thumb,
  Track,
  FilledTrack,
  ThumbInteraction,
});

// Using the Slider component
export default () => (
  <Slider>
    <SliderTrack>
      <SliderFilledTrack />
    </SliderTrack>
    <SliderThumb />
  </Slider>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/components/forms/slider).
