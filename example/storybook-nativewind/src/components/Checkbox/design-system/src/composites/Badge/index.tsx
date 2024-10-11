import Root from './styled-components/Root';
import Text from './styled-components/Text';
import Icon from './styled-components/Icon';

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
