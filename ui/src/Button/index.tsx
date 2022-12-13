import Button from './Button';
import ButtonText from './ButtonText';

const ButtonTemp = Button as any;
ButtonTemp.Text = ButtonText;

export { ButtonTemp as Button };
