import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const RepeatIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M11.3333 1.33333L14 3.99999L11.3333 6.66666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.33333V6.66667C2 5.95942 2.28095 5.28115 2.78105 4.78105C3.28115 4.28095 3.95942 4 4.66667 4H14"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66667 14.6667L2 12L4.66667 9.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8.66667V9.33334C14 10.0406 13.719 10.7189 13.219 11.219C12.7189 11.7191 12.0406 12 11.3333 12H2"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

RepeatIcon.displayName = 'RepeatIcon';

const Repeat1Icon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M11.3333 1.33333L14 3.99999L11.3333 6.66666"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.33333V6.66667C2 5.95942 2.28095 5.28115 2.78105 4.78105C3.28115 4.28095 3.95942 4 4.66667 4H14"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66667 14.6667L2 12L4.66667 9.33333"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8.66667V9.33334C14 10.0406 13.719 10.7189 13.219 11.219C12.7189 11.7191 12.0406 12 11.3333 12H2"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33334 6.66667H8.00001V9.33334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});
Repeat1Icon.displayName = 'Repeat1Icon';

export { RepeatIcon, Repeat1Icon };
