import IconButtonMain from './IconButon';
import IconButtonText from './IconButonText';
import IconButtonSpinner from './IconButtonSpinner';
import type { IIconButtonComponentType } from './types';
const IconButtonTemp: any = IconButtonMain;
IconButtonTemp.Text = IconButtonText;
IconButtonTemp.Spinner = IconButtonSpinner;
const IconButton = IconButtonTemp as IIconButtonComponentType;

export { IconButton };
