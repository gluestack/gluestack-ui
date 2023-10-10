import { AnimatePresence } from '@gluestack-style/animation-resolver';
import { createPopover } from '@gluestack-ui/popover';
import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from './styled-components';

export const Popover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});
export const PopoverArrow = Popover.Arrow;
export const PopoverContent = Popover.Content;
export const PopoverHeader = Popover.Header;
export const PopoverFooter = Popover.Footer;
export const PopoverBody = Popover.Body;
export const PopoverBackdrop = Popover.Backdrop;
export const PopoverCloseButton = Popover.CloseButton;
