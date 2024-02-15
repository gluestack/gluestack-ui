export interface IGridProps {
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
   * The children of the grid item.
   */
  children: JSX.Element | Array<JSX.Element>;

  /**
   * The number of columns the item should span.
   */
  colSpan?: number;
}

export type IGridComponentType<GridProps> = React.ForwardRefExoticComponent<
  GridProps & IGridProps
> & {
  Item: React.ForwardRefExoticComponent<IGridItemProps>;
};
