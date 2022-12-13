import BadgeMain from './Badge';
import BadgeText from './BadgeText';
import BadgeEndIcon from './BadgeEndIcon';
import BadgeStartIcon from './BadgeStartIcon';

const BadgeTemp: any = BadgeMain;
BadgeTemp.Text = BadgeText;
BadgeTemp.EndIcon = BadgeEndIcon;
BadgeTemp.StartIcon = BadgeStartIcon;
const Badge = BadgeTemp as any;

export { Badge };
