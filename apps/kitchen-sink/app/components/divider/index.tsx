import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Divider } from '@/components/ui/divider';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <ScrollView
      className="bg-background-0 flex-1"
      contentContainerClassName="px-3 pb-6"
    >
      <ComponentPreviewer props={{}} title={undefined}>
        {(props) => {
          return (
            <Center>
              <Text className="font-semibold">Easy</Text>
              <Divider className="my-0.5" />
              <Text className="font-semibold">Difficult</Text>
            </Center>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Variants'}>
        {(props) => {
          return (
            <VStack>
              <Heading>gluestack-ui</Heading>
              <Text>Universal component library</Text>
              <Divider className="my-2 bg-indigo-500" />
              <HStack>
                <Text>Installation</Text>
                <Divider
                  orientation="vertical"
                  className="mx-2 h-[20px] bg-emerald-500"
                />
                <Text>API Reference</Text>
                <Divider
                  orientation="vertical"
                  className="mx-2 h-[20px] bg-emerald-500"
                />
                <Text>Examples</Text>
              </HStack>
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Orientation'}>
        {(props) => {
          return (
            <VStack
              space="lg"
              className="p-12 border border-outline-300 rounded-lg mx-5"
            >
              <Box>
                <Text size="xs" className="font-bold text-blue-600">
                  HEALTH
                </Text>
                <Heading>Benefits of Oranges</Heading>
                <Text size="sm" className="mt-1.5">
                  Oranges are a great source of vitamin C, which is essential
                  for a healthy immune system.
                </Text>
                <HStack space="sm" className="mt-3 h-5">
                  <Text size="xs">Wade Warrem</Text>
                  <Divider orientation="vertical" className="bg-gray-300" />
                  <Text size="xs">6th Oct, 2019</Text>
                  <Divider orientation="vertical" className="bg-gray-300" />
                  <Text size="xs">5 mins read</Text>
                </HStack>
              </Box>
              <Divider className="bg-gray-300" />
              <Box>
                <Text size="xs" className="font-bold text-blue-600">
                  TECHNOLOGY
                </Text>
                <Heading>How AI can benefit your business</Heading>
                <Text size="sm" className="mt-1.5">
                  AI can automate tasks and processes, allowing for increasing
                  efficiency and productivity.
                </Text>
                <HStack space="sm" className="mt-3 h-5">
                  <Text size="xs">Wade Warrem</Text>
                  <Divider orientation="vertical" className="bg-gray-300" />
                  <Text size="xs">6th Oct, 2019</Text>
                  <Divider orientation="vertical" className="bg-gray-300" />
                  <Text size="xs">5 mins read</Text>
                </HStack>
              </Box>
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'With & Without Inset'}>
        {(props) => {
          return (
            <VStack space="2xl">
              <HStack className="px-3 h-8 rounded border border-solid border-outline-300">
                <Button variant="link" size="xs">
                  <ButtonText>Github</ButtonText>
                </Button>
                <Divider orientation="vertical" className="mx-2.5" />
                <Button variant="link" size="xs">
                  <ButtonText>Twitter</ButtonText>
                </Button>
                <Divider orientation="vertical" className="mx-2.5" />
                <Button variant="link" size="xs">
                  <ButtonText>Discord</ButtonText>
                </Button>
              </HStack>
              <HStack className="px-3 h-8 rounded border border-solid border-outline-300 items-center">
                <Button variant="link" size="xs">
                  <ButtonText>Github</ButtonText>
                </Button>
                <Divider orientation="vertical" className="h-[50%] mx-2.5" />
                <Button variant="link" size="xs">
                  <ButtonText>Twitter</ButtonText>
                </Button>
                <Divider orientation="vertical" className="h-[50%] mx-2.5" />
                <Button variant="link" size="xs">
                  <ButtonText>Discord</ButtonText>
                </Button>
              </HStack>
            </VStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Adding content within a Divider'}>
        {(props) => {
          return (
            <Box className="py-9 px-20 m-5 rounded-lg border border-outline-300">
              <Heading size="3xl">Search Results</Heading>
              <Divider className="mt-4 mb-6" />
              <Box>
                <Text size="xs" className="font-bold text-amber-700">
                  TECHNOLOGY
                </Text>
                <Heading>How AI can benefit your business</Heading>
                <Text size="sm" className="mt-1.5">
                  AI can automate tasks and processes, allowing for increasing
                  efficiency and productivity.
                </Text>
                <HStack space="sm" className="mt-3 items-center">
                  <Divider className="w-[18px] bg-amber-700" />
                  <Text size="xs" className="text-amber-700">
                    5 mins read
                  </Text>
                </HStack>
              </Box>
            </Box>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
