import { Root, Icon, Text } from './styled-components';

const Badge: any = Root;
Badge.Icon = Icon;
Badge.Text = Text;

type RootProps = React.ComponentProps<typeof Root>;
type IconProps = React.ComponentProps<typeof Icon>;
type TextProps = React.ComponentProps<typeof Text>;

type IBadgeComponentType = ((props: RootProps) => JSX.Element) & {
  Icon: (props: IconProps) => JSX.Element;
  Text: (props: TextProps) => JSX.Element;
};

const BadgeMain = Badge as IBadgeComponentType;

export { BadgeMain as Badge };
