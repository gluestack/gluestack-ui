import {
  StyledPopover,
  StyledPopoverContent,
  StyledPopoverCloseButton,
  StyledPopoverHeader,
  StyledPopoverFooter,
  StyledPopoverBody,
  StyledPopoverBackdrop,
  StyledPopoverArrow,
} from '../../styled-components';
import { createPopover } from '@gluestack/ui-creator';

export const Popover = createPopover({
  StyledPopover,
  StyledPopoverContent,
  StyledPopoverCloseButton,
  StyledPopoverHeader,
  StyledPopoverFooter,
  StyledPopoverBody,
  StyledPopoverBackdrop,
  StyledPopoverArrow,
}) as any;
