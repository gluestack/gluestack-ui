import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';

const SliderBasic = ({ ...props }: any) => {
  const [value, setValue] = React.useState(30);
  return (
    <Slider
      {...props}
      value={value}
      onChange={(value: number) => {
        setValue(value);
      }}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

SliderBasic.description =
  'This is a basic Slider component example. Sliders are used to select a value from a range of values.';

export default SliderBasic;

export { Slider, SliderTrack, SliderFilledTrack, SliderThumb };
