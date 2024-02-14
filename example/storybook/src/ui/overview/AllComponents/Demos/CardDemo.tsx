import React from 'react';
import { Card, Heading, Text } from '@gluestack-ui/themed';

const CardDemo = () => {
  return (
    <Card size="md" variant="elevated" m="$3">
      <Heading mb="$1" size="md">
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  );
};

export default CardDemo;
