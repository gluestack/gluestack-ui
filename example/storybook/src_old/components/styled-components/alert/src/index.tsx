import Root from './styled-components/Root';
import Icon from './styled-components/Icon';
import Text from './styled-components/Text';
// import { createAlert } from '@universa11y/alert';

const AlertTemp = Root;
//@ts-ignore
AlertTemp.Icon = Icon;
//@ts-ignore
AlertTemp.Text = Text;

export const Alert = AlertTemp;
