import Root from './styled-components/Root';
import Group from './styled-components/Group';
import Icon from './styled-components/Icon';
import Indicator from './styled-components/Indicator';
import Label from './styled-components/Label';
import { createRadio } from '@universa11y/radio';

export const Radio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});
