import AlertMain from './Alert';
import AlertIcon from './AlertIcon';

const AlertTemp: any = AlertMain;
AlertTemp.Icon = AlertIcon;
const Alert = AlertTemp as any;

export { Alert };
