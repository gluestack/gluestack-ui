import { Text, Center } from '@gluestack-ui/themed';
import React from 'react';

const CenterBasic = () => {
  return (
    <Center bg="$primary500" h={200} w={300}>
      <Text
        color="white"
        fontWeight="$bold"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Text',
            'size': 'md',
          }),
        }}
      >
        This is the center.
      </Text>
    </Center>
  );
};

CenterBasic.description =
  'This is a basic Center component example. A center is a layout component that centers its children.';

export default CenterBasic;

export { Text, Center };
