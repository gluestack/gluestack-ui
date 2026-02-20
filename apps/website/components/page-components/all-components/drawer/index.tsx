import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Drawer } from '@/components/ui/drawer';
import { DrawerBackdrop } from '@/components/ui/drawer';
import { DrawerContent } from '@/components/ui/drawer';
import { DrawerHeader } from '@/components/ui/drawer';
import { DrawerBody } from '@/components/ui/drawer';
import { DrawerFooter } from '@/components/ui/drawer';
import { DrawerCloseButton } from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { CloseIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { Divider } from '@/components/ui/divider';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [showDrawer, setShowDrawer] = React.useState(false);
  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Open Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        size="{{size}}"
        anchor="{{anchor}}"
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent className="pt-safe">
          <DrawerHeader>
            <Heading size="lg" className="text-foreground font-semibold">
              Drawer
            </Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} className="stroke-foreground" size="lg" />
            </DrawerCloseButton>
          </DrawerHeader>
         <DrawerBody>
            <Text>This is the basic drawer component.</Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
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
      reactLive={{ Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton, Button, ButtonText, Heading, Text, Icon, CloseIcon, VStack, Divider }}
      
    />
  );
}