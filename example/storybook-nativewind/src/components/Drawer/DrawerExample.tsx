import React from 'react';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Drawer,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
} from '@/components/ui/drawer';
import { Heading } from '@/components/ui/heading';
import { CheckIcon, CircleIcon, Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Divider } from '@/components/ui/divider';
import {
  CheckboxGroup,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
} from '@/components/ui/checkbox';
import { HStack } from '@/components/ui/hstack';
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@/components/ui/slider';

const DrawerBasic = () => {
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [categories, setCategories] = React.useState();
  const [brands, setBrands] = React.useState();
  const [colors, setColors] = React.useState();

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
        <DrawerContent className="px-4 py-2">
          <DrawerHeader>
            <Heading size="md">FILTERS</Heading>
            <Button variant="link" size="xs">
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
                //@ts-ignore
                value={categories}
                onChange={(keys) => {
                  setCategories(keys);
                }}
                className="flex flex-col gap-3 mt-3 ml-1"
              >
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
                <HStack className="items-center gap-1">
                  <Checkbox value="shoes" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Shoes</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (98,234)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="accessories" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Accessories</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (91,234)
                  </Text>
                </HStack>
              </CheckboxGroup>
            </VStack>

            <VStack className="pl-2 py-3">
              <Text className="font-semibold">Brands</Text>
              <Divider className="my-1" />
              <CheckboxGroup
                //@ts-ignore
                value={brands}
                onChange={(keys) => {
                  setBrands(keys);
                }}
                className="flex flex-col gap-3 mt-3 ml-1"
              >
                <HStack className="items-center gap-1">
                  <Checkbox value="tops" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Allen Solly</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (1,234)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="bottoms" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Adidas</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (524)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="shoes" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Nike</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (931)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="accessories" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel>Marks & Spencer</CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (1,241)
                  </Text>
                </HStack>
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

            <VStack className="pl-2 py-3">
              <Text className="font-semibold">Colour</Text>
              <Divider className="my-1" />
              <CheckboxGroup
                //@ts-ignore
                value={colors}
                onChange={(keys) => {
                  setColors(keys);
                }}
                className="flex flex-col gap-3 mt-3 ml-1"
              >
                <HStack className="items-center gap-1">
                  <Checkbox value="tops" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel className="flex flex-row items-center">
                      <Icon
                        as={CircleIcon}
                        className="fill-gray-200 text-gray-200 mr-1"
                      />
                      White
                    </CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (23,673)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="bottoms" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel className="flex flex-row items-center">
                      <Icon
                        as={CircleIcon}
                        className="fill-black text-black mr-1"
                      />
                      Black
                    </CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (54,657)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="shoes" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel className="flex flex-row items-center">
                      <Icon
                        as={CircleIcon}
                        className="fill-red-500 text-red-500 mr-1"
                      />
                      Red
                    </CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (45,678)
                  </Text>
                </HStack>
                <HStack className="items-center gap-1">
                  <Checkbox value="accessories" size="sm">
                    <CheckboxIndicator>
                      <CheckboxIcon as={CheckIcon} />
                    </CheckboxIndicator>
                    <CheckboxLabel className="flex flex-row items-center">
                      <Icon
                        as={CircleIcon}
                        className="fill-amber-900 text-amber-900 mr-1"
                      />
                      Brown
                    </CheckboxLabel>
                  </Checkbox>
                  <Text className="text-typography-500" size="xs">
                    (13,672)
                  </Text>
                </HStack>
              </CheckboxGroup>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerBasic;
