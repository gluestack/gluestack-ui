import { ComponentPreviewer } from "@/components/custom/component-previewer";
import { Portal } from "@/components/ui/portal";
import { HStack } from "@/components/ui/hstack";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ButtonText } from "@/components/ui/button";
import { ButtonIcon } from "@/components/ui/button";
import { CloseIcon } from "@/components/ui/icon";

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App() {
  const [visible, setVisible] = React.useState(false)
  const handleClose = () => setVisible(false)
  return (
    <>
      <Portal isOpen={visible} className="justify-center items-center">
        <HStack className="border-2 w-1/3 py-10 gap-4 rounded-lg flex-row justify-center items-center bg-background-0">
          <Text className="text-typography-950">Portal Content</Text>
          <Button
            size="xs"
            className="h-6 px-1 absolute top-2 right-2"
            variant="outline"
            onPress={handleClose}
          >
            <ButtonIcon as={CloseIcon} />
          </Button>
        </HStack>
      </Portal>
      <Button onPress={() => setVisible(!visible)}>
        <ButtonText>Toggle Portal</ButtonText>
      </Button>
    </>
  )
}`}
      argTypes={{}}
      reactLive={{ Portal, HStack, Text, Button, ButtonText, ButtonIcon, CloseIcon }}
    />
  );
}
