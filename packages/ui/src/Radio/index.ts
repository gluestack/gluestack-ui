import { Radio } from './Radio';
import { RadioIcon } from './RadioIcon';
import { RadioIndicator } from './RadioIndicator';
import { RadioLabel } from './RadioLabel';
import { RadioGroup } from './RadioGroup';

const RadioTemp = Radio as any;
RadioTemp.Group = RadioGroup;
RadioTemp.Label = RadioLabel;
RadioTemp.Icon = RadioIcon;
RadioTemp.Indicator = RadioIndicator;

export { RadioTemp as Radio };
// export { Checkbox } from './Checkbox';
// export { IStackProps } from './types';
