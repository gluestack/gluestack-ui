import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';
import { Path } from 'react-native-svg';

export const RemoveIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  path: (
    <Path
      d="M3.33334 8H12.6667"
      stroke="currentColor"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
});
