import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path, G } from 'react-native-svg';
import { Root } from '../styled-components';

const EditIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M7.33334 2.66666H2.66667C2.31305 2.66666 1.97391 2.80713 1.72386 3.05718C1.47381 3.30723 1.33334 3.64637 1.33334 3.99999V13.3333C1.33334 13.6869 1.47381 14.0261 1.72386 14.2761C1.97391 14.5262 2.31305 14.6667 2.66667 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.6869 13.3333 13.3333V8.66666"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.3333 1.66665C12.5986 1.40144 12.9583 1.25244 13.3333 1.25244C13.7084 1.25244 14.0681 1.40144 14.3333 1.66665C14.5986 1.93187 14.7475 2.29158 14.7475 2.66665C14.7475 3.04173 14.5986 3.40144 14.3333 3.66665L8 9.99999L5.33334 10.6667L6 7.99999L12.3333 1.66665Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

EditIcon.displayName = 'EditIcon';

export { EditIcon };
