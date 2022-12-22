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
  const PopoverTemp: any = PopoverMain(StyledPopover);
  PopoverTemp.Content = PopoverContent(StyledPopoverContent);
  PopoverTemp.CloseButton = PopoverCloseButton(StyledPopoverCloseButton);
  PopoverTemp.Header = PopoverHeader(StyledPopoverHeader);
  PopoverTemp.Footer = PopoverFooter(StyledPopoverFooter);
  PopoverTemp.Body = PopoverBody(StyledPopoverBody);
  PopoverTemp.Arrow = PopoverArrow(StyledPopoverArrow);
  PopoverTemp.Backdrop = PopoverBackdrop(StyledPopoverBackdrop);
  const Popover = PopoverTemp as any;
  return Popover;
};
