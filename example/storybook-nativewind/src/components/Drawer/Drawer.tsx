import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  // DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';

const DrawerBasic = ({ ...props }: any) => {
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <HStack className="h-full w-full bg-red-200 relative">
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        {...props}
        _experimentalOverlay={true}
      >
        {/* <DrawerBackdrop /> */}
        <DrawerContent>
          <DrawerHeader>
            <Heading size="3xl">Heading</Heading>
          </DrawerHeader>
          <DrawerBody>
            <Text size="2xl" className="text-typography-800">
              This is a sentence.
            </Text>
          </DrawerBody>
          <DrawerFooter>
            <Button
              onPress={() => {
                setShowDrawer(false);
              }}
              className="flex-1"
            >
              <ButtonText>Button</ButtonText>
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <VStack className="relative p-4">
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec
          tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam
          tincidunt, nisl nunc tincidunt urna, nec tincidunt nunc nunc vitae
          nunc. Sed euismod, nunc id aliquam tincidunt, nisl nunc tincidunt
          urna, nec tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam
          tincidunt, nisl nunc tincidunt urna.
        </Text>
        <Button
          onPress={() => {
            setShowDrawer(!showDrawer);
          }}
        >
          <ButtonText>Show Drawer</ButtonText>
        </Button>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          auctor, nunc id aliquam tincidunt, nisl nunc tincidunt urna, nec
          tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam
          tincidunt, nisl nunc tincidunt urna, nec tincidunt nunc nunc vitae
          nunc. Sed euismod, nunc id aliquam tincidunt, nisl nunc tincidunt
          urna, nec tincidunt nunc nunc vitae nunc. Sed euismod, nunc id aliquam
          tincidunt, nisl nunc tincidunt urna.
        </Text>
      </VStack>
    </HStack>
  );
};

export default DrawerBasic;
