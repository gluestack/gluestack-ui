import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const BellIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M12 5.33331C12 4.27245 11.5786 3.25503 10.8284 2.50489C10.0783 1.75474 9.06087 1.33331 8 1.33331C6.93913 1.33331 5.92172 1.75474 5.17157 2.50489C4.42143 3.25503 4 4.27245 4 5.33331C4 9.99998 2 11.3333 2 11.3333H14C14 11.3333 12 9.99998 12 5.33331Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.15335 14C9.03614 14.2021 8.86791 14.3698 8.6655 14.4864C8.46309 14.6029 8.2336 14.6643 8.00001 14.6643C7.76643 14.6643 7.53694 14.6029 7.33453 14.4864C7.13212 14.3698 6.96389 14.2021 6.84668 14"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

BellIcon.displayName = 'BellIcon';

export { BellIcon };
