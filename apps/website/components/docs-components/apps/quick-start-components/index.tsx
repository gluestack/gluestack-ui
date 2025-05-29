import { Box } from '@/components/ui/box';
import React, { memo } from 'react';
import { CardTalk } from './CardTalk';
import { content1 } from './content1';
import Expo1 from './Expo1';

const Fold3 = memo(() => {
  return (
    <Box className="my-6 flex-column flex-wrap gap-5 lg:flex-row">
      {content1.map((item, index) => {
        return (
          // <CardTalk
          //   key={index}
          //   title={item.title}
          //   name={item.name}
          //   date={item.date}
          //   bannerImage={item.bannerImage}
          //   isExternal={item.isExternal}
          //   link={item.link}
          // />
          <Expo1 />
        );
      })}
    </Box>
  );
});

Fold3.displayName = 'Fold3';

export default Fold3;
