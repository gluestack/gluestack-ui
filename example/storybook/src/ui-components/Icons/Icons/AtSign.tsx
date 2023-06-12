import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path, G } from 'react-native-svg';
import { Root } from '../styled-components';

const AtSignIcon: any = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <>
      <G>
        <Path
          d="M7.99999 10.6666C9.47275 10.6666 10.6667 9.47274 10.6667 7.99998C10.6667 6.52722 9.47275 5.33331 7.99999 5.33331C6.52724 5.33331 5.33333 6.52722 5.33333 7.99998C5.33333 9.47274 6.52724 10.6666 7.99999 10.6666Z"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M10.6667 5.33333V8.66666C10.6667 9.19709 10.8774 9.7058 11.2525 10.0809C11.6275 10.4559 12.1362 10.6667 12.6667 10.6667C13.1971 10.6667 13.7058 10.4559 14.0809 10.0809C14.456 9.7058 14.6667 9.19709 14.6667 8.66666V7.99999C14.6666 6.49535 14.1575 5.03498 13.2222 3.85635C12.2869 2.67772 10.9804 1.85014 9.5151 1.50819C8.04982 1.16624 6.51196 1.33002 5.15157 1.9729C3.79118 2.61579 2.68827 3.69996 2.02217 5.04914C1.35608 6.39832 1.16598 7.93315 1.48278 9.40407C1.79958 10.875 2.60465 12.1955 3.76709 13.1508C4.92952 14.1062 6.38096 14.6402 7.88538 14.6661C9.38981 14.692 10.8587 14.2082 12.0533 13.2933"
          stroke="currentColor"
          strokeWidth="1.33333"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </>
  ),
});

AtSignIcon.displayName = 'AtSignIcon';

export { AtSignIcon };
