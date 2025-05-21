import { CodePreviewer } from '@/components/custom/code-previewer';
import { Spinner } from '@/components/ui/spinner';


export default function ComponentExamples() {
  return (
    <div>
      <CodePreviewer
  code={`function Example() {
  return <Spinner size="{{size}}" color="{{color}}" />
}`}
  argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "small",
      "large"
    ],
    "defaultValue": "small"
  },
  "color": {
    "control": {
      "type": "select"
    },
    "options": [
      "red",
      "blue",
      "green",
      "black",
      "orange",
      "purple",
      "yellow"
    ],
    "defaultValue": "red"
  }
}}
  reactLive={{ Spinner }}
/>
    </div>
  );
}