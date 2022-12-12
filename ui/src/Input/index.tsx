import { InputIcon } from './InputIcon';
import { InputRoot } from './InputRoot';
import { Input } from './Input';

const InputTemp = Input as any;
InputTemp.Root = InputRoot;
InputTemp.Icon = InputIcon;

export { InputTemp as Input };
