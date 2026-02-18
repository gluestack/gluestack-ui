'use client';
import React, { useEffect, useRef, useCallback, useMemo } from 'react';
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

  if (!context) return null;

  const { orientation, setScrollOffset, selectedKey, listRef } = context;

  // Shared value for indicator sync
  const animatedScrollOffset = useSharedValue(0);

  /**
   * Expose shared value to context
   */
  useEffect(() => {
    if (context) {
      // @ts-ignore
      context.animatedScrollOffset = animatedScrollOffset;
    }
  }, [context, animatedScrollOffset]);

  /**
   * Auto scroll to selected tab
   */
  useEffect(() => {
    if (orientation !== 'horizontal' || !selectedKey) return;

    const childArray = React.Children.toArray(children);
    const triggers = childArray.filter(
      (child: any) => child?.type?.displayName !== 'TabsIndicator'
    );

    const selectedIndex = triggers.findIndex(
      (child: any) => child?.props?.value === selectedKey
    );

    if (selectedIndex >= 0 && flatListRef.current) {
      const timer = setTimeout(() => {
        try {
          flatListRef.current.scrollToIndex({
            index: selectedIndex,
            animated: true,
            viewPosition: 0.5,
          });
        } catch {}
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedKey, orientation, children]);

  /**
   * Native animated scroll handler (ONLY for iOS / Android)
   */
  const nativeScrollHandler =
    Platform.OS === 'web'
      ? undefined
      : useAnimatedScrollHandler({
          onScroll: (event) => {
            'worklet';
            const x = event.contentOffset.x;
            animatedScrollOffset.value = x;
            runOnJS(setScrollOffset)(x);
          },
        });

  /**
   * Web scroll handler (JS thread)
   */
  const handleWebScroll = (e: any) => {
    const x = e.nativeEvent.contentOffset.x;
    animatedScrollOffset.value = x;
    setScrollOffset(x);
  };

  /**
   * Horizontal tabs → FlatList
   */
  // Memoize the split so FlatList's `data` prop stays referentially stable
  // across scroll-driven re-renders (scrollOffset in context ticks on every
  // scroll event; without this, FlatList re-renders every cell every frame,
  // firing onLayout → measureTrigger on every scroll tick).
  const { triggers, indicator } = useMemo(() => {
    const childArray = React.Children.toArray(children);
    return {
      triggers: childArray.filter(
        (child: any) => child?.type?.displayName !== 'TabsIndicator'
      ),
      indicator: childArray.find(
        (child: any) => child?.type?.displayName === 'TabsIndicator'
      ),
    };
  }, [children]);

  if (orientation === 'horizontal') {
    return (
      <View
        ref={listRef}
        className={tabsListStyle({ orientation, class: className })}
      >
        {indicator}

        <AnimatedFlatList
          ref={flatListRef}
          horizontal
          data={triggers}
          renderItem={({ item }) => item as any}
          keyExtractor={(item: any, index) =>
            item?.props?.value ?? `tab-${index}`
          }
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          style={{ zIndex: 100 }}
          onScroll={
            Platform.OS === 'web' ? handleWebScroll : nativeScrollHandler
          }
          onScrollToIndexFailed={(info) => {
            setTimeout(() => {
              try {
                flatListRef.current?.scrollToIndex({
                  index: info.index,
                  animated: false,
                  viewPosition: 0.5,
                });
              } catch {}
            }, 500);
          }}
          {...props}
        />
      </View>
    );
  }

  /**
   * Vertical tabs → default List
   */
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
  // Remove `dataSet` ONLY on web to avoid React DOM warning
  const safeProps =
    Platform.OS === 'web'
      ? (() => {
          const { dataSet, ...rest } = props as any;
          return rest;
        })()
      : props;

  return (
    <UITabs.TriggerIcon
      ref={ref}
      {...safeProps}
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
TabsIndicator.displayName = 'TabsIndicator'

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
