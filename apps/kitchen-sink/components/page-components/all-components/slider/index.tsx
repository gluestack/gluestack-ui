import { ComponentPreviewer } from '@/components/custom/component-previewer';

import { Slider } from '@/components/ui/slider';
import { SliderTrack } from '@/components/ui/slider';
import { SliderFilledTrack } from '@/components/ui/slider';
import { SliderThumb } from '@/components/ui/slider';
import { Center } from '@/components/ui/center';

export default function Example() {
  return (
    <ComponentPreviewer props={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg"
    ],
    "defaultValue": "md"
  },
  "orientation": {
    "control": {
      "type": "select"
    },
    "options": [
      "horizontal",
      "vertical"
    ],
    "defaultValue": "horizontal"
  },
  "isDisabled": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  },
  "isReversed": {
    "control": {
      "type": "boolean"
    },
    "defaultValue": false
  }
}}>
      {props => {
  return (
    <Center className="w-[300px] h-[150px]">
      <Slider
        defaultValue={30}
        size={props.size}
        orientation={props.orientation}
        isDisabled={ {{isDisabled}} }
        isReversed={ {{isReversed}} }
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Center>
  )
}
    </ComponentPreviewer>
  );
}