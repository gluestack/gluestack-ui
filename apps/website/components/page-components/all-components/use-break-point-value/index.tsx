import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App(){
         const flexDir = useBreakpointValue(\{
                default: "column",
                sm: "row",
              });
          return (
            <VStack
              style=\\{{flexDirection: flexDir, gap: 10}}
            > 
              <Box className={"justify-center items-center p-4 rounded bg-primary-500"}>
                <Text className="font-bold text-typography-0">Box 1</Text>
              </Box>
              <Box className={"justify-center items-center p-4 rounded bg-primary-600"}>
                <Text className="font-bold text-typography-0">Box 2</Text>
              </Box>
              <Box className={"justify-center items-center p-4 rounded bg-primary-700"}>
                <Text className="font-bold text-typography-0">Box 3</Text>
              </Box>
            </VStack>
          );
        }`}
      argTypes={{}}
      reactLive={{ useBreakpointValue, VStack, Box, Text }}
    />
  );
}