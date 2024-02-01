import type React from 'react';
import { Card as CardMain } from './Card';
// import { CardHeader } from './CardHeader';
// import { CardBody } from './CardBody';
// import { CardFooter } from './CardFooter';

export function createCard<CardProps>({
  Root,
}: // Header,
// Body,
// Footer,
{
  Root: React.ComponentType<CardProps>;
  // Header: React.ComponentType<HeaderProps>;
  // Body: React.ComponentType<BodyProps>;
  // Footer: React.ComponentType<FooterProps>;
}) {
  const Card = CardMain(Root) as any;

  // Card.Header = CardHeader(Header);
  // Card.Body = CardBody(Body);
  // Card.Footer = CardFooter(Footer);

  Card.displayName = 'Card';
  // Card.Header.displayName = 'Card.Header';
  // Card.Body.displayName = 'Card.Body';
  // Card.Footer.displayName = 'Card.Footer';

  return Card as ICardComponentType<CardProps>;
  // HeaderProps,
  // BodyProps,
  // FooterProps
}
