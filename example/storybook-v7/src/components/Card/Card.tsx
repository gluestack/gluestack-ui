import React from 'react';
import { Card } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

const CardBasic = ({ ...props }: any) => {
  return (
    <Card {...props}>
      <Heading size="md" className={'mb-1'}>
        Quick Start
      </Heading>
      <Text size="sm">Start building your next project in minutes</Text>
    </Card>
  );
};

CardBasic.description =
  'This is a basic Card component example. A Card component serves as a visual container that groups related content and actions.';

export default CardBasic;
export { Card, Heading, Text };
