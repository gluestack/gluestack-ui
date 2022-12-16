import {
  StyledMenuContent,
  StyledMenuBackdrop,
  StyledMenuItem,
  StyledMenuGroup,
  StyledMenuItemOption,
  StyledMenuOptionsGroup,
  StyledMenuGroupTitle,
  StyledMenuItemOptionIndicator,
  StyledMenuItemOptionLabel,
} from '../../styled-components';
import { createMenu } from '@gluestack/ui-creator';

export const Menu = createMenu({
  StyledMenuContent,
  StyledMenuBackdrop,
  StyledMenuItem,
  StyledMenuGroup,
  StyledMenuItemOption,
  StyledMenuOptionsGroup,
  StyledMenuGroupTitle,
  StyledMenuItemOptionIndicator,
  StyledMenuItemOptionLabel,
}) as any;
