import { Checkbox } from './Checkbox';
import CheckboxIcon from './CheckboxIcon';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxLabel from './CheckboxLabel';
import CheckboxGroup from './CheckboxGroup';

export const createCheckbox = ({
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
  StyledCheckboxGroup,
}: any) => {
  const CheckboxTemp = Checkbox(StyledCheckbox) as any;
  CheckboxTemp.Text = CheckboxIndicator(StyledCheckboxIndicator);
  CheckboxTemp.Text = CheckboxIcon(StyledCheckboxIcon);
  CheckboxTemp.Text = CheckboxLabel(StyledCheckboxLabel);
  CheckboxTemp.Text = CheckboxGroup(StyledCheckboxGroup);

  return CheckboxTemp;
};
