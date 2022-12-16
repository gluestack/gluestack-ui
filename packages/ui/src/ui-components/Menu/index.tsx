import {
  StyledMenu,
  StyledMenuBackdrop,
  StyledMenuContent,
  StyledMenuGroup,
  StyledMenuGroupTitle,
  StyledMenuItem,
  StyledMenuItemOption,
  StyledMenuItemOptionIndicator,
  StyledMenuItemOptionLabel,
  StyledMenuOptionsGroup,
  StyledMenuTrigger,
} from '../../styled-components';
import { createMenu } from '@gluestack/ui-creator';

export const Menu = createMenu({
  StyledMenu,
  StyledMenuBackdrop,
  StyledMenuContent,
  StyledMenuGroup,
  StyledMenuGroupTitle,
  StyledMenuItem,
  StyledMenuItemOption,
  StyledMenuItemOptionIndicator,
  StyledMenuItemOptionLabel,
  StyledMenuOptionsGroup,
  StyledMenuTrigger,
}) as any;
