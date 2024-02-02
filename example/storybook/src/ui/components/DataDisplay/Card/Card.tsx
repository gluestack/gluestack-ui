import React from 'react';
import { Card, Heading, Text } from '@gluestack-ui/themed';

const CardBasic = ({ ...props }: any) => {
  return (
    <Card {...props}>
      <Heading mb="$2">Quick Start</Heading>
      <Text>Start building your next project in minutes</Text>
    </Card>
  );
};

CardBasic.description =
  'This is a basic Card component example. A Card component is a container that groups related content and actions.';

export default CardBasic;
