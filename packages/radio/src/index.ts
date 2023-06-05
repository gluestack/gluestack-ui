import { Radio as RadioMain } from './Radio';
import { RadioIcon } from './RadioIcon';
import { RadioIndicator } from './RadioIndicator';
import { RadioLabel } from './RadioLabel';
import { RadioGroup } from './RadioGroup';
import type { IRadioComponentType } from './types';

export const createRadio = <
  RadioProps,
  GroupProps,
  IconProps,
  IndicatorProps,
  LabelProps
>({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
}: {
  Root: React.ComponentType<RadioProps>;
  Group: React.ComponentType<GroupProps>;
  Icon: React.ComponentType<IconProps>;
  Indicator: React.ComponentType<IndicatorProps>;
  Label: React.ComponentType<LabelProps>;
}) => {
  const Radio = RadioMain(Root) as any;
  Radio.Group = RadioGroup(Group);
  Radio.Label = RadioLabel(Label);
  Radio.Icon = RadioIcon(Icon);
  Radio.Indicator = RadioIndicator(Indicator);
  Radio.displayName = 'Radio';
  Radio.Group.displayName = 'Radio.Group';
  Radio.Label.displayName = 'Radio.Label';
  Radio.Icon.displayName = 'Radio.Icon';
  Radio.Indicator.displayName = 'Radio.Indicator';

  return Radio as IRadioComponentType<
    RadioProps,
    GroupProps,
    IconProps,
    IndicatorProps,
    LabelProps
  >;
};
