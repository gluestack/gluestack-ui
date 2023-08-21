import React from 'react';
import {
  Text,
  Divider,
  VStack,
  HStack,
  Box,
  Center,
  Heading,
  Button,
  ButtonText,
} from '../../../ui-components';

const DividerStory = ({ ...props }) => {
  return (
    <HStack
      flexDirection={props.orientation === 'vertical' ? 'row' : 'column'}
      h={props.orientation === 'vertical' ? 30 : 'auto'}
      alignItems="center"
      justifyContent="center"
    >
      <Heading
        size="sm"
        fontWeight="$semibold"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Heading',
            'size': 'sm',
          }),
        }}
      >
        Firefox
      </Heading>
      <Divider {...props} m="$3" />
      <Heading
        size="sm"
        fontWeight="$semibold"
        dataSet={{
          'component-props': JSON.stringify({
            'is-text-style': true,
            'component-name': 'Heading',
            'size': 'sm',
          }),
        }}
      >
        Chrome
      </Heading>
    </HStack>
  );
};

export default DividerStory;

export {
  Text,
  VStack,
  HStack,
  Divider,
  Box,
  Center,
  Heading,
  Button,
  ButtonText,
};
