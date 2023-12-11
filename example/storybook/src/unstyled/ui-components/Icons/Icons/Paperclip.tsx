import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const PaperclipIcon: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M21.44 11.05L12.25 20.24C11.1242 21.3658 9.59718 21.9983 8.005 21.9983C6.41282 21.9983 4.88584 21.3658 3.76 20.24C2.63416 19.1141 2.00166 17.5872 2.00166 15.995C2.00166 14.4028 2.63416 12.8758 3.76 11.75L12.33 3.17997C13.0806 2.42808 14.0991 2.00515 15.1615 2.00421C16.2239 2.00328 17.2431 2.42441 17.995 3.17497C18.7469 3.92554 19.1698 4.94404 19.1708 6.00644C19.1717 7.06883 18.7506 8.08808 18 8.83997L9.41 17.41C9.03472 17.7853 8.52573 17.9961 7.995 17.9961C7.46427 17.9961 6.95528 17.7853 6.58 17.41C6.20472 17.0347 5.99389 16.5257 5.99389 15.995C5.99389 15.4642 6.20472 14.9553 6.58 14.58L15.07 6.09997"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

PaperclipIcon.displayName = 'PaperclipIcon';

export { PaperclipIcon };
