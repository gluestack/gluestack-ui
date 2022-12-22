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
  const Radio = RadioMain(StyledRadio) as any;
  Radio.Group = RadioGroup(StyledRadioGroup);
  Radio.Label = RadioLabel(StyledRadioLabel);
  Radio.Icon = RadioIcon(StyledRadioIcon);
  Radio.Indicator = RadioIndicator(StyledRadioIndicator);

  Radio.displayName = 'Radio';
  Radio.Group.displayName = 'Radio.Group';
  Radio.Label.displayName = 'Radio.Label';
  Radio.Icon.displayName = 'Radio.Icon';
  Radio.Indicator.displayName = 'Radio.Indicator';

  return Radio;
};
