import React from 'react';
import { Button } from '@gluestack/ui-components';

export const Example = ({ ...props }) => {
  return (
    <Button sx={{ style: { bg: '$red.500' } }} {...props}>
      <Button.Text>Hello</Button.Text>
    </Button>
  );
};
