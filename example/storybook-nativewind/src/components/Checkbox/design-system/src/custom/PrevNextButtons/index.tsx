import React from 'react';
import { Box, HStack, VStack } from '../../primitives';

import {
  convertSidebarItemsToPathsArray,
  getPrevAndNextLinks,
} from '../../utils/helperFunction';
import { LayoutContext } from '../Layout/LayoutContext';
import { LinkButton } from './LinkButton';

export const PrevNextButtons = ({ sidebarItems }: any) => {
  const { router, Link } = React.useContext(LayoutContext);

  const { prev, next, prevLink, nextLink } = getPrevAndNextLinks(
    convertSidebarItemsToPathsArray(sidebarItems),
    router.pathname
  );

  return (
    <>
      <VStack
        reversed={true}
        width={'$full'}
        space={'md'}
        sx={{
          '@md': {
            display: 'none',
          },
        }}
        justifyContent="space-between"
        mt={'$10'}
        mb={'$20'}
      >
        {prevLink ? (
          <LinkButton
            pageText={prev}
            pageLink={prevLink}
            NextLink={Link}
            type={'previous'}
          />
        ) : null}
        {nextLink ? (
          <LinkButton
            pageText={next}
            pageLink={nextLink}
            NextLink={Link}
            type={'next'}
          />
        ) : null}
      </VStack>
      <HStack
        width="$full"
        space={'md'}
        sx={{
          '@base': {
            display: 'none',
          },
          '@md': {
            display: 'flex',
          },
        }}
        justifyContent="space-between"
        mt={'$10'}
        mb={'$20'}
      >
        {prevLink ? (
          <LinkButton
            pageText={prev}
            pageLink={prevLink}
            NextLink={Link}
            type={'previous'}
          ></LinkButton>
        ) : (
          <Box flex={1}></Box>
        )}
        {nextLink ? (
          <LinkButton
            pageText={next}
            pageLink={nextLink}
            NextLink={Link}
            type={'next'}
          ></LinkButton>
        ) : (
          <Box flex={1}></Box>
        )}
      </HStack>
    </>
  );
};
