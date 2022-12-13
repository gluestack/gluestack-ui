import { Checkbox } from './Checkbox';
import { CheckboxIcon } from './CheckboxIcon';
import { CheckboxIndicator } from './CheckboxIndicator';
import { CheckboxLabel } from './CheckboxLabel';
import { CheckboxGroup } from './CheckboxGroup';

const CheckboxTemp = Checkbox as any;
CheckboxTemp.Group = CheckboxGroup;
CheckboxTemp.Label = CheckboxLabel;
CheckboxTemp.Icon = CheckboxIcon;
CheckboxTemp.Indicator = CheckboxIndicator;

export { CheckboxTemp as Checkbox };
// export { Checkbox } from './Checkbox';
// export { IStackProps } from './types';
