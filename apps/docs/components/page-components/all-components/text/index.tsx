import { ComponentPreviewer } from '@/components/component-previewer';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return <Text>Hello World!</Text>
}`}
      argTypes={{}}
      reactLive={{ Text }}
    />
  );
}