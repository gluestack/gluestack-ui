import React from 'react';
import {
  Center,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
} from '@gluestack-ui/themed';

const RangeSliderBasic = ({ ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState([30, 49]);

  return (
    <Center>
      <RangeSlider
        sliderTrackHeight={4}
        {...props}
        w={300}
        h={300}
        mt="$4"
        value={sliderValue}
        onChange={setSliderValue}
        label="Range"
        orientation="vertical"
        // isDisabled
        // isReadOnly
      >
        <RangeSlider.Track>
          <RangeSlider.FilledTrack />
        </RangeSlider.Track>
        <RangeSlider.LeftThumb />
        <RangeSlider.RightThumb />
      </RangeSlider>
    </Center>
  );
};

RangeSliderBasic.description =
  'This is a basic RangeSlider component example. RangeSlider are used to select a value from a range of values.';

export default RangeSliderBasic;

export {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderLeftThumb,
  RangeSliderRightThumb,
};
