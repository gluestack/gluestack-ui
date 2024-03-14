import { createGrid } from '@gluestack-ui/grid';
import { Root, Item, Parent } from './styled-components';

export const Grid = createGrid({
  Parent,
  Root,
  Item,
});

export const GridContainer = Grid.Container;
export const GridItem = Grid.Item;
