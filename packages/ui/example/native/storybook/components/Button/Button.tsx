import { Button } from '@gluestack/ui';
import React from 'react';

import Wrapper from '../Wrapper';

export const Example = ({ ...props }) => {
  return (
    <Wrapper>
      <Button>
        <Button.Text>Hello</Button.Text>
      </Button>
    </Wrapper>
  );
};
