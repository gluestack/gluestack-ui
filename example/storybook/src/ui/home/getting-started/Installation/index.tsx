import React, { memo } from 'react';
import { Box } from '@gluestack/design-system';
import { CardTalk } from './CardTalk';
import { content1 } from './content1';

const Fold3 = memo(() => {
  return (
    <Box
      my="$6"
      flexDirection="column"
      flexWrap="wrap"
      gap="$5"
      sx={{
        '@lg': { flexDirection: 'row' },
      }}
    >
      {content1.map((item, index) => {
        return (
          <CardTalk
            key={index}
            title={item.title}
            name={item.name}
            date={item.date}
            bannerImage={item.bannerImage}
            isExternal={item.isExternal}
            link={item.link}
          />
        );
      })}
    </Box>
  );
});

Fold3.displayName = 'Fold3';

export default Fold3;
