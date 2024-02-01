import React from 'react';
import { Card, Text } from '@gluestack-ui/themed';

const CardBasic = ({ ...props }: any) => {
  return (
    <Card {...props}>
      <Text>Card</Text>
    </Card>
  );
};

CardBasic.description =
  'This is a basic Card component example. A Card component is a container that groups related content and actions.';

export default CardBasic;
