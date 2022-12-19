import {
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
  StyledCheckboxGroup,
} from '../../styled-components';
import { createCheckbox } from '@gluestack/ui-creator';

export const Checkbox = createCheckbox({
  StyledCheckbox,
  StyledCheckboxIndicator,
  StyledCheckboxIcon,
  StyledCheckboxLabel,
  StyledCheckboxGroup,
}) as any;
