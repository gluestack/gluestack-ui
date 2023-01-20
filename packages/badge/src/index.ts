import { Badge as BadgeMain } from './Badge';
import BadgeText from './BadgeText';
import BadgeIcon from './BadgeIcon';
import type { IBadgeComponentType } from './types';

export function createBadge<
  StyledBadgeProps,
  StyledBadgeTextProps,
  StyledBadgeIconProps
>({
  Root,
  Text,
  Icon,
}: {
  Root: React.ComponentType<StyledBadgeProps>;
  Text: React.ComponentType<StyledBadgeTextProps>;
  Icon: React.ComponentType<StyledBadgeIconProps>;
}) {
  const Badge = BadgeMain(Root) as any;
  Badge.Text = BadgeText(Text);
  Badge.Icon = BadgeIcon(Icon);

  Badge.displayName = 'Badge';
  Badge.Text.displayName = 'Badge.Text';
  Badge.Icon.displayName = 'Badge.Icon';

  return Badge as IBadgeComponentType<
    StyledBadgeProps,
    StyledBadgeTextProps,
    StyledBadgeIconProps
  >;
}
