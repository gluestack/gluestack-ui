import type React from 'react';
import { Grid as GridMain } from './Grid';
import { GridContainer } from './GridContainer';
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
  const Grid = GridMain(Root) as any;
  Grid.Container = GridContainer(Parent);
  Grid.Item = GridItem(Item);
  Grid.displayName = 'Grid';
  Grid.Container.displayName = 'Grid.Container';
  Grid.Item.displayName = 'Grid.Item';

  return Grid as IGridComponentType<GridProps>;
}
