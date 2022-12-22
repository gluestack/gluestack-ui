import { Radio as RadioMain } from './Radio';
import { RadioIcon } from './RadioIcon';
import { RadioIndicator } from './RadioIndicator';
import { RadioLabel } from './RadioLabel';
import { RadioGroup } from './RadioGroup';
// export { Checkbox } from './Checkbox';
// export { IStackProps } from './types';

export const createRadio = ({
  StyledRadio,
  StyledRadioGroup,
  StyledRadioIcon,
  StyledRadioIndicator,
  StyledRadioLabel,
}: any) => {
  const RadioTemp = RadioMain(StyledRadio) as any;
  RadioTemp.Group = RadioGroup(StyledRadioGroup);
  RadioTemp.Label = RadioLabel(StyledRadioLabel);
  RadioTemp.Icon = RadioIcon(StyledRadioIcon);
  RadioTemp.Indicator = RadioIndicator(StyledRadioIndicator);
  const Radio = RadioTemp as any;
  return Radio;
};
