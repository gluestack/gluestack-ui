import { createCheckbox } from '@universa11y/checkbox';
import Group from './Group';
import Icon from './Icon';
import Indicator from './Indicator';
import Label from './Label';
import Root from './Root';

export const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});
