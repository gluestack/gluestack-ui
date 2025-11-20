import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Card className="w-80">
      <Heading size="md" className="mb-1">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  )
}`}
      argTypes={{}}
      reactLive={{ Card, Heading, Text }}
    />
  );
}