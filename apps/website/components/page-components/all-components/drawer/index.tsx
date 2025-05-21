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
        onClose={() => {
          setShowDrawer(false);
        }}
      >
        <DrawerBackdrop />
        <DrawerContent>
          <DrawerHeader>
            <Heading size="lg">Menu</Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} />
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
      argTypes={{}}
      reactLive={{ Drawer, DrawerBackdrop, DrawerContent, DrawerHeader, DrawerBody, DrawerFooter, DrawerCloseButton, Button, ButtonText, Heading, Text, Icon, CloseIcon }}
    />
  );
}