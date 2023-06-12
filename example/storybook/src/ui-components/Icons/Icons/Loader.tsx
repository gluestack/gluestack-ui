import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const LoaderIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <Path
        d="M14 8C13.9999 9.26706 13.5988 10.5016 12.854 11.5266C12.1092 12.5517 11.059 13.3146 9.85392 13.7061C8.64886 14.0976 7.3508 14.0976 6.14576 13.706C4.94073 13.3144 3.89059 12.5514 3.14584 11.5263C2.4011 10.5013 1.99999 9.26673 2 7.99967C2.00001 6.73261 2.40114 5.49808 3.14589 4.473C3.89065 3.44793 4.9408 2.68494 6.14584 2.29339C7.35088 1.90183 8.64895 1.90182 9.854 2.29334"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

LoaderIcon.displayName = 'LoaderIcon';

export { LoaderIcon };
