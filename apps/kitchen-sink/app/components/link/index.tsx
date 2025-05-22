import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Link, LinkText } from '@/components/ui/link';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { ArrowUpRight } from 'lucide-react-native';


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-50">
        <ScrollView>
      <ComponentPreviewer props={{}}>
  {props => {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}}>
  {props => {
  return (
    <Link href="https://gluestack.io/">
      <LinkText>gluestack</LinkText>
    </Link>
  )}}
</ComponentPreviewer>

<ComponentPreviewer props={{}}>
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
    </SafeAreaView>
  );
}