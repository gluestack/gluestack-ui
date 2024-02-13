import type { ViewProps } from 'react-native';

export interface IGridProps extends ViewProps {
  /**
   * The number of columns in the grid.
   */
  numColumns?: number;

  /**
   * The space between the grid children.
   */
  spacing?: number;

  /**
   * The space between the columns.
   */
  columnSpacing?: number;

  /**
   * The space between the rows.
   */
  rowSpacing?: number;
}

export interface IGridItemProps {
  /**
   * The number of columns the item should span.
   */
  // colSpan?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  children: JSX.Element | Array<JSX.Element>;
}

export type IGridComponentType<GridProps, ItemProps> =
  React.ForwardRefExoticComponent<GridProps & IGridProps> & {
    Item: React.ForwardRefExoticComponent<ItemProps & IGridItemProps>;
  };
