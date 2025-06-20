import { Checkbox as CheckboxMain } from './Checkbox';
import CheckboxIcon from './CheckboxIcon';
import CheckboxIndicator from './CheckboxIndicator';
import CheckboxLabel from './CheckboxLabel';
import CheckboxGroup from './CheckboxGroup';
import type { ICheckboxComponentType } from './types';

export const createCheckbox = <Root, Indicator, Icon, Label, Group>({
  Root,
  Indicator,
  Icon,
  Label,
  Group,
}: {
  Root: React.ComponentType<Root>;
  Indicator: React.ComponentType<Indicator>;
  Icon: React.ComponentType<Icon>;
  Label: React.ComponentType<Label>;
  Group: React.ComponentType<Group>;
}) => {
  const Checkbox = CheckboxMain(Root) as any;
  Checkbox.Indicator = CheckboxIndicator(Indicator);
  Checkbox.Icon = CheckboxIcon(Icon);
  Checkbox.Label = CheckboxLabel(Label);
  Checkbox.Group = CheckboxGroup(Group);

  Checkbox.displayName = 'Checkbox';
  Checkbox.Indicator.displayName = 'Checkbox.Indicator';
  Checkbox.Icon.displayName = 'Checkbox.Icon';
  Checkbox.Label.displayName = 'Checkbox.Label';
  Checkbox.Group.displayName = 'Checkbox.Group';

  return Checkbox as ICheckboxComponentType<
    Root,
    Indicator,
    Icon,
    Label,
    Group
  >;
};
