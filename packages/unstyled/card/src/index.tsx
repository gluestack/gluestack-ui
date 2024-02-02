import type React from 'react';
import { Card as CardMain } from './Card';

export function createCard<CardProps>({
  Root,
}: {
  Root: React.ComponentType<CardProps>;
}) {
  const Card = CardMain(Root);
  Card.displayName = 'Card';
  return Card as ICardComponentType<CardProps>;
}
