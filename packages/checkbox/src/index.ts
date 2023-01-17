import { Checkbox as CheckboxMain } from './Checkbox';
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
  const Checkbox = CheckboxMain(StyledCheckbox) as any;
  Checkbox.Indicator = CheckboxIndicator(StyledCheckboxIndicator);
  Checkbox.Icon = CheckboxIcon(StyledCheckboxIcon);
  Checkbox.Label = CheckboxLabel(StyledCheckboxLabel);
  Checkbox.Group = CheckboxGroup(StyledCheckboxGroup);

  Checkbox.displayName = 'Checkbox';
  Checkbox.Indicator.displayName = 'Checkbox.Indicator';
  Checkbox.Icon.displayName = 'Checkbox.Icon';
  Checkbox.Label.displayName = 'Checkbox.Label';
  Checkbox.Group.displayName = 'Checkbox.Group';

  return Checkbox;
};
