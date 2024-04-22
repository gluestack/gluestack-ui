import React, { forwardRef, useEffect, useState } from 'react';
import { useContext } from 'react';
import { GridContainerContext } from './Context';
// import { Platform } from 'react-native';
import { View } from '@gluestack-ui/themed';

export const GridItem = (StyledGridItem: any) =>
  forwardRef(({ colSpan = 1, children, ...props }: any, ref?: any) => {
    const [flexBasisValue, setFlexBasisValue] = useState<
      number | string | null
    >('auto');

    const {
      calculatedWidth,
      numColumns,
      flexDirection,
      columnSpacing,
      spacing,
      rowSpacing,
    } = useContext(GridContainerContext);

    useEffect(() => {
      if (
        !flexDirection?.includes('column') &&
        calculatedWidth &&
        numColumns > 0 &&
        colSpan > 0
      ) {
        // const width = calculatedWidth / numColumns;

        // let flexBasis =
        //   Platform.OS === 'web'
        //     ? `${Math.min(((width * colSpan) / calculatedWidth) * 100, 100)}%`
        //     : Math.min(width * colSpan, calculatedWidth);

        // const flexBasis =
        //   ((calculatedWidth * colSpan) / numColumns / calculatedWidth) * 100 +
        //   '%';
        const flexBasis =
          Math.min(
            ((calculatedWidth * colSpan) / numColumns / calculatedWidth) * 100,
            100
          ) + '%';

        setFlexBasisValue(flexBasis);
      }
    }, [calculatedWidth, numColumns, colSpan, flexDirection]);

    return (
      <StyledGridItem
        ref={ref}
        style={{
          // width: Platform.OS === 'web' ? 'auto' : '100%',
          flexBasis: flexBasisValue,
          flexDirection: props?.flexDirection || 'row',
        }}
        {...props}
      >
        <View
          style={{
            width: (columnSpacing ?? spacing) / 2,
            flexDirection: props?.flexDirection || 'row',
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: props?.flexDirection === 'column' ? 'row' : 'column',
          }}
        >
          <View
            style={{
              height: (rowSpacing ?? spacing) / 2,
            }}
          />
          <View
            style={{
              // flex: 1,
              flexDirection: props?.flexDirection || 'column',
            }}
          >
            {children}
          </View>
          <View
            style={{
              height: (rowSpacing ?? spacing) / 2,
            }}
          />
        </View>
        <View
          style={{
            width: (columnSpacing ?? spacing) / 2,
          }}
        />
      </StyledGridItem>
    );
  });
