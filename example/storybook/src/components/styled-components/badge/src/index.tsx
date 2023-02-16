import Root from './Root';
import Text from './Text';
import Icon from './Icon';

// import { createBadge } from '@universa11y/badge';
const BadgeTemp = Root;
//@ts-ignore

BadgeTemp.Text = Text;
//@ts-ignore

BadgeTemp.Icon = Icon;
export const Badge = BadgeTemp;
