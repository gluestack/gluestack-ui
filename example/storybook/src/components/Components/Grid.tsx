import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { ComponentCard } from './ComponentCard';
import { emptyBoxes } from './content';
import { content } from './content';

const totalComponents = content.length;
const emptyBoxesXL = 4 - (totalComponents % 4);
const emptyBoxesLG = 3 - (totalComponents % 3);
const emptyBoxesMD = 2 - (totalComponents % 2);

export const Grid = () => {
  return (
    <>
      <Box
        mt="$9"
        flexDirection="column"
        gap="$6"
        sx={{
          '@md': {
            flexWrap: 'wrap',
            flexDirection: 'row',
          },
        }}
      >
        {content.map((item, index) => (
          <ComponentCard key={index} title={item.title} child={item.child} />
        ))}

        {/* Renders empty boxes based on the screen size */}
        {emptyBoxes.map((number, index) => {
          return (
            <Box
              key={index}
              display="none"
              flex={1}
              sx={{
                '@md': {
                  minWidth: '48%',
                  display: emptyBoxesMD >= number ? 'flex' : 'none',
                },
                '@lg': {
                  minWidth: '30%',
                  display: emptyBoxesLG >= number ? 'flex' : 'none',
                },
                '@xl': {
                  minWidth: '23%',
                  display: emptyBoxesXL >= number ? 'flex' : 'none',
                },
              }}
            />
          );
        })}
      </Box>
    </>
  );
};
