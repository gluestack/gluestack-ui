import { createButton } from '@universa11y/button';
import Group from './Group';
import Root from './Root';
import GroupSpacer from './GroupSpacer';
import Spinner from './Spinner';
import Text from './Text';

export const Button = createButton({
  Root: Root,
  Text: Text,
  Group: Group,
  GroupSpacer: GroupSpacer,
  Spinner: Spinner,
});
