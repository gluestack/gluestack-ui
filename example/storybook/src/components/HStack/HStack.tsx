import { Root, Spacer } from './styled-component';
import { createHStack } from '@universa11y/hstack';
import React from 'react';

const HStackTemp = createHStack({
  Root,
  Spacer,
});

export const HStack = () => {
  // console.log(HStackTemp, 'TEMP', typeof HStackTemp, <div></div>);
  return (
    <>
      <HStackTemp></HStackTemp>
    </>
  );
};
