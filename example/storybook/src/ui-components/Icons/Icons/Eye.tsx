import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path, G } from 'react-native-svg';
import { Root } from '../styled-components';

const EyeIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M1.33334 8C1.33334 8 3.33334 3.33334 8 3.33334C12.6667 3.33334 14.6667 8 14.6667 8C14.6667 8 12.6667 12.6667 8 12.6667C3.33334 12.6667 1.33334 8 1.33334 8Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

EyeIcon.displayName = 'EyeIcon';

const EyeOffIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M6.58667 6.58667C6.39017 6.76977 6.23257 6.99057 6.12325 7.2359C6.01394 7.48123 5.95516 7.74607 5.95043 8.01461C5.94569 8.28315 5.99509 8.54989 6.09568 8.79893C6.19627 9.04797 6.34598 9.27419 6.5359 9.46411C6.72582 9.65402 6.95204 9.80374 7.20108 9.90433C7.45011 10.0049 7.71686 10.0543 7.9854 10.0496C8.25394 10.0448 8.51877 9.98606 8.7641 9.87675C9.00944 9.76744 9.23024 9.60983 9.41334 9.41334"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7.15332 3.38667C7.43419 3.35168 7.71694 3.33386 7.99999 3.33334C12.6667 3.33334 14.6667 8 14.6667 8C14.3686 8.63808 13.9948 9.23796 13.5533 9.78667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M4.40667 4.40665C3.08083 5.30974 2.01991 6.55016 1.33333 7.99999C1.33333 7.99999 3.33333 12.6667 8 12.6667C9.27727 12.6701 10.5272 12.2967 11.5933 11.5933"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1.33333 1.33334L14.6667 14.6667"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

EyeOffIcon.displayName = 'EyeOffIcon';

export { EyeIcon, EyeOffIcon };
