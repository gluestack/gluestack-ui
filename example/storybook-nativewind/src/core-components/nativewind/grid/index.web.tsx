import React from 'react';
import { gridStyle, gridItemStyle } from './styles';
import type { ViewProps } from 'react-native';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';

type Similar<T, U> = {
  [K in keyof T & keyof U]: T[K] extends U[K]
    ? U[K] extends T[K]
      ? T[K]
      : never
    : never;
};

type IGridProps = Similar<ViewProps, React.ComponentPropsWithoutRef<'div'>> &
  VariantProps<typeof gridStyle> & {
    gap?: number;
    rowGap?: number;
    columnGap?: number;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    padding?: number;
    paddingLeft?: number;
    paddingRight?: number;
    paddingStart?: number;
    paddingEnd?: number;
    _extra: {
      className: string;
    };
  };

const Grid = React.forwardRef<HTMLDivElement, IGridProps>(
  ({ className, _extra, ...props }, ref) => {
    const gridClass = _extra?.className;
    const finalGridClass = gridClass ?? '';
    return (
      <div
        ref={ref}
        className={gridStyle({
          class: className + ' ' + finalGridClass,
        })}
        {...props}
      />
    );
  }
);

type IGridItemProps = Similar<
  ViewProps,
  React.ComponentPropsWithoutRef<'div'>
> &
  VariantProps<typeof gridItemStyle> & {
    index?: number;
    _extra: {
      className: string;
    };
  };
const GridItem = React.forwardRef<HTMLDivElement, IGridItemProps>(
  ({ className, _extra, ...props }, ref) => {
    const gridItemClass = _extra?.className;

    const finalGridItemClass = gridItemClass ?? '';
    return (
      <div
        ref={ref}
        className={gridItemStyle({
          class: className + ' ' + finalGridItemClass,
        })}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
