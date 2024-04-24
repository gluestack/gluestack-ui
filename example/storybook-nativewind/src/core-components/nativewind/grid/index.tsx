import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
  forwardRef,
} from 'react';
import { View } from 'react-native';
import { gridStyle, gridItemStyle } from './styles';

const GridContext = createContext<any>({});

const Grid = forwardRef(
  (
    {
      className,
      numColumns = 12,
      spacing,
      rowSpacing,
      columnSpacing,
      children,
      ...props
    }: any,
    ref
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

      let currentRow = 1;
      let currentRowTotalColSpan = 0;

      // store how many items in each row
      const rowItemsCount: {
        [key: number]: number[];
      } = {};
      const childrenArray = React.Children.toArray(children);

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
    }, [children, numColumns]);

    const contextValue = useMemo(() => {
      return {
        calculatedWidth,
        numColumns,
        itemsPerRow,
        flexDirection: className?.includes('flex-col') ? 'column' : 'row',
        spacing,
        columnSpacing,
      };
    }, [
      calculatedWidth,
      itemsPerRow,
      className,
      numColumns,
      spacing,
      columnSpacing,
    ]);

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
            spacing,
            rowSpacing,
            columnSpacing,
            numColumns,
            class: className,
          })}
          {...props}
          onLayout={(event: any) => {
            const width = event.nativeEvent.layout.width;
            setCalculatedWidth(width);
          }}
        >
          {calculatedWidth && childrenWithProps}
        </View>
      </GridContext.Provider>
    );
  }
);

const GridItem = forwardRef(
  ({ className, colSpan = 1, ...props }: any, ref) => {
    const [flexBasisValue, setFlexBasisValue] = useState<
      number | string | null
    >('auto');

    const {
      calculatedWidth,
      numColumns,
      itemsPerRow,
      flexDirection,
      spacing,
      columnSpacing,
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
          return itemsPerRow[key].includes(props.index);
        });

        const rowColsCount = itemsPerRow[row as string].length;

        const gap = columnSpacing || spacing || 0;

        const gutterOffset =
          gap *
          3.5 *
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
    }, [calculatedWidth, colSpan, numColumns]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <View
        ref={ref}
        className={gridItemStyle({ colSpan, class: className })}
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
