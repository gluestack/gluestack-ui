import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const FavouriteIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M13.6133 3.05333C13.2789 2.71772 12.8815 2.45142 12.4439 2.26973C12.0063 2.08803 11.5371 1.99449 11.0633 1.99449C10.5895 1.99449 10.1204 2.08803 9.68278 2.26973C9.2452 2.45142 8.84778 2.71772 8.51333 3.05333L8 3.57333L7.48666 3.05333C7.15221 2.71772 6.7548 2.45142 6.31721 2.26973C5.87962 2.08803 5.41047 1.99449 4.93666 1.99449C4.46285 1.99449 3.9937 2.08803 3.55612 2.26973C3.11853 2.45142 2.72112 2.71772 2.38666 3.05333C0.97333 4.46667 0.886663 6.85333 2.66666 8.66667L8 14L13.3333 8.66667C15.1133 6.85333 15.0267 4.46667 13.6133 3.05333Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

FavouriteIcon.displayName = 'FavouriteIcon';

export { FavouriteIcon };
