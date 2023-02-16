import { createCheckbox } from '@universa11y/checkbox';
import Group from './styled-components/Group';
import Icon from './styled-components/Icon';
import Indicator from './styled-components/Indicator';
import Label from './styled-components/Label';
import Root from './styled-components/Root';

export const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});
