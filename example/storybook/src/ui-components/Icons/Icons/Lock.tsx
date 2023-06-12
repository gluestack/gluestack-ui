import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const LockIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12.6667 7.33334H3.33333C2.59695 7.33334 2 7.9303 2 8.66668V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66668C14 7.9303 13.403 7.33334 12.6667 7.33334Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66666 7.33334V4.66668C4.66666 3.78262 5.01785 2.93478 5.64297 2.30965C6.2681 1.68453 7.11594 1.33334 8 1.33334C8.88405 1.33334 9.7319 1.68453 10.357 2.30965C10.9821 2.93478 11.3333 3.78262 11.3333 4.66668V7.33334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

LockIcon.displayName = 'LockIcon';

export { LockIcon };
