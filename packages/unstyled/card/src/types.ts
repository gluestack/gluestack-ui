import type { ViewProps } from 'react-native';

export interface ICardProps extends ViewProps {}

// export interface ICardHeaderProps extends ViewProps {}

// export interface ICardBodyProps extends ViewProps {}

// export interface ICardFooterProps extends ViewProps {}

export type ICardComponentType<CardProps> = React.ForwardRefExoticComponent<
  CardProps & ICardProps
>;
