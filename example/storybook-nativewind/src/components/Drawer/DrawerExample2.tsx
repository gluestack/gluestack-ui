import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from '@/components/ui/drawer';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  User,
  Home,
  ShoppingCart,
  CreditCard,
  LogIn,
} from 'lucide-react-native';
import { Icon, StarIcon, PhoneIcon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { HStack } from '@/components/ui/hstack';
import { Divider } from '@/components/ui/divider';

const DrawerExample2 = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);

  return (
    <>
      <Button
        onPress={() => {
          setShowDrawer(true);
        }}
      >
        <ButtonText>Show Drawer</ButtonText>
      </Button>
      <Drawer
        isOpen={showDrawer}
        onClose={() => {
          setShowDrawer(false);
        }}
        size="sm"
        anchor="left"
      >
        <DrawerBackdrop />
        <DrawerContent className="">
          <DrawerHeader className="justify-center flex-col gap-2">
            <Avatar size="2xl">
              <AvatarFallbackText>User Image</AvatarFallbackText>
              <AvatarImage
                source={{
                  uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }}
              />
            </Avatar>
            <Text size="lg">User Name</Text>
            <Divider />
          </DrawerHeader>
          <DrawerBody className="px-2 pt-4" contentContainerClassName="gap-6">
            <HStack className="gap-4">
              {/* User is imported from 'lucide-react-native' */}
              <Icon as={User} size="xl" className="text-typography-600" />
              <Text>My Profile</Text>
            </HStack>
            <HStack className="gap-4">
              {/* Home is imported from 'lucide-react-native' */}
              <Icon as={Home} size="xl" className="text-typography-600" />
              <Text>Saved Address</Text>
            </HStack>
            <HStack className="gap-4">
              {/* ShoppingCart is imported from 'lucide-react-native' */}
              <Icon
                as={ShoppingCart}
                size="xl"
                className="text-typography-600"
              />
              <Text>Orders</Text>
            </HStack>
            <HStack className="gap-4">
              {/* CreditCard is imported from 'lucide-react-native' */}
              <Icon as={CreditCard} size="xl" className="text-typography-600" />
              <Text>Saved Cards</Text>
            </HStack>
            <HStack className="gap-4">
              <Icon as={StarIcon} size="xl" className="text-typography-600" />
              <Text>Review App</Text>
            </HStack>
            <HStack className="gap-4">
              <Icon as={PhoneIcon} size="xl" className="text-typography-600" />
              <Text>Contact Us</Text>
            </HStack>
            <HStack className="gap-4">
              {/* LogIn is imported from 'lucide-react-native' */}
              <Icon as={LogIn} size="xl" className="text-typography-600" />
              <Text>Sign In</Text>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerExample2;
