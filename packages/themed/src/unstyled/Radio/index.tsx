import { Root, Group, Icon, Indicator, Label } from './styled-components';
import { createRadio } from '@gluestack-ui/radio';

export const Radio = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});
export const RadioGroup = Radio.Group;
export const RadioIcon = Radio.Icon;
export const RadioIndicator = Radio.Indicator;
export const RadioLabel = Radio.Label;
