import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const TrashIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M2 4H14"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6667 4V13.3333C12.6667 14 12 14.6667 11.3333 14.6667H4.66666C3.99999 14.6667 3.33333 14 3.33333 13.3333V4"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.33333 4.00001V2.66668C5.33333 2.00001 5.99999 1.33334 6.66666 1.33334H9.33333C10 1.33334 10.6667 2.00001 10.6667 2.66668V4.00001"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

TrashIcon.displayName = 'TrashIcon';

export { TrashIcon };
