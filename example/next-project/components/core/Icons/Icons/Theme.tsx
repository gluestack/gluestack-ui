import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

const ThemeIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M10 3.5C13.866 3.5 17 6.63401 17 10.5C17 14.366 13.866 17.5 10 17.5V3.5ZM10 2.5C5.58172 2.5 2 6.08172 2 10.5C2 14.9183 5.58172 18.5 10 18.5C14.4183 18.5 18 14.9183 18 10.5C18 6.08172 14.4183 2.5 10 2.5Z',
});

ThemeIcon.displayName = 'ThemeIcon';

export { ThemeIcon };
