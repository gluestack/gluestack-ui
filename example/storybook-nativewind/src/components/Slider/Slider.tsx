import React from 'react';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';

const SliderBasic = ({ ...props }: any) => {
  const [sliderValue, setSliderValue] = React.useState(props.value);
  const handleChange = (value: any) => {
    setSliderValue(value);
  };

  return (
    <Slider
      {...props}
      value={sliderValue}
      className="w-[300px] h-[300px] mt-4"
      onChange={(value: any) => {
        handleChange(value);
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
