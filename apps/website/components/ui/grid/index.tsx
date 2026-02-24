import React, {
  useState,
  createContext,
  useContext,
  useMemo,
  forwardRef,
} from 'react';
import type { VariantProps } from '@gluestack-ui/utils/nativewind-utils';
import { View, Platform, ViewProps } from 'react-native';
import { gridStyle, gridItemStyle } from './styles';
import { useBreakpointValue } from '@gluestack-ui/utils/hooks';

const GridContext = createContext<any>({});

// Parses Tailwind gap/gap-x class to pixels (1 Tailwind unit = 4px)
// e.g. gap-3 → 12, gap-x-4 → 16, gap-px → 1
function parseGapFromClassName(className: string = ''): number {
  if (/\bgap-x-px\b/.test(className)) return 1;
  const gapXMatch = className.match(/\bgap-x-(\d+(?:\.\d+)?)\b/);
  if (gapXMatch) return parseFloat(gapXMatch[1]) * 4;

  if (/\bgap-px\b/.test(className)) return 1;
  const gapMatch = className.match(/\bgap-(\d+(?:\.\d+)?)\b/);
  if (gapMatch) return parseFloat(gapMatch[1]) * 4;

  return 0;
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

const Grid = forwardRef<React.ComponentRef<typeof View>, IGridProps>(
  function Grid({ className, _extra, children, ...props }, ref) {
    const [calculatedWidth, setCalculatedWidth] = useState<number | null>(null);
    const gridClass = _extra?.className;
    const obj = generateResponsiveNumColumns({ gridClass });
    const responsiveNumColumns: any = useBreakpointValue(obj);

    // Resolve column gap: explicit prop wins, then parse from className
    const resolvedGap =
      props?.columnGap ?? props?.gap ?? parseGapFromClassName(className);

    const childrenWithProps = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { key: index } as any);
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
        flexDirection: props?.flexDirection || 'row',
        gap: resolvedGap,
      };
    }, [calculatedWidth, responsiveNumColumns, props, resolvedGap]);

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
          onLayout={(event) => {
            const paddingLeftToSubtract =
              props?.paddingStart || props?.paddingLeft || props?.padding || 0;
            const paddingRightToSubtract =
              props?.paddingEnd || props?.paddingRight || props?.padding || 0;
            const gridWidth =
              Math.floor(event.nativeEvent.layout.width) -
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

type IGridItemProps = ViewProps &
  VariantProps<typeof gridItemStyle> & {
    _extra: {
      className: string;
    };
  };

const GridItem = forwardRef<React.ComponentRef<typeof View>, IGridItemProps>(
  function GridItem({ className, _extra, ...props }, ref) {
    const { calculatedWidth, numColumns, flexDirection, gap } =
      useContext(GridContext);
    const gridItemClass = _extra?.className;
    const responsiveColSpan = (useBreakpointValue(
      generateResponsiveColSpans({ gridItemClassName: gridItemClass })
    ) ?? 1) as number;

    const flexBasisValue = useMemo(() => {
      if (!calculatedWidth || !numColumns || responsiveColSpan <= 0) {
        return 'auto';
      }
      if (flexDirection?.includes('column')) {
        return 'auto';
      }
      // CSS grid-equivalent formula:
      //   colWidth = (W - gap*(numColumns-1)) / numColumns
      //   itemWidth = colSpan*colWidth + (colSpan-1)*gap
      //   Simplified: colSpan*(W + gap)/numColumns - gap
      const itemWidth =
        (responsiveColSpan * (calculatedWidth + gap)) / numColumns - gap;
      return Math.max(0, Math.floor(itemWidth));
    }, [calculatedWidth, responsiveColSpan, numColumns, gap, flexDirection]);

    return (
      <View
        ref={ref}
        // @ts-expect-error : internal implementation for r-19/react-native-web
        gridItemClass={gridItemClass}
        className={gridItemStyle({
          class: className,
        })}
        {...props}
        style={[
          {
            width:
              typeof flexBasisValue === 'number' ? flexBasisValue : undefined,
            flexBasis:
              typeof flexBasisValue === 'string' ? flexBasisValue : undefined,
            flexShrink: 0,
            flexGrow: 0,
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
