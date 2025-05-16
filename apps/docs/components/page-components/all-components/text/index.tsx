import { CodePreviewer } from '@/components/code-previewer';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <CodePreviewer
      code={`function Example() {
  return <Text>Hello World!</Text>
}`}
      argTypes={{}}
      reactLive={{ Text }}
    />
  );
}