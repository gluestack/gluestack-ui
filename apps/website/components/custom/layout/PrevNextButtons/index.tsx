import React from 'react';
import Link from 'next/link';
import {
  convertSidebarItemsToPathsArray,
  getPrevAndNextLinks,
} from '../../utils/helperFunction';
import { LinkButton } from './LinkButton';
import { usePathname } from 'next/navigation';

export const PrevNextButtons = ({ sidebarItems }: any) => {
  const pathname = usePathname();

  const { prev, next, prevLink, nextLink } = getPrevAndNextLinks(
    convertSidebarItemsToPathsArray(sidebarItems),
    pathname
  );

  return (
    <>
      {/* Mobile Layout - Vertical Stack */}
      <div className="w-full flex flex-col-reverse gap-4 justify-between mt-10 mb-20 md:hidden">
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
      </div>

      {/* Desktop Layout - Horizontal Stack */}
      <div className="w-full gap-4 justify-between mt-10 mb-20 hidden md:flex">
        {prevLink ? (
          <LinkButton
            pageText={prev}
            pageLink={prevLink}
            NextLink={Link}
            type={'previous'}
          />
        ) : (
          <div className="flex-1"></div>
        )}
        {nextLink ? (
          <LinkButton
            pageText={next}
            pageLink={nextLink}
            NextLink={Link}
            type={'next'}
          />
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </>
  );
};
