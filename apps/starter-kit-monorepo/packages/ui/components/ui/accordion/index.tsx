'use client';
import { H3 } from '@expo/html-elements';
import {
  createAccordion,
  AccordionItemContext,
} from '@gluestack-ui/core/accordion/creator';
import { PrimitiveIcon, UIIcon } from '@gluestack-ui/core/icon/creator';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { cssInterop } from 'nativewind';
import React from 'react';
import { Platform, Pressable, Text, TextProps, View } from 'react-native';
import { AnimatedHeight } from './AccordionAnimatedHeight';
import { AnimatedIcon } from './AccordionAnimatedIcon';
import { accordionAnimationConfig } from './animation-config';

/** Styles */

const accordionStyle = tva({
  base: 'w-full',
});

const accordionItemStyle = tva({
  base: '',
});

const accordionTitleTextStyle = tva({
  base: 'text-foreground font-medium flex-1 text-left text-sm',
});

const accordionIconStyle = tva({
  base: 'text-muted-foreground fill-none h-4 w-4',
});

const accordionContentTextStyle = tva({
  base: 'text-foreground text-sm font-normal',
});

const accordionHeaderStyle = tva({
  base: 'py-4 m-0',
});

const accordionContentStyle = tva({
  base: 'pb-4 pt-1',
});

const accordionTriggerStyle = tva({
  base: 'w-full flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background/10  gap-3',
});

const Header = (
  Platform.OS === 'web' ? H3 : View
) as React.ComponentType<TextProps>;

/** Creator */
const UIAccordion = createAccordion({
  Root: View,
  Item: View,
  Header: Header,
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

cssInterop(H3, {
  className: {
    target: 'style',
  },
});

type IAccordionProps = React.ComponentPropsWithoutRef<typeof UIAccordion>;

type IAccordionItemProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.Item
>;

type IAccordionContentProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.Content
>;

type IAccordionContentTextProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.ContentText
>;

type IAccordionIconProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.Icon
> & {
  as?: React.ElementType;
  height?: number;
  width?: number;
};

type IAccordionHeaderProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.Header
>;

type IAccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.Trigger
>;

type IAccordionTitleTextProps = React.ComponentPropsWithoutRef<
  typeof UIAccordion.TitleText
>;

/** Components */

const Accordion = React.forwardRef<
  React.ComponentRef<typeof UIAccordion>,
  IAccordionProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion
      ref={ref}
      {...props}
      className={accordionStyle({ class: className })}
    />
  );
});

const AccordionItem = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Item>,
  IAccordionItemProps
>(({ className, ...props }, ref) => {
  return (
    <UIAccordion.Item
      ref={ref}
      {...props}
      className={accordionItemStyle({ class: className })}
    />
  );
});

const AccordionContent = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Content>,
  IAccordionContentProps
>(function AccordionContent({ className, ...props }, ref) {
  const { isExpanded } = React.useContext(AccordionItemContext);

  return (
    <AnimatedHeight
      isExpanded={isExpanded}
      duration={accordionAnimationConfig.contentDuration}
    >
      <UIAccordion.Content
        ref={ref}
        {...props}
        className={accordionContentStyle({ class: className })}
      />
    </AnimatedHeight>
  );
});

const AccordionContentText = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.ContentText>,
  IAccordionContentTextProps
>(function AccordionContentText({ className, ...props }, ref) {
  return (
    <UIAccordion.ContentText
      ref={ref}
      {...props}
      className={accordionContentTextStyle({ class: className })}
    />
  );
});

const AccordionIcon = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Icon>,
  IAccordionIconProps
>(function AccordionIcon({ className, ...props }, ref) {
  const { isExpanded } = React.useContext(AccordionItemContext);

  return (
    <AnimatedIcon
      isExpanded={isExpanded}
      duration={accordionAnimationConfig.iconDuration}
      rotation={accordionAnimationConfig.iconRotation}
    >
      <UIAccordion.Icon
        ref={ref}
        {...props}
        className={accordionIconStyle({ class: className })}
      />
    </AnimatedIcon>
  );
});

const AccordionHeader = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Header>,
  IAccordionHeaderProps
>(function AccordionHeader({ className, ...props }, ref) {
  return (
    <UIAccordion.Header
      ref={ref}
      {...props}
      className={accordionHeaderStyle({ class: className })}
    />
  );
});

const AccordionTrigger = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.Trigger>,
  IAccordionTriggerProps
>(function AccordionTrigger({ className, ...props }, ref) {
  return (
    <UIAccordion.Trigger
      ref={ref}
      {...props}
      className={accordionTriggerStyle({ class: className })}
    />
  );
});

const AccordionTitleText = React.forwardRef<
  React.ComponentRef<typeof UIAccordion.TitleText>,
  IAccordionTitleTextProps
>(function AccordionTitleText({ className, ...props }, ref) {
  return (
    <UIAccordion.TitleText
      ref={ref}
      {...props}
      className={accordionTitleTextStyle({ class: className })}
    />
  );
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
  Accordion, AccordionContent, AccordionContentText, AccordionHeader, AccordionIcon, AccordionItem, AccordionTitleText, AccordionTrigger
};

