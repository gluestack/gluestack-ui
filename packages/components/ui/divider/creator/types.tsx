export interface InterfaceDivider {
  orientation?: 'vertical' | 'horizontal';
  children?: any;
}

export type IDividerProps = InterfaceDivider;

export type IDividerComponentType<Root> = React.ForwardRefExoticComponent<
  React.RefAttributes<Root> & React.PropsWithoutRef<Root>
>;
