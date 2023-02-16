import { createButton } from '@universa11y/button';
import Group from './styled-components/Group';
import Root from './styled-components/Root';
import GroupSpacer from './styled-components/GroupSpacer';
import Spinner from './styled-components/Spinner';
import Text from './styled-components/Text';

export const Button = createButton({
  Root: Root,
  Text: Text,
  Group: Group,
  GroupSpacer: GroupSpacer,
  Spinner: Spinner,
});
