import type { ViewProps } from 'react-native';

export interface ICardProps extends ViewProps {
  children?: any;
  variant?: 'elevated' | 'outline' | 'ghost' | 'filled';
  size?: 'sm' | 'md' | 'lg';
}

export type ICardComponentType<CardProps> = React.ForwardRefExoticComponent<
  CardProps & ICardProps
>;
