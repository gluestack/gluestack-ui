import type React from 'react';
import { Grid as GridMain } from './Grid';
import { GridItem } from './GridItem';
import { IGridComponentType } from './types';

export function createGrid<GridProps, ItemProps>({
  Parent,
  Root,
  Item,
}: {
  Root: React.ComponentType<GridProps>;
  Parent: React.ComponentType<any>;
  Item: React.ComponentType<ItemProps>;
}) {
  const Grid = GridMain(Parent, Root) as any;
  Grid.Item = GridItem(Item);

  Grid.displayName = 'Grid';
  Grid.Item.displayName = 'Grid.Item';

  return Grid as IGridComponentType<GridProps, ItemProps>;
}
