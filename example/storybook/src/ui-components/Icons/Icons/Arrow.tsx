import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { G, Path } from 'react-native-svg';

const ArrowUpIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path
        d="M20.2362 13.0666L13.6036 6.43395L12.75 5.58039V6.7875L12.75 21.5H11.25L11.25 6.7875V5.58192L10.3968 6.43363L3.76282 13.0557L2.70711 12L12 2.70711L21.2941 12.0012L20.2362 13.0666Z"
        stroke="currentColor"
      />
    </G>
  ),
});

const ArrowDownIcon = createIcon({
  Root,

  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 3.33337V12.6667"
        stroke="#8C8C8C"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6673 8L8.00065 12.6667L3.33398 8"
        stroke="#8C8C8C"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

const ArrowForwardIcon = createIcon({
  Root,

  viewBox: '0 0 24 24',
  path: (
    <G>
      <Path
        d="M10.9334 3.76375L17.5661 10.3964L18.4196 11.25H17.2125H2.5V12.75H17.2125H18.4181L17.5664 13.6032L10.9443 20.2372L12 21.2929L21.2929 12L11.9988 2.70586L10.9334 3.76375Z"
        stroke="currentColor"
      />
    </G>
  ),
});

const ArrowBackIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12.6673 8H3.33398"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00065 12.6667L3.33398 8.00004L8.00065 3.33337"
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
ArrowForwardIcon.displayName = 'ArrowForwardIcon';
ArrowBackIcon.displayName = 'ArrowBackIcon';
// ArrowTopRightIcon.displayName = 'ArrowTopRightIcon';

export {
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
  ArrowBackIcon,
  // ArrowTopRightIcon,
};
