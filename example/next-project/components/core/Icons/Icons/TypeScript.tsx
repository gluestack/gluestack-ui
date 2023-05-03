import { createIcon } from '@gluestack-ui/icon';
import { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';
import { Root } from '../styled-components';

import React from 'react';

const TypeScriptIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G clipPath="url(#clip0_3197_168)">
        <Path
          d="M13.3332 8.53345V8.35531C13.3332 7.57025 12.6964 6.93345 11.9113 6.93345H10.6665C10.2422 6.93345 9.83522 7.10202 9.53516 7.40208C9.23511 7.70213 9.06654 8.1091 9.06654 8.53345C9.06654 8.95779 9.23511 9.36476 9.53516 9.66482C9.83522 9.96488 10.2422 10.1334 10.6665 10.1334H11.7332C12.1575 10.1334 12.5645 10.302 12.8646 10.6021C13.1646 10.9021 13.3332 11.3091 13.3332 11.7334C13.3332 12.1578 13.1646 12.5648 12.8646 12.8648C12.5645 13.1649 12.1575 13.3334 11.7332 13.3334H10.6665C10.2422 13.3334 9.83522 13.1649 9.53516 12.8648C9.23511 12.5648 9.06654 12.1578 9.06654 11.7334M8.5332 6.93345H3.19987M5.86654 6.93345V13.8668M0.533203 0.533447H15.4665V15.4668H0.533203V0.533447Z"
          fill="currentColor"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_3197_168">
          <Rect width="16" height="16" fill="currentColor" />
        </ClipPath>
      </Defs>
    </>
  ),
});

TypeScriptIcon.displayName = 'TypeScriptIcon';

export { TypeScriptIcon };
