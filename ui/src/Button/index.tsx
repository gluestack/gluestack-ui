import Button from './Button';
import ButtonSpinner from './ButtonSpinner';
import ButtonText from './ButtonText';

const ButtonTemp = Button as any;
ButtonTemp.Text = ButtonText;
ButtonTemp.Spinner = ButtonSpinner;
export { ButtonTemp as Button };
