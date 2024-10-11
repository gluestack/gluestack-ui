import React from 'react';
import { styled } from '@gluestack-style/react';

const Option = ({ ...props }) => {
  return <option {...props} />;
};

export default styled(
  Option,
  {
    bg: '$amber900',
    p: 4,
  },
  {}
);
