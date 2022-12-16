import BadgeMain from './Badge';
import BadgeText from './BadgeText';
import BadgeIcon from './BadgeIcon';

export const createBadge = ({
  StyledBadge,
  StyledBadgeText,
  StyledBadgeIcon,
}: any) => {
  const BadgeTemp = BadgeMain(StyledBadge) as any;
  BadgeTemp.Text = BadgeText(StyledBadgeText);
  BadgeTemp.Icon = BadgeIcon(StyledBadgeIcon);

  return BadgeTemp;
};
