import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const PaperclipIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M14.2933 7.36669L8.16667 13.4934C7.41611 14.2439 6.39813 14.6656 5.33667 14.6656C4.27522 14.6656 3.25724 14.2439 2.50667 13.4934C1.75611 12.7428 1.33445 11.7248 1.33445 10.6634C1.33445 9.6019 1.75611 8.58392 2.50667 7.83336L8.22001 2.12002C8.72038 1.61876 9.39939 1.33681 10.1077 1.33618C10.8159 1.33556 11.4954 1.61631 11.9967 2.11669C12.4979 2.61706 12.7799 3.29607 12.7805 4.00433C12.7811 4.71259 12.5004 5.3921 12 5.89336L6.27334 11.6067C6.02315 11.8569 5.68383 11.9974 5.33001 11.9974C4.97619 11.9974 4.63686 11.8569 4.38667 11.6067C4.13649 11.3565 3.99593 11.0172 3.99593 10.6634C3.99593 10.3095 4.13649 9.97021 4.38667 9.72002L10.0467 4.06669"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

PaperclipIcon.displayName = 'PaperclipIcon';

export { PaperclipIcon };
