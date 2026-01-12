import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip'
import { Button, ButtonText } from '@/components/ui/button'
import { Avatar, AvatarGroup, AvatarFallbackText } from '@/components/ui/avatar'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { Heading } from '@/components/ui/heading'
import { VStack } from '@/components/ui/vstack'
import { Center } from '@/components/ui/center'
import { EditIcon, Icon } from '@/components/ui/icon'
import { Command } from 'lucide-react-native'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
return (
    <Tooltip
      placement="top"
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps}>
            <ButtonText>Hover on me!</ButtonText>
          </Button>
        )
      }}
    >
      <TooltipContent>
        <TooltipText>Tooltip</TooltipText>
      </TooltipContent>
    </Tooltip>
  )
};

const ExampleTooltipWithHeading = () => {
return (
            <Box className="justify-center h-96">
              <AvatarGroup className="flex-row">
                <Tooltip
                  placement="top"
                  trigger={(triggerProps) => {
                    return (
                      <Avatar
                        size="lg"
                        {...triggerProps}
                        className="border-border bg-primary"
                      >
                        <AvatarFallbackText>+ 3</AvatarFallbackText>
                      </Avatar>
                    )
                  }}
                >
                  <TooltipContent
                    className="p-4 rounded-md max-w-72 bg-muted"
                  >
                    <VStack space='md' className="rounded-lg">
                      <Heading size="sm">View all members of this channel</Heading>
                      <Center>
                        <Text className="font-sm">Includes John, Sarah, Mike, Emily</Text>
                        <Text className="font-sm">and David</Text>
                      </Center>
                    </VStack>
                  </TooltipContent>
                </Tooltip>
               <Avatar size="lg"
                    className="border-border bg-emerald-600" >
                      <AvatarFallbackText className="text-primary-foreground">Sandeep Srivastva</AvatarFallbackText>
                </Avatar>
                   <Avatar size="lg" className="border-border bg-cyan-600" >
                      <AvatarFallbackText className="text-primary-foreground">Arjun Kapoor</AvatarFallbackText>
                </Avatar>
                      <Avatar size="lg"
                    className="border-border bg-indigo-600" >
                      <AvatarFallbackText className="text-primary-foreground">Ritik Sharma </AvatarFallbackText>
                </Avatar>
              </AvatarGroup>
            </Box>
          )
};

const ExampleTooltipWithIcon = () => {
return (
            <Box className="h-96 justify-center">
              <Tooltip
                  placement="top"
                  trigger={(triggerProps) => {
                    return (
                    <Avatar size="md" {...triggerProps} className="bg-primary">
                      <Icon as={EditIcon} size="sm" className="text-primary-foreground"/>
                    </Avatar>
                    )
                  }}
              >
                <TooltipContent
                className="bg-muted rounded-md"
                >
                  <Box className="p-2.5">
                    <Text size="sm">New message</Text>
                    <HStack space="xs" className="p-1 ml-3">
                          <Avatar size="xs" className="bg-gray-500 rounded">
                              <Icon as={Command} className="text-primary-foreground"/>
                          </Avatar>
                          <Avatar size="xs" className="bg-gray-500 rounded">
                            <AvatarFallbackText>N</AvatarFallbackText>
                          </Avatar>
                    </HStack>
                  </Box>
                </TooltipContent>
              </Tooltip>
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
    value: "tooltip-with-heading",
    label: "Tooltip with Heading",
    content: <ExampleTooltipWithHeading />,
  },
  {
    value: "tooltip-with-icon",
    label: "Tooltip with Icon",
    content: <ExampleTooltipWithIcon />,
  }
];

export default function TooltipScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}