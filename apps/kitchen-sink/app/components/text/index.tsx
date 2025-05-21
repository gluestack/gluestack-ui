import { CodePreviewer } from '@/components/custom/code-previewer';
import { Text } from '@/components/ui/text';

<CodePreviewer
  code={`function Example() {
  return <Text>Hello World!</Text>
}`}
  argTypes={{}}
  reactLive={{ Text }}
/>