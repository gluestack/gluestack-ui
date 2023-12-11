import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const EyeIcon: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

EyeIcon.displayName = 'EyeIcon';

const EyeOffIcon: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M9.88 9.88C9.58525 10.1546 9.34884 10.4859 9.18487 10.8538C9.02091 11.2218 8.93274 11.6191 8.92563 12.0219C8.91852 12.4247 8.99262 12.8248 9.14351 13.1984C9.29439 13.5719 9.51897 13.9113 9.80384 14.1962C10.0887 14.481 10.4281 14.7056 10.8016 14.8565C11.1752 15.0074 11.5753 15.0815 11.9781 15.0744C12.3809 15.0673 12.7782 14.9791 13.1461 14.8151C13.5141 14.6512 13.8453 14.4147 14.12 14.12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.61 6.61C4.62125 7.96462 3.02987 9.82526 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 2L22 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

EyeOffIcon.displayName = 'EyeOffIcon';

export { EyeIcon, EyeOffIcon };
