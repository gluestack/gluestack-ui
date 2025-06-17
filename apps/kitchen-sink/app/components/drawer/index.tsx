import { ComponentPreviewer } from '@/components/custom/component-previewer';
import {
  Drawer,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
} from '@/components/ui/drawer';
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon, CloseIcon, CheckIcon } from '@/components/ui/icon';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Divider } from '@/components/ui/divider';
import {
  CheckboxGroup,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';
import { Pressable } from '@/components/ui/pressable';
import {
  Avatar,
  AvatarFallbackText,
  AvatarImage,
} from '@/components/ui/avatar';
import { User, Home, ShoppingCart, Wallet, LogOut } from 'lucide-react-native';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer
        props={{
          size: {
            control: {
              type: 'select',
            },
            options: ['sm', 'md', 'lg', 'full'],
            defaultValue: 'sm',
          },
          anchor: {
            control: {
              type: 'select',
            },
            options: ['left', 'right', 'top', 'bottom'],
            defaultValue: 'left',
          },
        }}
        title={undefined}
      >
        {(props) => {
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
                size={props.size}
                anchor={props.anchor}
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
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Filter'}>
        {(props) => {
          const [showDrawer, setShowDrawer] = React.useState(false);
          const [categories, setCategories] = React.useState([]);
          const [brands, setBrands] = React.useState([]);
          const [colors, setColors] = React.useState([]);
          return (
            <>
              <Button
                onPress={() => {
                  setShowDrawer(true);
                }}
              >
                <ButtonText>Show Filters</ButtonText>
              </Button>
              <Drawer
                isOpen={showDrawer}
                onClose={() => {
                  setShowDrawer(false);
                }}
              >
                <DrawerBackdrop />
                <DrawerContent className="px-4 py-3 w-[270px] md:w-[300px]">
                  <DrawerHeader>
                    <Heading size="md">FILTERS</Heading>
                    <Button
                      variant="link"
                      size="xs"
                      onPress={() => {
                        setCategories([]);
                        setBrands([]);
                        setColors([]);
                      }}
                    >
                      <ButtonText>Clear All</ButtonText>
                    </Button>
                  </DrawerHeader>
                  <DrawerBody className="gap-4 mt-0 mb-0">
                    <VStack className="pl-2 py-3">
                      <Text className="font-semibold" size="sm">
                        Categories
                      </Text>
                      <Divider className="my-1" />
                      <CheckboxGroup
                        value={categories}
                        onChange={(keys) => {
                          setCategories(keys);
                        }}
                      >
                        <VStack className="gap-3 mt-3 ml-1">
                          <HStack className="items-center gap-1">
                            <Checkbox value="tops" size="sm">
                              <CheckboxIndicator>
                                <CheckboxIcon as={CheckIcon} />
                              </CheckboxIndicator>
                              <CheckboxLabel>Tops</CheckboxLabel>
                            </Checkbox>
                            <Text className="text-typography-500" size="xs">
                              (143,234)
                            </Text>
                          </HStack>
                          <HStack className="items-center gap-1">
                            <Checkbox value="bottoms" size="sm">
                              <CheckboxIndicator>
                                <CheckboxIcon as={CheckIcon} />
                              </CheckboxIndicator>
                              <CheckboxLabel>Bottoms</CheckboxLabel>
                            </Checkbox>
                            <Text className="text-typography-500" size="xs">
                              (5,431,234)
                            </Text>
                          </HStack>
                        </VStack>
                      </CheckboxGroup>
                    </VStack>
                    <VStack className="pl-2 py-3">
                      <Text className="font-semibold">Price Range</Text>
                      <Divider className="my-1" />
                      <VStack className="pt-6 pr-4 ml-1">
                        <Slider
                          defaultValue={2000}
                          size="sm"
                          orientation="horizontal"
                          minValue={0}
                          maxValue={10000}
                        >
                          <SliderTrack>
                            <SliderFilledTrack />
                          </SliderTrack>
                          <SliderThumb />
                        </Slider>
                      </VStack>
                      <HStack className="justify-between pt-2">
                        <Text size="sm">0</Text>
                        <Text size="sm">10,000</Text>
                      </HStack>
                    </VStack>
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
            </>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Sidebar Menu'}>
        {(props) => {
          const [showDrawer, setShowDrawer] = React.useState(false);
          return (
            <>
              <Button
                onPress={() => {
                  setShowDrawer(true);
                }}
              >
                <ButtonText>Open Menu</ButtonText>
              </Button>
              <Drawer
                isOpen={showDrawer}
                onClose={() => {
                  setShowDrawer(false);
                }}
              >
                <DrawerBackdrop />
                <DrawerContent className="w-[270px] md:w-[300px]">
                  <DrawerHeader className="justify-center flex-col gap-2">
                    <Avatar size="2xl">
                      <AvatarFallbackText>User Image</AvatarFallbackText>
                      <AvatarImage
                        source={{
                          uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                        }}
                      />
                    </Avatar>
                    <VStack className="justify-center items-center">
                      <Text size="lg">User Name</Text>
                      <Text size="sm" className="text-typography-600">
                        abc@gmail.com
                      </Text>
                    </VStack>
                  </DrawerHeader>
                  <Divider className="my-4" />
                  <DrawerBody contentContainerClassName="gap-2">
                    <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                      <Icon
                        as={User}
                        size="lg"
                        className="text-typography-600"
                      />
                      <Text>My Profile</Text>
                    </Pressable>
                    <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                      <Icon
                        as={Home}
                        size="lg"
                        className="text-typography-600"
                      />
                      <Text>Saved Address</Text>
                    </Pressable>
                    <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                      <Icon
                        as={ShoppingCart}
                        size="lg"
                        className="text-typography-600"
                      />
                      <Text>Orders</Text>
                    </Pressable>
                    <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
                      <Icon
                        as={Wallet}
                        size="lg"
                        className="text-typography-600"
                      />
                      <Text>Saved Cards</Text>
                    </Pressable>
                  </DrawerBody>
                  <DrawerFooter>
                    <Button
                      className="w-full gap-2"
                      variant="outline"
                      action="secondary"
                    >
                      <ButtonText>Logout</ButtonText>
                      <ButtonIcon as={LogOut} />
                    </Button>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
