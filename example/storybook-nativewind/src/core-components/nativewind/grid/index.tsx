import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
  forwardRef,
} from 'react';
import type { VariantProps } from '@gluestack-ui/nativewind-utils';
import { View, Dimensions, Platform, ViewProps } from 'react-native';
import { gridStyle, gridItemStyle } from './styles';
import { cssInterop } from 'nativewind';
import {
  useBreakpointValue,
  getBreakPointValue,
} from '@/components/ui/utils/use-break-point-value';
const { width } = Dimensions.get('window');

const GridContext = createContext<any>({});

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

function generateResponsiveNumColumns({ gridClass }: { gridClass: string }) {
  const gridClassNamePattern = /\b(?:\w+:)?grid-cols-?\d+\b/g;
  const numColumns = gridClass?.match(gridClassNamePattern);

  if (!numColumns) {
    return 12;
  }

  const regex = /^(?:(\w+):)?grid-cols-?(\d+)$/;
  const result: any = {};

  numColumns.forEach((classname) => {
    const match = classname.match(regex);
    if (match) {
      const prefix = match[1] || 'default';
      const value = parseInt(match[2], 10);
      result[prefix] = value;
    }
  });

  return result;
}

function generateResponsiveColSpans({
  gridItemClassName,
}: {
  gridItemClassName: string;
}) {
  const gridClassNamePattern = /\b(?:\w+:)?col-span-?\d+\b/g;

  const colSpan: any = gridItemClassName?.match(gridClassNamePattern);

  if (!colSpan) {
    return 1;
  }

  const regex = /^(?:(\w+):)?col-span-?(\d+)$/;
  const result: any = {};

  colSpan.forEach((classname: any) => {
    const match = classname.match(regex);
    if (match) {
      const prefix = match[1] || 'default';
      const value = parseInt(match[2], 10);
      result[prefix] = value;
    }
  });

  return result;
}

type IGridProps = ViewProps &
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
    borderWidth?: number;
    borderLeftWidth?: number;
    borderRightWidth?: number;
    _extra: {
      className: string;
    };
  };

const Grid = forwardRef<React.ElementRef<typeof View>, IGridProps>(
  ({ className, _extra, children, ...props }, ref) => {
    const [calculatedWidth, setCalculatedWidth] = useState<number | null>(null);

    const gridClass = _extra?.className;
    const obj = generateResponsiveNumColumns({ gridClass });
    const responsiveNumColumns: any = useBreakpointValue(obj);

    const itemsPerRow = useMemo(() => {
      // get the colSpan of each child
      const colSpanArr = React.Children.map(children, (child: any) => {
        const gridItemClassName = child?.props?._extra?.className;

        const colSpan2 = getBreakPointValue(
          generateResponsiveColSpans({ gridItemClassName }),
          width
        );
        const colSpan = colSpan2 ? colSpan2 : 1;

        if (colSpan > responsiveNumColumns) {
          return responsiveNumColumns;
        }

        return colSpan;
      });

      const childrenArray = React.Children.toArray(children);

      const rowItemsCount = arrangeChildrenIntoRows({
        childrenArray,
        colSpanArr,
        numColumns: responsiveNumColumns,
      });

      return rowItemsCount;
    }, [responsiveNumColumns, children]);

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { index } as any);
      }

      return child;
    });

    const gridClassMerged = `${Platform.select({
      web: gridClass ?? '',
    })}`;

    const contextValue = useMemo(() => {
      return {
        calculatedWidth,
        numColumns: responsiveNumColumns,
        itemsPerRow,
        flexDirection: props?.flexDirection || 'row',
        gap: props?.gap || 0,
        columnGap: props?.columnGap || 0,
      };
    }, [calculatedWidth, itemsPerRow, responsiveNumColumns, props]);

    const borderLeftWidth = props?.borderLeftWidth || props?.borderWidth || 0;
    const borderRightWidth = props?.borderRightWidth || props?.borderWidth || 0;
    const borderWidthToSubtract = borderLeftWidth + borderRightWidth;

    return (
      <GridContext.Provider value={contextValue}>
        <View
          ref={ref}
          className={gridStyle({
            class: className + ' ' + gridClassMerged,
          })}
          onLayout={(event: any) => {
            const paddingLeftToSubtract =
              props?.paddingStart || props?.paddingLeft || props?.padding || 0;

            const paddingRightToSubtract =
              props?.paddingEnd || props?.paddingRight || props?.padding || 0;

            const gridWidth =
              event.nativeEvent.layout.width -
              paddingLeftToSubtract -
              paddingRightToSubtract -
              borderWidthToSubtract;

            setCalculatedWidth(gridWidth);
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
      borderWidth: 'borderWidth',
      borderLeftWidth: 'borderLeftWidth',
      borderRightWidth: 'borderRightWidth',
    },
  },
});

type IGridItemProps = ViewProps &
  VariantProps<typeof gridItemStyle> & {
    index?: number;
    _extra: {
      className: string;
    };
  };

const GridItem = forwardRef<React.ElementRef<typeof View>, IGridItemProps>(
  ({ className, _extra, ...props }, ref) => {
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

    const gridItemClass = _extra?.className;
    const responsiveColSpan: number =
      useBreakpointValue(
        generateResponsiveColSpans({ gridItemClassName: gridItemClass })
      ) ?? 1;

    useEffect(() => {
      if (
        !flexDirection?.includes('column') &&
        calculatedWidth &&
        numColumns > 0 &&
        responsiveColSpan > 0
      ) {
        // find out in which row of itemsPerRow the current item's index is
        const row = Object.keys(itemsPerRow).find((key) => {
          return itemsPerRow[key].includes(props?.index);
        });

        const rowColsCount = itemsPerRow[row as string]?.length;

        const space = columnGap || gap || 0;

        const gutterOffset =
          space *
          (rowColsCount === 1 && responsiveColSpan < numColumns
            ? 2
            : rowColsCount - 1);

        const flexBasisVal =
          Math.min(
            (((calculatedWidth - gutterOffset) * responsiveColSpan) /
              numColumns /
              calculatedWidth) *
              100,
            100
          ) + '%';

        setFlexBasisValue(flexBasisVal);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      calculatedWidth,
      responsiveColSpan,
      numColumns,
      columnGap,
      gap,
      flexDirection,
    ]);

    return (
      <View
        ref={ref}
        // @ts-expect-error
        gridItemClass={gridItemClass}
        className={gridItemStyle({
          class:
            className + ' ' + Platform.select({ web: gridItemClass ?? '' }) ??
            '',
        })}
        {...props}
        style={[
          {
            flexBasis: flexBasisValue as any,
          },
          props.style,
        ]}
      />
    );
  }
);

Grid.displayName = 'Grid';
GridItem.displayName = 'GridItem';

export { Grid, GridItem };
