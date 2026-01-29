'use client';
import React from 'react';
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
import Animated from 'react-native-reanimated';
import { TabsAnimatedIndicator } from './TabsAnimatedIndicator';

const SCOPE = 'TABS';

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
      filled:
        'rounded-lg  ',
      enclosed:
        'border border-transparent data-[selected=true]:border-border rounded-t',
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

const tabsIndicatorStyle = tva({
  base: ' bg-blue-500 pointer-events-none overflow-hidden',
  variants: {
    orientation: {
      horizontal: 'bottom-0 h-0.5',
      vertical: 'left-0 w-0.5',
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
    variant?: 'underlined' | 'filled' | 'enclosed';
    size?: 'sm' | 'md' | 'lg';
  };

type ITabsListProps = React.ComponentPropsWithoutRef<typeof UITabs.List> & {
  scrollable?: boolean;
};

type ITabsTriggerProps = React.ComponentPropsWithoutRef<typeof UITabs.Trigger>;

type ITabsContentProps = React.ComponentPropsWithoutRef<typeof UITabs.Content>;

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
>(({ className, scrollable = false, children, ...props }, ref) => {
  const context = React.useContext(TabsContext);
  const orientation = context?.orientation || 'horizontal';

  // For scrollable tabs, use FlatList for better performance
  if (scrollable && orientation === 'horizontal') {
    // Convert children to array for FlatList
    const childArray = React.Children.toArray(children);

    // Separate triggers from indicator
    const triggers = childArray.filter(
      (child: any) => child?.type?.displayName !== 'TabsIndicator'
    );
    const indicator = childArray.find(
      (child: any) => child?.type?.displayName === 'TabsIndicator'
    );

    return (
      <View className={tabsListStyle({ orientation, class: className })}>
        <FlatList
          ref={ref}
          data={triggers}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any, index) =>
            item?.props?.value || `tab-${index}`
          }
          renderItem={({ item }) => item}
          contentContainerStyle={{ alignItems: 'center' }}
          {...props}
        />
        {indicator}
      </View>
    );
  }

  // Default non-scrollable or vertical tabs
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

  if (!context) {
    return null;
  }

  const { selectedKey, orientation, triggerLayouts } = context;

  return (
    <TabsAnimatedIndicator
      ref={ref}
      selectedKey={selectedKey}
      orientation={orientation}
      triggerLayouts={triggerLayouts}
      className={tabsIndicatorStyle({ orientation, class: className })}
      {...props}
    />
  );
});

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
TabsTriggerText.displayName = 'TabsTriggerText';
TabsTriggerIcon.displayName = 'TabsTriggerIcon';
TabsIndicator.displayName = 'TabsIndicator';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsTriggerText,
  TabsTriggerIcon,
  TabsIndicator,
};
