import { Switch } from '@/components/ui/switch'
import { Text } from '@/components/ui/text'
import { HStack } from '@/components/ui/hstack'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Switch
      size="md"
      isDisabled={ false }
      trackColor={ {false: "#d4d4d4", true: "#525252"} }
      thumbColor="#fafafa"
      activeThumbColor="#fafafa"
      ios_backgroundColor="#d4d4d4"
    />
  )
};

const SizeSm = () => {
return (
    <Switch
      size="sm"
      isDisabled={ false }
      trackColor={ {false: "#d4d4d4", true: "#525252"} }
      thumbColor="#fafafa"
      activeThumbColor="#fafafa"
      ios_backgroundColor="#d4d4d4"
    />
  )
};

const SizeLg = () => {
return (
    <Switch
      size="lg"
      isDisabled={ false }
      trackColor={ {false: "#d4d4d4", true: "#525252"} }
      thumbColor="#fafafa"
      activeThumbColor="#fafafa"
      ios_backgroundColor="#d4d4d4"
    />
  )
};

const ExampleSwitchWithLabel = () => {
return (
    <HStack space="md">
          <Switch
            trackColor={ {false: "#d4d4d4", true: "#525252"} }
            thumbColor="#fafafa"
            activeThumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
          />
          <Text size="sm" >Allow notifications</Text>
        </HStack>
  )
};

const ExampleCheckedState = () => {
return (
    <HStack space="md">
          <Switch
            defaultValue={true}
            trackColor={ {false: "#d4d4d4", true: "#525252"} }
            thumbColor="#fafafa"
            activeThumbColor="#fafafa"
            ios_backgroundColor="#d4d4d4"
          />
          <Text size="sm" >Public profile</Text>
        </HStack>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "sm",
    label: "Sm",
    content: <SizeSm />,
  },
  {
    value: "lg",
    label: "Lg",
    content: <SizeLg />,
  },
  {
    value: "switch-with-label",
    label: "Switch With Label",
    content: <ExampleSwitchWithLabel />,
  },
  {
    value: "checked-state",
    label: "Checked State",
    content: <ExampleCheckedState />,
  }
];

export default function SwitchScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}