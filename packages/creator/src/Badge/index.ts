import { Badge as BadgeMain } from './Badge';
import BadgeText from './BadgeText';
import BadgeIcon from './BadgeIcon';

export const createBadge = ({
  StyledBadge,
  StyledBadgeText,
  StyledBadgeIcon,
}: any) => {
  const Badge = BadgeMain(StyledBadge) as any;
  Badge.Text = BadgeText(StyledBadgeText);
  Badge.Icon = BadgeIcon(StyledBadgeIcon);

  Badge.displayName = 'Badge';
  Badge.Text.displayName = 'Badge.Text';
  Badge.Icon.displayName = 'Badge.Icon';

  return Badge;
};
