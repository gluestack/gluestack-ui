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
        <DrawerContent>
          <DrawerHeader>
            <Heading size="xl" className="text-foreground font-semibold">
              Settings
            </Heading>
            <DrawerCloseButton>
              <Icon as={CloseIcon} className="stroke-foreground" size="lg" />
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <VStack className="gap-6">
              <VStack className="gap-2">
                <Heading size="md" className="text-foreground">
                  Updated Design
                </Heading>
                <Text className="text-muted-foreground text-sm leading-5">
                  This drawer features the new gluestack design system with:
                </Text>
                <VStack className="gap-1.5 pl-4">
                  <Text className="text-foreground text-sm">• Consistent borders and shadows</Text>
                  <Text className="text-foreground text-sm">• Smooth spring animations</Text>
                  <Text className="text-foreground text-sm">• Improved backdrop overlay</Text>
                  <Text className="text-foreground text-sm">• Better dark mode support</Text>
                </VStack>
              </VStack>
              <Divider />
              <VStack className="gap-2">
                <Text className="text-foreground font-medium">Test the controls:</Text>
                <Text className="text-muted-foreground text-sm">
                  Use the size and anchor controls above to see different drawer positions and sizes.
                </Text>
              </VStack>
            </VStack>
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
            <Button
              onPress={() => {
                setShowDrawer(false);
              }}
            >
              <ButtonText>Save Changes</ButtonText>
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