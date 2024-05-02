import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
  forwardRef,
} from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View } from 'react-native';
import { gridStyle, gridItemStyle } from './styles';
import { cssInterop } from 'nativewind';

const GridContext = createContext<any>({});
type IGridProps = React.ComponentProps<typeof View> &
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
  };

type IGridItemProps = React.ComponentProps<typeof View> &
  VariantProps<typeof gridItemStyle> & {
    index?: number;
  };

function arrangeChildrenIntoRows({
  childrenArray,
  colSpanArr,
  numColumns,
}: {
  childrenArray: React.ReactNode[];
  colSpanArr: number[];
  numColumns: number;
}) {
  let currentRow = 1;
  let currentRowTotalColSpan = 0;

  // store how many items in each row
  const rowItemsCount: {
    [key: number]: number[];
  } = {};

  for (let i = 0; i < childrenArray.length; i++) {
    const colSpan = colSpanArr[i];

    // if current row is full, go to next row
    if (currentRowTotalColSpan + colSpan > numColumns) {
      currentRow++;
      currentRowTotalColSpan = colSpan;
    } else {
      // if current row is not full, add colSpan to current row
      currentRowTotalColSpan += colSpan;
    }

    rowItemsCount[currentRow] = rowItemsCount[currentRow]
      ? [...rowItemsCount[currentRow], i]
      : [i];
  }

  return rowItemsCount;
}

const Grid = forwardRef(
  (
    { className, numColumns = 12, children, ...props }: IGridProps,
    ref?: any
  ) => {
    const [calculatedWidth, setCalculatedWidth] = useState<number | null>(null);

    const itemsPerRow = useMemo(() => {
      // get the colSpan of each child
      const colSpanArr = React.Children.map(children, (child: any) => {
        const colSpan = child.props?.colSpan ? child.props.colSpan : 1;

        if (colSpan > numColumns) {
          return numColumns;
        }

        return colSpan;
      });

      const childrenArray = React.Children.toArray(children);

      const rowItemsCount = arrangeChildrenIntoRows({
        childrenArray,
        colSpanArr,
        numColumns,
      });

      return rowItemsCount;
    }, [numColumns, children]);

    const contextValue = useMemo(() => {
      return {
        calculatedWidth,
        numColumns,
        itemsPerRow,
        flexDirection: props?.flexDirection || 'row',
        gap: props?.gap || 0,
        columnGap: props?.columnGap || 0,
      };
    }, [calculatedWidth, itemsPerRow, numColumns, props]);

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index } as any);
      }

      return child;
    });

    return (
      <GridContext.Provider value={contextValue}>
        <View
          ref={ref}
          className={gridStyle({
            numColumns,
            class: className,
          })}
          onLayout={(event: any) => {
            const paddingLeftToSubtract =
              props?.paddingStart || props?.paddingLeft || props?.padding || 0;

            const paddingRightToSubtract =
              props?.paddingEnd || props?.paddingRight || props?.padding || 0;

            const width =
              event.nativeEvent.layout.width -
              paddingLeftToSubtract -
              paddingRightToSubtract;

            setCalculatedWidth(width);
          }}
          {...props}
        >
          {calculatedWidth && childrenWithProps}
        </View>
      </GridContext.Provider>
    );
  }
);

//@ts-ignore
cssInterop(Grid, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      gap: 'gap',
      rowGap: 'rowGap',
      columnGap: 'columnGap',
      flexDirection: 'flexDirection',
      padding: 'padding',
      paddingLeft: 'paddingLeft',
      paddingRight: 'paddingRight',
      paddingStart: 'paddingStart',
      paddingEnd: 'paddingEnd',
    },
  },
});

const GridItem = forwardRef(
  ({ className, colSpan = 1, ...props }: IGridItemProps, ref?: any) => {
    const [flexBasisValue, setFlexBasisValue] = useState<
      number | string | null
    >('auto');

    const {
      calculatedWidth,
      numColumns,
      itemsPerRow,
      flexDirection,
      gap,
      columnGap,
    } = useContext(GridContext);

    useEffect(() => {
      if (
        !flexDirection?.includes('column') &&
        calculatedWidth &&
        numColumns > 0 &&
        colSpan > 0
      ) {
        // find out in which row of itemsPerRow the current item's index is
        const row = Object.keys(itemsPerRow).find((key) => {
          return itemsPerRow[key].includes(props?.index);
        });

        const rowColsCount = itemsPerRow[row as string].length;

        const space = columnGap || gap || 0;

        const gutterOffset =
          space *
          (rowColsCount === 1 && colSpan < numColumns ? 2 : rowColsCount - 1);

        const flexBasisValue =
          Math.min(
            (((calculatedWidth - gutterOffset) * colSpan) /
              numColumns /
              calculatedWidth) *
              100,
            100
          ) + '%';

        setFlexBasisValue(flexBasisValue);
      }
    }, [calculatedWidth, colSpan, numColumns, columnGap, gap, flexDirection]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <View
        ref={ref}
        className={gridItemStyle({ colSpan, class: className })}
        //@ts-ignore
        style={{
          flexBasis: flexBasisValue,
        }}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
