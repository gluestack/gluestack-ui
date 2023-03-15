import React from 'react';
import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

import { Path } from 'react-native-svg';

const CopyOutlinedIcon = createIcon({
  Root,
  viewBox: '0 0 12 16',
  path: (
    <Path
      d="M4 0C2.89543 0 2 0.895431 2 2V12C2 13.1046 2.89543 14 4 14H10C11.1046 14 12 13.1046 12 12V2C12 0.89543 11.1046 0 10 0H4ZM3 2C3 1.44772 3.44772 1 4 1H10C10.5523 1 11 1.44772 11 2V12C11 12.5523 10.5523 13 10 13H4C3.44772 13 3 12.5523 3 12V2ZM0 4.00001C0 3.25973 0.402199 2.61339 1 2.26758V12.5C1 13.8807 2.11929 15 3.5 15H9.73244C9.38663 15.5978 8.74028 16 8 16H3.5C1.567 16 0 14.433 0 12.5V4.00001Z"
      fill="currentColor"
    />
  ),
});

const CopyFilledIcon = createIcon({
  Root,
  viewBox: '0 0 12 16',
  path: (
    <Path
      d="M2 2C2 0.895431 2.89543 0 4 0H10C11.1046 0 12 0.89543 12 2V12C12 13.1046 11.1046 14 10 14H4C2.89543 14 2 13.1046 2 12V2ZM0 4.00001C0 3.25973 0.402199 2.61339 1 2.26758V12.5C1 13.8807 2.11929 15 3.5 15H9.73244C9.38663 15.5978 8.74028 16 8 16H3.5C1.567 16 0 14.433 0 12.5V4.00001Z"
      fill="currentColor"
    />
  ),
});

CopyOutlinedIcon.displayName = 'CopyOutlinedIcon';
CopyFilledIcon.displayName = 'CopyFilledIcon';

export { CopyOutlinedIcon, CopyFilledIcon };
