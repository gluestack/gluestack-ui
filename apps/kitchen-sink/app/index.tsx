import React from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import {  useRouter } from 'expo-router';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';

const components = [
  { name: 'Accordion', path: 'components/accordion' },
  { name: 'ActionSheet', path: 'components/actionsheet' },
  { name: 'Alert', path: 'components/alert' },
  { name: 'AlertDialog', path: 'components/alert-dialog' },
  { name: 'Avatar', path: 'components/avatar' },
  { name: 'Badge', path: 'components/badge' },
  { name: 'BottomSheet', path: 'components/bottomsheet' },
  { name: 'Box', path: 'components/box' },
  { name: 'Button', path: 'components/button' },
  { name: 'Card', path: 'components/card' },
  { name: 'Center', path: 'components/center' },
  { name: 'Checkbox', path: 'components/checkbox' },
  { name: 'Divider', path: 'components/divider' },
  { name: 'Drawer', path: 'components/drawer' },
  { name: 'FAB', path: 'components/fab' },
  { name: 'FormControl', path: 'components/form-control' },
  { name: 'Grid', path: 'components/grid' },
  { name: 'Heading', path: 'components/heading' },
  { name: 'HStack', path: 'components/hstack' },
  { name: 'Icon', path: 'components/icon' },
  { name: 'Image', path: 'components/image' },
  { name: 'Input', path: 'components/input' },
  { name: 'Link', path: 'components/link' },
  { name: 'Menu', path: 'components/menu' },
  { name: 'Modal', path: 'components/modal' },
  { name: 'Popover', path: 'components/popover' },
  { name: 'Portal', path: 'components/portal' },
  { name: 'Pressable', path: 'components/pressable' },
  { name: 'Progress', path: 'components/progress' },
  { name: 'Radio', path: 'components/radio' },
  { name: 'Select', path: 'components/select' },
  { name: 'Skeleton', path: 'components/skeleton' },
  { name: 'Slider', path: 'components/slider' },
  { name: 'Spinner', path: 'components/spinner' },
  { name: 'Switch', path: 'components/switch' },
  { name: 'Table', path: 'components/table' },
  { name: 'Text', path: 'components/text' },
  { name: 'TextArea', path: 'components/textarea' },
  { name: 'Toast', path: 'components/toast' },
  { name: 'Tooltip', path: 'components/tooltip' },
  { name: 'VStack', path: 'components/vstack' },
];

export default function ComponentList() {
  const router = useRouter();

  return (
    <ScrollView>
      <Box p="$4">
        <Heading size="2xl" mb="$6">
          GlueStack UI Components
        </Heading>
        <VStack space="sm">
          {components.map((component) => (
            <Pressable
              key={component.name}
              onPress={() => router.push(component.path)}
            >
              <Box

              >
                <Text>
                  {component.name}
                </Text>
              </Box>
            </Pressable>
          ))}
        </VStack>
      </Box>
    </ScrollView>
  );
}
