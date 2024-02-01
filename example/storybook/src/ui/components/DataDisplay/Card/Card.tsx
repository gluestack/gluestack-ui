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
  'This is a basic Accordion component example. An Accordion component is a versatile and interactive user interface element, designed to efficiently organize and present content in a compact space.';

export default CardBasic;
