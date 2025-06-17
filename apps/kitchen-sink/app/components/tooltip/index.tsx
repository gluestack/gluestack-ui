import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Tooltip, TooltipContent, TooltipText } from '@/components/ui/tooltip';
import { Button, ButtonText } from '@/components/ui/button';
import {
  Avatar,
  AvatarGroup,
  AvatarFallbackText,
} from '@/components/ui/avatar';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { EditIcon, Icon } from '@/components/ui/icon';
import { Command } from 'lucide-react-native';

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
          placement: {
            control: {
              type: 'select',
            },
            options: [
              'top',
              'top left',
              'top right',
              'bottom',
              'bottom left',
              'bottom right',
              'left',
              'left top',
              'left bottom',
              'right',
              'right top',
              'right bottom',
            ],
            defaultValue: 'top',
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return (
            <Tooltip
              placement={props.placement}
              trigger={(triggerProps) => {
                return (
                  <Button {...triggerProps}>
                    <ButtonText>Hover on me!</ButtonText>
                  </Button>
                );
              }}
            >
              <TooltipContent>
                <TooltipText>Tooltip</TooltipText>
              </TooltipContent>
            </Tooltip>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Tooltip with Heading'}>
        {(props) => {
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
                        className="border-outline-0 border-2 bg-primary-600"
                      >
                        <AvatarFallbackText>+ 3</AvatarFallbackText>
                      </Avatar>
                    );
                  }}
                >
                  <TooltipContent className="p-4 rounded-md max-w-72 bg-background-50">
                    <VStack space="md" className="rounded-lg">
                      <Heading size="sm">
                        View all members of this channel
                      </Heading>
                      <Center>
                        <Text className="font-sm">
                          Includes John, Sarah, Mike, Emily
                        </Text>
                        <Text className="font-sm">and David</Text>
                      </Center>
                    </VStack>
                  </TooltipContent>
                </Tooltip>
                <Avatar
                  size="lg"
                  className="border-outline-0 border-2 bg-emerald-600"
                >
                  <AvatarFallbackText className="text-white">
                    Sandeep Srivastva
                  </AvatarFallbackText>
                </Avatar>
                <Avatar
                  size="lg"
                  className="border-outline-0 border-2 bg-cyan-600"
                >
                  <AvatarFallbackText className="text-white">
                    Arjun Kapoor
                  </AvatarFallbackText>
                </Avatar>
                <Avatar
                  size="lg"
                  className="border-outline-0 border-2 bg-indigo-600"
                >
                  <AvatarFallbackText className="text-white">
                    Ritik Sharma{' '}
                  </AvatarFallbackText>
                </Avatar>
              </AvatarGroup>
            </Box>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Tooltip with Icon'}>
        {(props) => {
          return (
            <Box className="h-96 justify-center">
              <Tooltip
                placement="top"
                trigger={(triggerProps) => {
                  return (
                    <Avatar
                      size="md"
                      {...triggerProps}
                      className="bg-primary-600"
                    >
                      <Icon as={EditIcon} size="sm" className="text-white" />
                    </Avatar>
                  );
                }}
              >
                <TooltipContent className="bg-background-50 rounded-md">
                  <Box className="p-2.5">
                    <Text size="sm">New message</Text>
                    <HStack space="xs" className="p-1 ml-3">
                      <Avatar size="xs" className="bg-gray-500 rounded">
                        <Icon as={Command} className="text-typography-0" />
                      </Avatar>
                      <Avatar size="xs" className="bg-gray-500 rounded">
                        <AvatarFallbackText>N</AvatarFallbackText>
                      </Avatar>
                    </HStack>
                  </Box>
                </TooltipContent>
              </Tooltip>
            </Box>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
