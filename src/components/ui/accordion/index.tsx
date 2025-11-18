'use client';
import React from 'react';
import { createAccordion } from '@gluestack-ui/core/accordion/creator';
import { View, Pressable, Text } from 'react-native';
import { cssInterop } from 'nativewind';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';

/** Creator */
const UIAccordion = createAccordion({
  Root: View,
  Item: View,
  Header: View,
  Trigger: Pressable,
  Icon: UIIcon,
  TitleText: Text,
  ContentText: Text,
  Content: View,
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

/** Components */

const Accordion = React.forwardRef<
  React.ComponentRef<typeof UIAccordion>,
  React.ComponentPropsWithoutRef<typeof UIAccordion>
>(({ ...props }, ref) => {
  return <UIAccordion ref={ref} {...props} />;
});

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Item>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.Item>
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion.Item
      ref={ref}
      className={`border-b last:border-b-0 ${className || ''}`}
      {...props}
    />
  );
});

const AccordionHeader = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Header>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.Header>
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion.Header
      ref={ref}
      className={`flex ${className || ''}`}
      {...props}
    />
  );
});

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Trigger>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.Trigger>
>(({ className, children, ...props }, ref) => {
  return (
    <UIAccordion.Trigger
      ref={ref}
      className={`flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none data-[hover=true]:underline focus-visible:ring-[3px] data-[focus-visible=true]:border-ring data-[focus-visible=true]:ring-ring/50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 ${className || ''}`}
      {...props}
    >
      {children}
    </UIAccordion.Trigger>
  );
});

const AccordionIcon = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Icon>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.Icon> & {
    as?: React.ElementType;
  }
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion.Icon
      ref={ref}
      className={`text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200 data-[state=open]:rotate-180 ${className || ''}`}
      {...props}
    />
  );
});

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Content>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <UIAccordion.Content
      ref={ref}
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <View className={`pt-0 pb-4 ${className || ''}`}>{children}</View>
    </UIAccordion.Content>
  );
});

const AccordionTitleText = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.TitleText>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.TitleText>
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion.TitleText
      ref={ref}
      className={`flex-1 ${className || ''}`}
      {...props}
    />
  );
});

const AccordionContentText = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.ContentText>,
  React.ComponentPropsWithoutRef<typeof UIAccordion.ContentText>
>(({ className, ...props }, ref) => {
  return <UIAccordion.ContentText ref={ref} className={className} {...props} />;
});

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionHeader.displayName = 'AccordionHeader';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionTitleText.displayName = 'AccordionTitleText';
AccordionContentText.displayName = 'AccordionContentText';
AccordionIcon.displayName = 'AccordionIcon';
AccordionContent.displayName = 'AccordionContent';

export {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionTitleText,
  AccordionContentText,
  AccordionIcon,
  AccordionContent,
};
