import React from 'react';
import { Divider } from '@/components/ui/divider';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import { Button, ButtonText } from '@/components/ui/button';

const DividerBasic = ({ ...props }) => {
  return (
    <HStack
      className={`items-center justify-center ${
        props.orientation === 'vertical'
          ? 'flex-row h-[30px]'
          : 'flex-col h-auto'
      } gap-2.5`}
    >
      <Heading size="sm" className="font-semibold">
        Firefox
      </Heading>
      <Divider {...props} />
      <Heading size="sm" className="font-semibold">
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
  Heading,
  Button,
  ButtonText,
  Center,
};
