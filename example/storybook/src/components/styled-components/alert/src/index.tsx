import Root from './Root';
import Icon from './Icon';
import Text from './Text';
// import { createAlert } from '@universa11y/alert';

const AlertTemp = Root;
//@ts-ignore
AlertTemp.Icon = Icon;
//@ts-ignore
AlertTemp.Text = Text;

export const Alert = AlertTemp;
