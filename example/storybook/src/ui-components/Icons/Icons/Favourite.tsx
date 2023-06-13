import { createIcon } from '@gluestack-ui/icon';
import React from 'react';
import { Path } from 'react-native-svg';
import { Root } from '../styled-components';

const FavouriteIcon: any = createIcon({
  Root,
  viewBox: '0 0 24 24',
  path: (
    <>
      <Path
        d="M20.42 4.58C19.9183 4.07658 19.3222 3.67714 18.6658 3.40459C18.0094 3.13204 17.3057 2.99174 16.595 2.99174C15.8843 2.99174 15.1806 3.13204 14.5242 3.40459C13.8678 3.67714 13.2717 4.07658 12.77 4.58L12 5.36L11.23 4.58C10.7283 4.07658 10.1322 3.67714 9.47582 3.40459C8.81944 3.13204 8.11571 2.99174 7.40499 2.99174C6.69428 2.99174 5.99055 3.13204 5.33417 3.40459C4.67779 3.67714 4.08167 4.07658 3.57999 4.58C1.45999 6.7 1.32999 10.28 3.99999 13L12 21L20 13C22.67 10.28 22.54 6.7 20.42 4.58Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
});

FavouriteIcon.displayName = 'FavouriteIcon';

export { FavouriteIcon };
