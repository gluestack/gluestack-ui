import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { ComponentCard } from './ComponentCard';
import { content } from './content';
import { usePathname } from 'next/navigation';

export const Grid = () => {
  let prefix = '/ui/nativewind/docs/components';
  try {
    const pathname = usePathname();
    prefix = pathname.includes('nativewind')
      ? '/ui/nativewind/docs/components'
      : '/ui/docs/components';
  } catch (error) {
    console.error(error);
  }

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
          '@xxl': {
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
            href={prefix + item.href}
          />
        ))}
      </Box>
    </>
  );
};
