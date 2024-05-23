import React from 'react';
import { gridStyle, gridItemStyle } from './styles';

const Grid = ({ className, _extra, ...props }: any) => {
  const gridClass = _extra?.className;
  const finalGridClass = gridClass ?? '';
  return (
    <div
      className={gridStyle({
        class: className + ' ' + finalGridClass,
      })}
      {...props}
    />
  );
};

const GridItem = ({ className, _extra, ...props }: any) => {
  const gridItemClass = _extra?.className;

  const finalGridItemClass = gridItemClass ?? '';
  return (
    <div
      className={gridItemStyle({
        class: className + ' ' + finalGridItemClass,
      })}
      {...props}
    />
  );
};
Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';
export { Grid, GridItem };
