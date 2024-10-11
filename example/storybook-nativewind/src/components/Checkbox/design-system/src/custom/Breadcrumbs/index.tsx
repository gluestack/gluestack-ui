import React from 'react';
import { Box, Text } from '../../primitives';
import { LayoutContext } from '../Layout/LayoutContext';

export const Breadcrumbs = () => {
  const { breadcrumbs, Link } = React.useContext(LayoutContext);

  if (breadcrumbs) {
    const breadcrumbLinks: any = [];

    breadcrumbs.forEach((breadcrumb: any, index: any) => {
      const href = breadcrumb.id || `/${breadcrumb.title.toLowerCase()}`;

      breadcrumbLinks.push({
        href: index === 0 ? href : `${breadcrumbLinks[index - 1].href}${href}`,
        title: breadcrumb.title,
      });
    });

    return (
      <Box mb={'$2'} flexDirection={'row'} ml={14}>
        {breadcrumbs.map((breadcrumb: any, index: any) => (
          <Box flexDirection="row" key={breadcrumb.id || index}>
            {index > 0 && <Text>{' / '}</Text>}
            {breadcrumb.id ? (
              <Link href={breadcrumb.id} passHref>
                <Text
                  color={'$textLight700'}
                  sx={{
                    _dark: {
                      color: '$textDark300',
                    },
                  }}
                >
                  {breadcrumb.title}
                </Text>
              </Link>
            ) : (
              <Text
                color={'$textLight900'}
                fontWeight={'$medium'}
                sx={{
                  _dark: {
                    color: '$textDark50',
                  },
                }}
              >
                {breadcrumb.title}
              </Text>
            )}
          </Box>
        ))}
      </Box>
    );
  } else {
    return null;
  }
};
