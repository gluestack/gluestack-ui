import { Badge as BadgeMain } from './Badge';
import BadgeText from './BadgeText';
import BadgeIcon from './BadgeIcon';
import type { IBadgeComponentType } from './types';

export function createBadge<
  StyledBadgeProps,
  StyledBadgeTextProps,
  StyledBadgeIconProps
>({
  StyledBadge,
  StyledBadgeText,
  StyledBadgeIcon,
}: {
  StyledBadge: React.ComponentType<StyledBadgeProps>;
  StyledBadgeText: React.ComponentType<StyledBadgeTextProps>;
  StyledBadgeIcon: React.ComponentType<StyledBadgeIconProps>;
}) {
  const Badge = BadgeMain(StyledBadge) as any;
  Badge.Text = BadgeText(StyledBadgeText);
  Badge.Icon = BadgeIcon(StyledBadgeIcon);

  Badge.displayName = 'Badge';
  Badge.Text.displayName = 'Badge.Text';
  Badge.Icon.displayName = 'Badge.Icon';

  return Badge as IBadgeComponentType<
    StyledBadgeProps,
    StyledBadgeTextProps,
    StyledBadgeIconProps
  >;
}
