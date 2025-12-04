import { Badge, BadgeText, BadgeIcon } from '@/components/ui/badge'
import { GlobeIcon } from '@/components/ui/icon'
import { Avatar, AvatarFallbackText, AvatarImage } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { VStack } from '@/components/ui/vstack'
import { BadgeCheckIcon } from 'lucide-react-native'
import { Box } from '@/components/ui/box'
import { Button, ButtonText } from '@/components/ui/button'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Badge variant="default">
      <BadgeText>New</BadgeText>
    </Badge>
  )
};

const VariantSecondary = () => {
return (
    <Badge variant="secondary">
      <BadgeText>New</BadgeText>
    </Badge>
  )
};

const VariantDestructive = () => {
return (
    <Badge variant="destructive">
      <BadgeText>New</BadgeText>
    </Badge>
  )
};

const VariantOutline = () => {
return (
    <Badge variant="outline">
      <BadgeText>New</BadgeText>
    </Badge>
  )
};

const ExampleBadgeWithAvatar = () => {
return (
    <VStack space="2xl">
      <HStack space="md">
        <Avatar>
          <AvatarFallbackText>SS</AvatarFallbackText>
          <AvatarImage
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
            }}
          />
        </Avatar>
        <VStack>
          <HStack>
            <Heading size="sm">Ronald Richards</Heading>
            <Badge size="sm" variant="solid" action="success" className='ml-1'>
              <BadgeText>Verified</BadgeText>
              <BadgeIcon as={BadgeCheckIcon} className='ml-1'/>
            </Badge>
          </HStack>
          <Text size='sm'>Nursing Assistant</Text>
        </VStack>
      </HStack>
    </VStack>
  )
};

const ExampleBadgeComposition = () => {
return (
    <Box className='items-center'>
      <VStack>
        <Badge  
          className='z-10 self-end h-[22px] w-[22px] bg-red-600 rounded-full -mb-3.5 -mr-3.5'
          variant="solid"
        >
          <BadgeText className='text-white'>2</BadgeText>
        </Badge>
        <Button>
          <ButtonText>
            Notifications
          </ButtonText>
        </Button>
      </VStack>
    </Box>
  )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "secondary",
    label: "Secondary",
    content: <VariantSecondary />,
  },
  {
    value: "destructive",
    label: "Destructive",
    content: <VariantDestructive />,
  },
  {
    value: "outline",
    label: "Outline",
    content: <VariantOutline />,
  },
  {
    value: "badge-with-avatar",
    label: "Badge with Avatar",
    content: <ExampleBadgeWithAvatar />,
  },
  {
    value: "badge-composition",
    label: "Badge Composition",
    content: <ExampleBadgeComposition />,
  }
];

export default function BadgeScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}