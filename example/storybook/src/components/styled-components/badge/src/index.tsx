import Root from './styled-components/Root';
import Text from './styled-components/Text';
import Icon from './styled-components/Icon';

// import { createBadge } from '@universa11y/badge';
const BadgeTemp = Root;
//@ts-ignore

BadgeTemp.Text = Text;
//@ts-ignore

BadgeTemp.Icon = Icon;
export const Badge = BadgeTemp;
