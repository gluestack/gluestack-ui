import { createButton } from '@gluestack-ui/button';
import Group from './styled-components/Group';
import Root from './styled-components/Root';
import GroupSpacer from './styled-components/GroupSpacer';
import Spinner from './styled-components/Spinner';
import Text from './styled-components/Text';
import Icon from './styled-components/Icon';

export const Button = createButton({
  Root: Root,
  Text: Text,
  Group: Group,
  Spinner: Spinner,
  GroupHSpacer: GroupSpacer,
  GroupVSpacer: GroupSpacer,
  Icon,
});
