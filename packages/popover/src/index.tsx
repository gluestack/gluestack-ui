import { Popover as PopoverMain } from './Popover';
import PopoverArrow from './PopoverArrow';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverContent from './PopoverContent';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverBackdrop from './PopoverBackdrop';

export const createPopover = ({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
}: any) => {
  const Popover: any = PopoverMain(Root);
  Popover.Content = PopoverContent(Content);
  Popover.CloseButton = PopoverCloseButton(CloseButton);
  Popover.Header = PopoverHeader(Header);
  Popover.Footer = PopoverFooter(Footer);
  Popover.Body = PopoverBody(Body);
  Popover.Arrow = PopoverArrow(Arrow);
  Popover.Backdrop = PopoverBackdrop(Backdrop);

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
