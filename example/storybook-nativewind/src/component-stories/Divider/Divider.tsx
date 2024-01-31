import React from 'react';
import {
  Text,
  VStack,
  HStack,
  Box,
  Center,
  Heading,
  Button,
  ButtonText,
} from '@gluestack-ui/themed';
import { Divider } from '@/components/Divider';

const DividerBasic = ({ ...props }) => {
  return (
    <HStack
      flexDirection={props.orientation === 'vertical' ? 'row' : 'column'}
      h={props.orientation === 'vertical' ? 30 : 'auto'}
      alignItems="center"
      justifyContent="center"
    >
      <Heading size="sm" fontWeight="$semibold">
        Firefox
      </Heading>
      <Divider {...props} m="$3" />
      <Heading size="sm" fontWeight="$semibold">
        Chrome
      </Heading>
    </HStack>
  );
};

DividerBasic.description =
  'This is a basic Divider component example.  A divider is a thin line that groups content in lists and layouts.';

export default DividerBasic;

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
