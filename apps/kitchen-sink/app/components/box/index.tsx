import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Box } from '@/components/ui/box';
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
            <Box className="bg-primary-500 p-5">
              <Text className="text-typography-0">This is the Box</Text>
            </Box>
          );
        }}
      </ComponentPreviewer>
    </ScrollView>
  );
}
