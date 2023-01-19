import { Popover as PopoverMain } from './Popover';
import PopoverArrow from './PopoverArrow';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverContent from './PopoverContent';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverBackdrop from './PopoverBackdrop';

export const createPopover = ({
  StyledPopover,
  StyledPopoverArrow,
  StyledPopoverContent,
  StyledPopoverHeader,
  StyledPopoverFooter,
  StyledPopoverBody,
  StyledPopoverBackdrop,
  StyledPopoverCloseButton,
}: any) => {
  const Popover: any = PopoverMain(StyledPopover);
  Popover.Content = PopoverContent(StyledPopoverContent);
  Popover.CloseButton = PopoverCloseButton(StyledPopoverCloseButton);
  Popover.Header = PopoverHeader(StyledPopoverHeader);
  Popover.Footer = PopoverFooter(StyledPopoverFooter);
  Popover.Body = PopoverBody(StyledPopoverBody);
  Popover.Arrow = PopoverArrow(StyledPopoverArrow);
  Popover.Backdrop = PopoverBackdrop(StyledPopoverBackdrop);

  Popover.displayName = 'Popover';
  Popover.Content.displayName = 'Popover.Content';
  Popover.CloseButton.displayName = 'Popover.CloseButton';
  Popover.Header.displayName = 'Popover.Header';
  Popover.Footer.displayName = 'Popover.Footer';
  Popover.Body.displayName = 'Popover.Body';
  Popover.Arrow.displayName = 'Popover.Arrow';
  Popover.Backdrop.displayName = 'Popover.Backdrop';

  return Popover;
};
