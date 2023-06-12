import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path } from 'react-native-svg';

const ArrowUpIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 12.6666V3.33331"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.33334 7.99998L8.00001 3.33331L12.6667 7.99998"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ArrowDownIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 3.33331V12.6666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6667 8L7.99999 12.6667L3.33333 8"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ArrowRightIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M3.33334 8H12.6667"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 3.33331L12.6667 7.99998L8 12.6666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ArrowLeftIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12.6667 8H3.33334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00001 12.6666L3.33334 7.99998L8.00001 3.33331"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

// const ArrowTopRightIcon = createIcon({
//   Root,
//   viewBox: '0 0 16 16',
//   path: (
//     <Path
//       d="M4.14645 11.8536C3.95118 11.6583 3.95118 11.3417 4.14645 11.1465L10.7929 4.5H6.5C6.22386 4.5 6 4.27614 6 4C6 3.72386 6.22386 3.5 6.5 3.5H12C12.1326 3.5 12.2598 3.55268 12.3536 3.64645C12.4473 3.74022 12.5 3.86739 12.5 4V9.50001C12.5 9.77615 12.2761 10 12 10C11.7239 10 11.5 9.77615 11.5 9.50001V5.20711L4.85355 11.8536C4.65829 12.0488 4.34171 12.0488 4.14645 11.8536Z"
//       stroke="currentColor"
//       fillRule="evenodd"
//     />
//   ),
// });

ArrowUpIcon.displayName = 'ArrowUpIcon';
ArrowDownIcon.displayName = 'ArrowDownIcon';
ArrowRightIcon.displayName = 'ArrowRightIcon';
ArrowLeftIcon.displayName = 'ArrowLeftIcon';
// ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';

export {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  // ArrowTopRightIcon,
};
