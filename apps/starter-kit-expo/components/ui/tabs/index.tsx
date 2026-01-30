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
import { Pressable, Text, View, FlatList, Platform } from 'react-native';
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
Platform.OS === 'web' ? cssInterop(AnimatedView,{className:{target:'style'}}) : AnimatedView
/** Styles */

const tabsStyle = tva({
  base: 'w-full gap-1',
});

const tabsListStyle = tva({
  base: 'flex relative z-10 bg-muted p-1 rounded-lg',
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
});

const tabsTriggerStyle = tva({
  base: 'justify-center relative z-30 items-center web:outline-none data-[disabled=true]:opacity-40 data-[focus-visible=true]:web:ring-2 data-[focus-visible=true]:web:ring-primary/20  px-3 py-1.5',
  parentVariants: {
    variant: {
      underlined: '',
      filled: 'rounded-lg',
    },
  },
});

const tabsTriggerTextStyle = tva({
  base: 'text-foreground/70 data-[selected=true]:text-foreground font-medium data-[hover=true]:text-foreground/90 ',
 
});

const tabsTriggerIconStyle = tva({
  base: 'text-foreground/70 data-[selected=true]:text-foreground fill-none',

});

const tabsContentStyle = tva({
  base: 'p-2 h-auto',
});

const tabsContentWrapperStyle = tva({
  base: 'overflow-hidden rounded-lg',
});

const tabsIndicatorStyle = tva({
  base: 'pointer-events-none  rounded-lg',
  parentVariants: {
    variant: {
      underlined: 'border-b-2 border-primary',
      filled: 'bg-background z-20',
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
  ({ className, variant = 'underlined', ...props }, ref) => {
    return (
      <UITabs
        ref={ref}
        {...props}
        className={tabsStyle({ class: className })}
        // @ts-ignore - pass variants to context
        context={{ variant}}
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
        {indicator}
        <AnimatedFlatList
          ref={flatListRef}
          style={{zIndex:100}}
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
  const { variant } = useStyleContext(SCOPE);

  return (
    <UITabs.Trigger
      ref={ref}
      {...props}
      className={tabsTriggerStyle({
        parentVariants: { variant  },
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

  // Use shared value for Reanimated with initial height
  const heightValue = useSharedValue(height);
  const isFirstRender = React.useRef(true);

  // Update shared value when height changes
  React.useEffect(() => {
    if (height > 0) {
      if (isFirstRender.current) {
        // Set initial height without animation
        heightValue.value = height;
        isFirstRender.current = false;
      } else {
        // Animate height changes
        heightValue.value = withSpring(height,{duration:100});
      }
    }
  }, [height, heightValue]);

  // Animated style for height transitions
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: heightValue.value > 0 ? heightValue.value : 'auto',
    };
  }, []);

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
  

  return (
    <UITabs.TriggerText
      ref={ref}
      {...props}
      className={tabsTriggerTextStyle({
       
        class: className,
      })}
    />
  );
});

const TabsTriggerIcon = React.forwardRef<
  React.ComponentRef<typeof UITabs.TriggerIcon>,
  ITabsTriggerIconProps
>(({ className, ...props }, ref) => {
 

  return (
    <UITabs.TriggerIcon
      ref={ref}
      {...props}
      className={tabsTriggerIconStyle({
      
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
