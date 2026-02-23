import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Heading } from '@/components/ui/heading';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return <Heading>I am a Heading</Heading>
}`}
      argTypes={{}}
      reactLive={{ Heading }}
      
    />
  );
}