import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const UnlockIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12.6667 7.33334H3.33333C2.59695 7.33334 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33334 12.6667 7.33334Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66667 7.33334V4.66667C4.66584 3.84004 4.97219 3.04258 5.52626 2.42911C6.08032 1.81565 6.84256 1.42994 7.66501 1.34686C8.48746 1.26379 9.31144 1.48927 9.97699 1.97955C10.6425 2.46982 11.1022 3.1899 11.2667 4"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

UnlockIcon.displayName = 'UnlockIcon';

export { UnlockIcon };
