'use client';
import React, { useEffect, useRef, useCallback } from 'react';
import { createTabs, TabsContext } from '@gluestack-ui/core/tabs/creator';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import {
  tva,
  withStyleContext,
  useStyleContext,
  type VariantProps,
} from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import { Pressable, Text, View, FlatList } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  useAnimatedScrollHandler,
  runOnJS,
} from 'react-native-reanimated';
import { TabsAnimatedIndicator } from './TabsAnimatedIndicator';

const SCOPE = 'TABS';
const AnimatedView = Animated.createAnimatedComponent(View);
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

/** Styles */

const tabsStyle = tva({
  base: 'w-full',
});

const tabsListStyle = tva({
  base: 'flex relative',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
});

const tabsTriggerStyle = tva({
  base: 'justify-center items-center web:outline-none data-[disabled=true]:opacity-40 data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-primary/20',
  parentVariants: {
    size: {
      sm: 'px-3 py-2 gap-1',
      md: 'px-4 py-2.5 gap-2',
      lg: 'px-5 py-3 gap-2',
    },
    variant: {
      underlined: '',
      filled: 'rounded-lg',
    },
  },
});

const tabsTriggerTextStyle = tva({
  base: 'text-foreground/70 data-[selected=true]:text-foreground font-medium data-[hover=true]:text-foreground/90',
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});

const tabsTriggerIconStyle = tva({
  base: 'text-foreground/70 data-[selected=true]:text-foreground fill-none',
  parentVariants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
    },
  },
});

const tabsContentStyle = tva({
  base: 'pt-4',
});

const tabsContentWrapperStyle = tva({
  base: 'overflow-hidden',
});

const tabsIndicatorStyle = tva({
  base: 'pointer-events-none rounded-full',
  parentVariants: {
    variant: {
      underlined: 'border-b-2 border-primary',
      filled: 'bg-primary/20',
    },
  },
});

/** Creator */

const Root = withStyleContext(View, SCOPE);

const UITabs = createTabs({
  Root,
  List: View,
  Trigger: Pressable,
  Content: View,
  ContentWrapper: AnimatedView,
  TriggerText: Text,
  TriggerIcon: UIIcon,
  Indicator: View,
});

cssInterop(PrimitiveIcon, {
  className: {
    target: 'style',
    nativeStyleToProp: {
      height: true,
      width: true,
      fill: true,
      color: 'classNameColor',
      stroke: true,
    },
  },
});

/** Type definitions */

type ITabsProps = React.ComponentPropsWithoutRef<typeof UITabs> &
  VariantProps<typeof tabsStyle> & {
    variant?: 'underlined' | 'filled';
    size?: 'sm' | 'md' | 'lg';
  };

type ITabsListProps = React.ComponentPropsWithoutRef<typeof UITabs.List>;

type ITabsTriggerProps = React.ComponentPropsWithoutRef<typeof UITabs.Trigger>;

type ITabsContentProps = React.ComponentPropsWithoutRef<typeof UITabs.Content>;

type ITabsContentWrapperProps = React.ComponentPropsWithoutRef<
  typeof UITabs.ContentWrapper
>;

type ITabsTriggerTextProps = React.ComponentPropsWithoutRef<
  typeof UITabs.TriggerText
>;

type ITabsTriggerIconProps = React.ComponentPropsWithoutRef<
  typeof UITabs.TriggerIcon
> & {
  as?: React.ElementType;
  height?: number;
  width?: number;
};

type ITabsIndicatorProps = React.ComponentPropsWithoutRef<
  typeof UITabs.Indicator
>;

/** Components */

const Tabs = React.forwardRef<React.ComponentRef<typeof UITabs>, ITabsProps>(
  ({ className, variant = 'underlined', size = 'md', ...props }, ref) => {
    return (
      <UITabs
        ref={ref}
        {...props}
        className={tabsStyle({ class: className })}
        // @ts-ignore - pass variants to context
        context={{ variant, size }}
      />
    );
  }
);

const TabsList = React.forwardRef<
  React.ComponentRef<typeof UITabs.List>,
  ITabsListProps
>(({ className, children, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const flatListRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  if (!context) return null;

  const { orientation, setScrollOffset, selectedKey } = context;

  // Create animated scroll offset shared value for synchronized scrolling
  const animatedScrollOffset = useSharedValue(0);

  // Store container ref and animated scroll offset in context for position measurements
  React.useEffect(() => {
    if (containerRef.current && context) {
      // @ts-ignore
      context.listRef = containerRef;
      // @ts-ignore - Store animated scroll offset for indicator synchronization
      context.animatedScrollOffset = animatedScrollOffset;
    }
  }, [context, animatedScrollOffset]);

  // Scroll to selected tab when it changes
  useEffect(() => {
    if (orientation === 'horizontal' && selectedKey) {
      const childArray = React.Children.toArray(children);
      const triggers = childArray.filter(
        (child: any) => child?.type?.displayName !== 'TabsIndicator'
      );
      const selectedIndex = triggers.findIndex(
        (child: any) => child?.props?.value === selectedKey
      );

      if (selectedIndex >= 0 && flatListRef.current) {
        // Use a longer timeout to ensure FlatList is fully mounted
        const timer = setTimeout(() => {
          try {
            flatListRef.current?.scrollToIndex({
              index: selectedIndex,
              animated: true,
              viewPosition: 0.5, // Center the item
            });
          } catch (error) {
            // Silently handle error - normal on first render
            console.warn('scrollToIndex failed:', error);
          }
        }, 100);

        return () => clearTimeout(timer);
      }
    }
  }, [selectedKey, orientation, children]);

  // Animated scroll handler for synchronized scrolling with indicator
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      'worklet';
      animatedScrollOffset.value = event.contentOffset.x;
      // Also update context for backward compatibility with non-animated code
      // Use runOnJS to call JS function from worklet
      runOnJS(setScrollOffset)(event.contentOffset.x);
    },
  });

  // Use FlatList for horizontal tabs
  if (orientation === 'horizontal') {
    const childArray = React.Children.toArray(children);
    const triggers = childArray.filter(
      (child: any) => child?.type?.displayName !== 'TabsIndicator'
    );
    const indicator = childArray.find(
      (child: any) => child?.type?.displayName === 'TabsIndicator'
    );

    return (
      <View ref={containerRef} className={tabsListStyle({ orientation, class: className })}>
        <AnimatedFlatList
          ref={flatListRef}
          data={triggers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any, index) =>
            item?.props?.value || `tab-${index}`
          }
          renderItem={({ item }) => item as any}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          onScrollToIndexFailed={(info) => {
            // Wait for the list to settle and retry
            const wait = new Promise((resolve) => setTimeout(resolve, 500));
            wait.then(() => {
              try {
                flatListRef.current?.scrollToIndex({
                  index: info.index,
                  animated: false,
                  viewPosition: 0.5,
                });
              } catch (error) {
                // Silently handle retry failure
                console.warn('Retry scrollToIndex failed');
              }
            });
          }}
          {...props}
        />
        {indicator}
      </View>
    );
  }

  // Vertical orientation
  return (
    <UITabs.List
      ref={ref}
      {...props}
      className={tabsListStyle({ orientation, class: className })}
    >
      {children}
    </UITabs.List>
  );
});

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof UITabs.Trigger>,
  ITabsTriggerProps
>(({ className, ...props }, ref) => {
  const { variant, size } = useStyleContext(SCOPE);

  return (
    <UITabs.Trigger
      ref={ref}
      {...props}
      className={tabsTriggerStyle({
        parentVariants: { variant, size },
        class: className,
      })}
    />
  );
});

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof UITabs.Content>,
  ITabsContentProps
>(({ className, ...props }, ref) => {
  return (
    <UITabs.Content
      ref={ref}
      {...props}
      className={tabsContentStyle({ class: className })}
    />
  );
});

const TabsContentWrapper = React.forwardRef<
  React.ComponentRef<typeof UITabs.ContentWrapper>,
  ITabsContentWrapperProps
>(({ className, targetHeight, ...props }: any, ref) => {
  const context = React.useContext(TabsContext);

  // Get the height of the selected content from the layouts Map
  const selectedLayout = context?.selectedKey
    ? context.contentLayouts.get(context.selectedKey)
    : null;
  const height = selectedLayout?.height || 0;

  // Use shared value for Reanimated
  const heightValue = useSharedValue(height);

  // Update shared value when height changes
  React.useEffect(() => {

    if (height > 0) {
      heightValue.value = height;
    
    }
  }, [height, heightValue]);

 

  // Animated style for height transitions
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: withSpring(heightValue.value, {
        duration: 100,
      })
    };
  },[heightValue]);

  return (
    <UITabs.ContentWrapper
      ref={ref}
      style={animatedStyle}
      {...props}
      className={tabsContentWrapperStyle({ class: className })}
    />
  );
});

const TabsTriggerText = React.forwardRef<
  React.ComponentRef<typeof UITabs.TriggerText>,
  ITabsTriggerTextProps
>(({ className, ...props }, ref) => {
  const { size } = useStyleContext(SCOPE);

  return (
    <UITabs.TriggerText
      ref={ref}
      {...props}
      className={tabsTriggerTextStyle({
        parentVariants: { size },
        class: className,
      })}
    />
  );
});

const TabsTriggerIcon = React.forwardRef<
  React.ComponentRef<typeof UITabs.TriggerIcon>,
  ITabsTriggerIconProps
>(({ className, ...props }, ref) => {
  const { size } = useStyleContext(SCOPE);

  return (
    <UITabs.TriggerIcon
      ref={ref}
      {...props}
      className={tabsTriggerIconStyle({
        parentVariants: { size },
        class: className,
      })}
    />
  );
});

const TabsIndicator = React.forwardRef<
  React.ComponentRef<typeof UITabs.Indicator>,
  ITabsIndicatorProps
>(({ className, ...props }, ref) => {
  const context = React.useContext(TabsContext);

  const { variant } = useStyleContext(SCOPE);

  if (!context) {
    return null;
  }

  const { selectedKey, orientation, triggerLayouts, scrollOffset } = context;
  // @ts-ignore - Get animated scroll offset from context
  const animatedScrollOffset = context.animatedScrollOffset;

  return (
    <TabsAnimatedIndicator
      ref={ref}
      selectedKey={selectedKey}
      orientation={orientation}
      triggerLayouts={triggerLayouts}
      scrollOffset={scrollOffset}
      animatedScrollOffset={animatedScrollOffset}
      className={tabsIndicatorStyle({
        parentVariants: { variant },
        class: className,
      })}
      {...props}
    />
  );
});

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
TabsContentWrapper.displayName = 'TabsContentWrapper';
TabsTriggerText.displayName = 'TabsTriggerText';
TabsTriggerIcon.displayName = 'TabsTriggerIcon';
TabsIndicator.displayName = 'TabsIndicator';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContentWrapper,
  TabsTriggerText,
  TabsTriggerIcon,
  TabsIndicator,
};
