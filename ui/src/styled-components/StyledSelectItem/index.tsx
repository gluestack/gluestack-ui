import React from 'react';
import { styled } from '@gluestack/ui-styled';

const Option = ({ ...props }) => {
  return <option {...props} />;
};

export default styled(
  Option,
  {
    baseStyle: {
      style: {
        bg: '$amber.900',
        p: 4,
      },
    },
  },
  {}
);
