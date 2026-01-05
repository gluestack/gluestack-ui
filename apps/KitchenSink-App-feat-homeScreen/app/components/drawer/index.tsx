import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist'
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
import { Checkbox, CheckboxGroup, CheckboxIcon, CheckboxIndicator, CheckboxLabel } from '@/components/ui/checkbox'
import { Divider } from '@/components/ui/divider'
import { Drawer, DrawerBackdrop, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader } from '@/components/ui/drawer'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { CheckIcon, CloseIcon, Icon } from '@/components/ui/icon'
import { Pressable } from '@/components/ui/pressable'
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '@/components/ui/slider'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { Home, LogOut, ShoppingCart, User, Wallet } from 'lucide-react-native'
import React from 'react'

const ExampleBasic = () => {
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
        size="sm"
        anchor="left"
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
  )
};

const SizeMd = () => {
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
        size="md"
        anchor="left"
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
  )
};

const SizeLg = () => {
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
        size="lg"
        anchor="left"
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
  )
};

const SizeFull = () => {
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
        size="full"
        anchor="left"
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
  )
};

const ExampleFilter = () => {
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
              <Text className="font-semibold" size="sm">Categories</Text>
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
                    <Text className="text-typography-500" size="xs">(143,234)</Text>
                  </HStack>
                  <HStack className="items-center gap-1">
                    <Checkbox value="bottoms" size="sm">
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Bottoms</CheckboxLabel>
                    </Checkbox>
                    <Text className="text-typography-500" size="xs">(5,431,234)</Text>
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
  )
};

const ExampleSidebarMenu = () => {
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
              <Text size="sm" className="text-typography-600">abc@gmail.com</Text>
            </VStack>
          </DrawerHeader>
          <Divider className="my-4" />
          <DrawerBody contentContainerClassName="gap-2">
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={User} size="lg" className="text-typography-600" />
              <Text>My Profile</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Home} size="lg" className="text-typography-600" />
              <Text>Saved Address</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={ShoppingCart} size="lg" className="text-typography-600" />
              <Text>Orders</Text>
            </Pressable>
            <Pressable className="gap-3 flex-row items-center hover:bg-background-50 p-2 rounded-md">
              <Icon as={Wallet} size="lg" className="text-typography-600" />
              <Text>Saved Cards</Text>
            </Pressable>
          </DrawerBody>
          <DrawerFooter>
            <Button className="w-full gap-2" variant="outline" action="secondary">
              <ButtonText>Logout</ButtonText>
              <ButtonIcon as={LogOut} />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "md",
    label: "Md",
    content: <SizeMd />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "full",
    label: "Full",
    content: <SizeFull />,
  },
  {
    value: "filter",
    label: "Filter",
    content: <ExampleFilter />,
  },
  {
    value: "sidebar-menu",
    label: "Sidebar Menu",
    content: <ExampleSidebarMenu />,
  }
];

export default function ComponentExamples() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}