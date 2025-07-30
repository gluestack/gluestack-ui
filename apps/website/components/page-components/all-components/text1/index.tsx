import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Text1 } from '@/components/ui/text1';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Text1/>
  )
}`}
      argTypes={{}}
      reactLive={{ Text1 }}
    />
  );
}