import { CodePreviewer } from '@/components/code-previewer';
import { Drawer } from '@/components/ui/drawer';
import { DrawerBackdrop } from '@/components/ui/drawer';
import { DrawerContent } from '@/components/ui/drawer';
import { DrawerHeader } from '@/components/ui/drawer';
import { DrawerBody } from '@/components/ui/drawer';
import { DrawerFooter } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <CodePreviewer
      code={`function App() {
  const [showDrawer, setShowDrawer] = React.useState(false)
  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true)
        }}
      >
        <ButtonText>Show Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false)
        }}
        size="{{size}}"
        anchor="{{anchor}}"
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="{{size}}">Heading</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Text size="{{size}}" className="text-typography-800">
              This is a sentence.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onPress={() => {
                setShowDrawer(false)
              }}
              className="flex-1"
            >
              <ButtonText>Button</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "sm",
      "md",
      "lg",
      "full"
    ],
    "defaultValue": "sm"
  },
  "anchor": {
    "control": {
      "type": "select"
    },
    "options": [
      "left",
      "right",
      "top",
      "bottom"
    ],
    "defaultValue": "left"
  }
}}
      reactLive={{ Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, Button, ButtonText, Heading, Text }}
    />
  );
}