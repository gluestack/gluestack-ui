import React from 'react';
import { communities } from './data';
import Community from './Community';
import { Box } from '@gluestack/design-system';

function Socail() {
  return (
    <Box w={1008}>
      <Community communities={communities} />
    </Box>
  );
}

export default Socail;
