import React, { memo } from 'react';
import { Box } from '@gluestack/design-system';
import { Card } from './Card';
import { content } from './content';

const Fold3 = memo(() => {
  return (
    <Box
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        '@base': { mb: '$20' },
        '@md': { mb: 200, flexDirection: 'row' },
      }}
    >
      {content.map((item, index) => {
        return (
          <Card
            key={index}
            title={item.title}
            name={item.name}
            date={item.date}
          />
        );
      })}
    </Box>
  );
});

Fold3.displayName = 'Fold3';

export default Fold3;
