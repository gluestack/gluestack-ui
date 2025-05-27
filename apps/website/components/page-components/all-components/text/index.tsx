import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return <Text>Hello World!</Text>
}`}
      argTypes={{}}
      reactLive={{ Text }}
      title={}
      description={}
    />
  );
}