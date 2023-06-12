import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const StarIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M8 1.33333L10.06 5.50666L14.6667 6.18L11.3333 9.42666L12.12 14.0133L8 11.8467L3.88 14.0133L4.66667 9.42666L1.33334 6.18L5.94 5.50666L8 1.33333Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

StarIcon.displayName = 'StarIcon';

export { StarIcon };
