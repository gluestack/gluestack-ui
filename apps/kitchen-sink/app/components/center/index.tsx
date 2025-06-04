import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

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
            <Center className="bg-primary-500 h-[200px] w-[300px]">
              <Text className="text-typography-0 font-bold">
                This is the center.
              </Text>
            </Center>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
