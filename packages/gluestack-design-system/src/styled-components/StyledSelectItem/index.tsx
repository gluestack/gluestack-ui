import React from 'react';
import { styled } from 'dank-style';

const Option = ({ ...props }) => {
  return <option {...props} />;
};

export default styled(
  Option,
  {
    baseStyle: {
      style: {
        bg: '$amber900',
        p: 4,
      },
    },
  },
  {}
);
