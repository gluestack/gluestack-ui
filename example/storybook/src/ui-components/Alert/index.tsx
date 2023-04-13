import { Root, Icon, Text } from './styled-components';

const Alert: any = Root;
Alert.Icon = Icon;
Alert.Text = Text;

type RootProps = React.ComponentProps<typeof Root>;
type IconProps = React.ComponentProps<typeof Icon>;
type TextProps = React.ComponentProps<typeof Text>;

type IAlertComponentType = ((props: RootProps) => JSX.Element) & {
  Icon: (props: IconProps) => JSX.Element;
  Text: (props: TextProps) => JSX.Element;
};

const AlertMain = Alert as IAlertComponentType;

export { AlertMain as Alert };
