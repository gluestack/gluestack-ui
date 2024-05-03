// SliderGrid.tsx
import React from 'react';

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '../components/ui/slider';
const SliderGrid = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center w-[400px] h-2">
        <Slider
          defaultValue={30}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div className="flex justify-center items-center w-[400px] h-2">
        <Slider
          defaultValue={50}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div className="flex justify-center items-center w-[400px] h-2">
        <Slider
          defaultValue={80}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
      <div className="flex justify-center items-center w-[400px] h-2">
        <Slider
          defaultValue={20}
          size="md"
          orientation="horizontal"
          isDisabled={false}
          isReversed={false}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </div>
    </div>
  );
};

export default SliderGrid;
