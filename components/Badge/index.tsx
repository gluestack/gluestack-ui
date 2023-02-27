import { Root, Text, Icon } from './styled-components';

const BadgeTemp = Root;
//@ts-ignore

BadgeTemp.Text = Text;
//@ts-ignore

BadgeTemp.Icon = Icon;
export const Badge: any = BadgeTemp;
