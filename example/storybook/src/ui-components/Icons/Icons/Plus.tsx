import { createIcon } from '@gluestack-ui/icon';
import { Root } from '../styled-components';

const PlusIcon = createIcon({
  Root,
  viewBox: '0 0 20 20',
  d: 'M10 3C10 2.72386 9.77614 2.5 9.5 2.5C9.22386 2.5 9 2.72386 9 3V9.5H2.5C2.22386 9.5 2 9.72386 2 10C2 10.2761 2.22386 10.5 2.5 10.5H9V17C9 17.2761 9.22386 17.5 9.5 17.5C9.77614 17.5 10 17.2761 10 17V10.5H16.5C16.7761 10.5 17 10.2761 17 10C17 9.72386 16.7761 9.5 16.5 9.5H10V3Z',
});

PlusIcon.displayName = 'PlusIcon';

export { PlusIcon };
