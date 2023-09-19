import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { ComponentCard } from './ComponentCard';
import { content } from './content';

export const Grid = () => {
  return (
    <>
      <Box
        mb="$6"
        flexDirection="column"
        gap="$6"
        sx={{
          '@md': {
            flexWrap: 'wrap',
            flexDirection: 'row',
            _web: {
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          },
          '@lg': {
            _web: {
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            },
          },
          '@xl': {
            _web: {
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
            },
          },
        }}
      >
        {content.map((item, index) => (
          <ComponentCard
            key={index}
            title={item.title}
            child={item.child}
            padding={item.padding}
          />
        ))}
      </Box>
    </>
  );
};
