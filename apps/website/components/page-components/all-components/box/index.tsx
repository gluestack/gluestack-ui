import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
    <Box className="bg-primary-500 p-5">
      <Text className="text-typography-0">This is the Box</Text>
    </Box>
  )
}`}
      argTypes={{}}
      reactLive={{ Box, Text }}
      title={}
      description={}
    />
  );
}