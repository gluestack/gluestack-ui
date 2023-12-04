import { Root, Icon, Text } from './styled-components';

const Badge: any = Root;
Badge.Icon = Icon;
Badge.Text = Text;

type RootProps = React.ComponentProps<typeof Root>;
type IconProps = React.ComponentProps<typeof Icon>;
type TextProps = React.ComponentProps<typeof Text>;

type IBadgeComponentType = React.ForwardRefExoticComponent<RootProps> & {
  Icon: React.ForwardRefExoticComponent<IconProps>;
  Text: React.ForwardRefExoticComponent<TextProps>;
};

const BadgeMain = Badge as IBadgeComponentType;

export { BadgeMain as Badge, Icon as BadgeIcon, Text as BadgeText };
