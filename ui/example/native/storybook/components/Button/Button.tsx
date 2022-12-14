import { Button, ButtonText } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Button sx={{ style: { bg: '$red.500' } }}>
        <Button.Text>Hello</Button.Text>
      </Button>
    </Wrapper>
  );
};
