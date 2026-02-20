import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Progress } from '@/components/ui/progress';
import { ProgressFilledTrack } from '@/components/ui/progress';
import { Center } from '@/components/ui/center';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Center className="w-[300px] h-[150px]">
      <Progress value={40} orientation="{{orientation}}">
        <ProgressFilledTrack />
      </Progress>
    </Center>
  )
}`}
      argTypes={{
  "orientation": {
    "control": {
      "type": "select"
    },
    "options": [
      "horizontal",
      "vertical"
    ],
    "defaultValue": "horizontal"
  }
}}
      reactLive={{ Progress, ProgressFilledTrack, Center }}
      
    />
  );
}