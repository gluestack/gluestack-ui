import { Root, Indicator, Icon, Label, Group } from './styled-components';
import { createCheckbox } from '@gluestack-ui/checkbox';

export const Checkbox = createCheckbox({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
});

export const CheckboxIndicator = Checkbox.Indicator;
export const CheckboxIcon = Checkbox.Icon;
export const CheckboxLabel = Checkbox.Label;
export const CheckboxGroup = Checkbox.Group;
