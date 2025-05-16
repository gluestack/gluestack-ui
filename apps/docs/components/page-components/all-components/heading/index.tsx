import { CodePreviewer } from '@/components/code-previewer';
import { Heading } from '@/components/ui/heading';

export default function Example() {
  return (
    <CodePreviewer
      code={`function Example() {
  return <Heading>I am a Heading</Heading>
}`}
      argTypes={{}}
      reactLive={{ Heading }}
    />
  );
}