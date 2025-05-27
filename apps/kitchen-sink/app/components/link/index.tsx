import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Link, LinkText } from '@/components/ui/link'
import { HStack } from '@/components/ui/hstack'
import { Text } from '@/components/ui/text'
import { Icon } from '@/components/ui/icon'
import { ArrowUpRight } from 'lucide-react-native'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{}} title={undefined}>
  {props => {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Default Link"}>
  {props => {
  return (
    <HStack>
            <Text
              size="lg"
            >Design inspiration from&nbsp;</Text>
              <Link href="https://gluestack.io/" isExternal>
                <LinkText size="lg">pinterest.com</LinkText>
              </Link>
          </HStack>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Link with Icon"}>
  {props => {
  return (
    <HStack>
      <Text size="lg">Go to&nbsp;</Text>
      <Link href="https://gluestack.io/" isExternal>
        <HStack>
          <LinkText size="lg">Pinterest</LinkText>
          <Icon as={ArrowUpRight} size="lg" className="mt-0.5 text-info-600"/>
        </HStack>
      </Link>
    </HStack>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}