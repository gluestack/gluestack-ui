import BadgeMain from './Badge';
import BadgeText from './BadgeText';
import BadgeIcon from './BadgeIcon';

const BadgeTemp: any = BadgeMain;
BadgeTemp.Text = BadgeText;
BadgeTemp.Icon = BadgeIcon;
const Badge = BadgeTemp as any;

export { Badge };
