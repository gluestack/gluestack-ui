import React, { useMemo, useContext, createContext, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Svg } from 'react-native-svg';
import {
  segmentedControlStyle,
  segmentedControlItemStyle,
  segmentedControlItemTextStyle,
  segmentedControlItemIconStyle,
  segmentedDividerStyle,
} from './styles';
import {
  useStyleContext,
  withStyleContext,
} from '@gluestack-ui/nativewind-utils/withStyleContext';
const SCOPE = 'SEGMENTED_CONTROL';

const ViewWithContext = withStyleContext(View, SCOPE);
const SegmentedContext = createContext({
  selectedItems: [''],
  handleSelectedItems: () => {},
});

const PrimitiveIcon = React.forwardRef(
  (
    {
      height,
      width,
      fill,
      color,
      size,
      stroke = 'currentColor',
      as: AsComp,
      ...props
    }: any,
    ref?: any
  ) => {
    const sizeProps = useMemo(() => {
      return size ? { size } : { height, width };
    }, [size, height, width]);

    const colorProps =
      stroke === 'currentColor' && color !== undefined ? color : stroke;

    if (AsComp) {
      return (
        <AsComp
          ref={ref}
          fill={fill}
          {...props}
          {...sizeProps}
          stroke={colorProps}
        />
      );
    }
    return (
      <Svg
        ref={ref}
        height={height}
        width={width}
        fill={fill}
        stroke={colorProps}
        {...props}
      />
    );
  }
);

const SegmentedDivider = React.forwardRef(
  (
    {
      className,
      parentOrientation,
      parentSize,
      // itemValue,
      // index,
      item,
      ...props
    }: any,
    ref?: any
  ) => {
    const { selectedItems } = useContext(SegmentedContext);

    if (selectedItems.includes(item.value)) {
      // console.log('item', item);
      // const nextItemIndex = item.index + 1;

      return null;
    }

    if (item.index === 0) {
      return null;
    }

    return (
      <View
        ref={ref}
        {...props}
        className={segmentedDividerStyle({
          parentVariants: {
            orientation: parentOrientation,
            size: parentSize,
          },
          class: className,
        })}
      />
    );
  }
);

const SegmentedControl = React.forwardRef(
  (
    {
      className,
      size = 'md',
      orientation = 'horizontal',
      space = 'true',
      isDivider = false,
      defaultValue,
      value,
      ...props
    }: any,
    ref?: any
  ) => {
    const [selectedItems, setSelectedItems] = useState<string[]>(
      value ?? defaultValue ?? []
    );

    const handleSelectedItems = (itemValue: { itemValue: string }) => {
      setSelectedItems((prevItems: any) => {
        if (prevItems.includes(itemValue)) {
          // remove the item if it exists
          return prevItems.filter((item: any) => item !== itemValue);
        } else {
          //add item if it does not exist in the array
          return [...prevItems, itemValue];
        }
      });
    };

    let updatedChildren;
    if (space === 'none' && isDivider === true) {
      updatedChildren = props.children.map((child: any, index: any) => {
        return (
          <React.Fragment key={index}>
            <SegmentedDivider
              parentOrientation={orientation}
              parentSize={size}
              // itemValue={child.props.value}
              // index={index}
              item={{ value: child.props.value, index: index }}
            />
            {child}
          </React.Fragment>
        );
      });
    } else {
      updatedChildren = props.children;
    }

    return (
      <ViewWithContext
        ref={ref}
        {...props}
        className={segmentedControlStyle({
          size,
          orientation,
          space,
          class: className,
        })}
        context={{ size, space }}
      >
        <SegmentedContext.Provider
          value={{ selectedItems, handleSelectedItems }}
        >
          {/* {props.children} */}
          {/* {!space && <Divider parentOrientation={orientation} />} */}
          {updatedChildren}
        </SegmentedContext.Provider>
      </ViewWithContext>
    );
  }
);

const SegmentedControlItem = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    const { size: parentSize, space: parentSpace } = useStyleContext(SCOPE);
    const { selectedItems, handleSelectedItems }: any =
      useContext(SegmentedContext);

    const isSelected = selectedItems.includes(props.value);

    return (
      <Pressable
        onPress={() => handleSelectedItems(props.value)}
        ref={ref}
        {...props}
        className={segmentedControlItemStyle({
          parentVariants: { size: parentSize, space: parentSpace },
          isSelected,
          class: className,
        })}
      >
        {props.children}
      </Pressable>
    );
  }
);

const SegmentedControlItemText = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (
      <Text
        ref={ref}
        {...props}
        className={segmentedControlItemTextStyle({
          parentVariants: { size: parentSize },
          class: className,
        })}
      />
    );
  }
);

const SegmentedControlItemIcon = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    const { size: parentSize } = useStyleContext(SCOPE);
    return (
      <PrimitiveIcon
        ref={ref}
        {...props}
        className={segmentedControlItemIconStyle({
          parentVariants: { size: parentSize },
          class: className,
        })}
      />
    );
  }
);

SegmentedControl.displayName = 'SegmentedControl';
SegmentedControlItem.displayName = 'SegmentedControlItem';
SegmentedControlItemText.displayName = 'SegmentedControlItemText';
SegmentedControlItemIcon.displayName = 'SegmentedControlItemIcon';

export {
  SegmentedControl,
  SegmentedControlItem,
  SegmentedControlItemText,
  SegmentedControlItemIcon,
};
