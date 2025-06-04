import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Spinner } from '@/components/ui/spinner';
import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

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
          size: {
            control: {
              type: 'select',
            },
            options: ['small', 'large'],
            defaultValue: 'small',
          },
          color: {
            control: {
              type: 'select',
            },
            options: [
              'red',
              'blue',
              'green',
              'black',
              'orange',
              'purple',
              'yellow',
              'grey',
            ],
            defaultValue: 'grey',
          },
        }}
        title={'Basic'}
      >
        {(props) => {
          return <Spinner size={props.size} color={props.color} />;
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Spinner with Label'}>
        {(props) => {
          return (
            <HStack space="sm">
              <Spinner />
              <Text size="md">Please Wait</Text>
            </HStack>
          );
        }}
      </ComponentPreviewer>

      <ComponentPreviewer props={{}} title={'Color Scheme'}>
        {(props) => {
          return (
            <VStack space="md">
              <Spinner color="red" />
              <Spinner color="blue" />
              <Spinner color="green" />
              <Spinner color="orange" />
            </VStack>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
