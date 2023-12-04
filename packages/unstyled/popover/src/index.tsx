import { Popover as PopoverMain } from './Popover';
import PopoverArrow from './PopoverArrow';
import PopoverBody from './PopoverBody';
import PopoverCloseButton from './PopoverCloseButton';
import PopoverContent from './PopoverContent';
import PopoverFooter from './PopoverFooter';
import PopoverHeader from './PopoverHeader';
import PopoverBackdrop from './PopoverBackdrop';
import type { IPopoverComponentType } from './types';

export function createPopover<
  PopoverProps,
  ArrowProps,
  ContentProps,
  HeaderProps,
  FooterProps,
  BodyProps,
  BackdropProps,
  CloseButtonProps,
  AnimatePresenceProps
>({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
  AnimatePresence,
}: {
  Root: React.ComponentType<PopoverProps>;
  Arrow: React.ComponentType<ArrowProps>;
  Content: React.ComponentType<ContentProps>;
  Header: React.ComponentType<HeaderProps>;
  Footer: React.ComponentType<FooterProps>;
  Body: React.ComponentType<BodyProps>;
  Backdrop: React.ComponentType<BackdropProps>;
  CloseButton: React.ComponentType<CloseButtonProps>;
  AnimatePresence?: React.ComponentType<AnimatePresenceProps>;
}) {
  const Popover: any = PopoverMain(Root);
  Popover.Content = PopoverContent(Content, AnimatePresence);
  Popover.CloseButton = PopoverCloseButton(CloseButton);
  Popover.Header = PopoverHeader(Header);
  Popover.Footer = PopoverFooter(Footer);
  Popover.Body = PopoverBody(Body);
  Popover.Arrow = PopoverArrow(Arrow);
  Popover.Backdrop = PopoverBackdrop(Backdrop, AnimatePresence);

  Popover.displayName = 'Popover';
  Popover.Content.displayName = 'Popover.Content';
  Popover.CloseButton.displayName = 'Popover.CloseButton';
  Popover.Header.displayName = 'Popover.Header';
  Popover.Footer.displayName = 'Popover.Footer';
  Popover.Body.displayName = 'Popover.Body';
  Popover.Arrow.displayName = 'Popover.Arrow';
  Popover.Backdrop.displayName = 'Popover.Backdrop';

  return Popover as IPopoverComponentType<
    PopoverProps,
    ArrowProps,
    ContentProps,
    HeaderProps,
    FooterProps,
    BodyProps,
    BackdropProps,
    CloseButtonProps
  >;
}
