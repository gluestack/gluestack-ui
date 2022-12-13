import { Checkbox } from './Checkbox';
import { CheckboxIcon } from './CheckboxIcon';
import { CheckboxIndicator } from './CheckboxIndicator';
import { CheckboxLabel } from './CheckboxLabel';

const CheckboxTemp = Checkbox as any;
CheckboxTemp.Label = CheckboxLabel;
CheckboxTemp.Icon = CheckboxIcon;
CheckboxTemp.Indicator = CheckboxIndicator;

export { CheckboxTemp as Checkbox };
