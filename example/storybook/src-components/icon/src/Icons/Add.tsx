import { createIcon } from '@universa11y/icon';
import Root from '../styled-components/Root';

const AddIcon = createIcon({
  Root,
  viewBox: '0 0 24 24',
  d: 'M13.25 10.75V2H10.75V10.75H2V13.25H10.75V22H13.25V13.25H22V10.75H13.25Z',
});

AddIcon.displayName = 'AddIcon';

export { AddIcon };
