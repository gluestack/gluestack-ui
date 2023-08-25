import React, { memo } from 'react';
import { Box } from '@gluestack/design-system';
import { CardTalk } from './CardTalk';
import { content1 } from './content1';

const Fold3 = memo(() => {
  return (
    <Box
      flexDirection="column"
      flexWrap="wrap"
      sx={{
        '@base': { mb: '$20' },
        '@md': { mb: 20, flexDirection: 'row' },
      }}
    >
      {content1.map((item, index) => {
        return (
          <CardTalk
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
