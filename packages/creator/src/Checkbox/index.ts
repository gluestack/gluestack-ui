import { Checkbox } from './Checkbox';
import CheckboxIcon from './CheckboxIcon';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxLabel from './CheckboxLabel';
import { CheckboxGroup } from './CheckboxGroup';

export const createCheckbox = ({
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
  StyledCheckboxGroup,
}: any) => {
  const CheckboxTemp = Checkbox(StyledCheckbox) as any;
  CheckboxTemp.Indicator = CheckboxIndicator(StyledCheckboxIndicator);
  CheckboxTemp.Icon = CheckboxIcon(StyledCheckboxIcon);
  CheckboxTemp.Label = CheckboxLabel(StyledCheckboxLabel);
  CheckboxTemp.Group = CheckboxGroup(StyledCheckboxGroup);

  return CheckboxTemp;
};
