import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

const DarkThemeIcon = createIcon({
  Root,
  viewBox: '0 0 16 16',
  d: 'M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15V1ZM8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0Z',
});

DarkThemeIcon.displayName = 'DarkThemeIcon';

export { DarkThemeIcon };
