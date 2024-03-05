import React from 'react';
import { createAccordion } from '@gluestack-ui/accordion';
import { View, Pressable, Text, Platform } from 'react-native';
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
  useStyleContext,
  VariantProps,
} from '@gluestack-ui/nativewind-utils';

import { H3 } from '@expo/html-elements';
import { cssInterop } from 'nativewind';

/** Styles */

const accordionStyle = tva({
  base: 'w-full',
  variants: {
    variant: {
      filled: 'bg-white',
    },
  },
});
const accordionItemStyle = tva({
  parentVariants: {
    variant: {
      filled: 'bg-background-0',
      unfilled: 'bg-transparent',
    },
  },
});
const accordionTitleTextStyle = tva({
  base: 'text-typography-900 font-bold flex-1 text-left',
  parentVariants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});
const accordionIconStyle = tva({
  base: 'text-typography-900',
});
const accordionContentTextStyle = tva({
  base: 'text-typography-700 font-normal',
  parentVariants: {
    size: {
      sm: 'text-sm ',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
});
const accordionHeaderStyle = tva({
  base: 'mx-0 my-0',
});
const accordionContentStyle = tva({
  base: 'px-5 mt-2 pb-5',
});
const accordionTriggerStyle = tva({
  base: 'w-full py-5 px-5 flex-row justify-between items-center web:outline-none focus:outline-none data-[disabled=true]:opacity-40 data-[disabled=true]:cursor-not-allowed data-[focus-visible=true]:bg-background-50',
});

/** Creator */
const UIAccordion = createAccordion({
  //@ts-ignore
  Root:
    Platform.OS === 'web'
      ? withStyleContext(View)
      : withStyleContextAndStates(View),
  Item: View,
  // @ts-ignore
  Header: Platform.OS === 'web' ? H3 : View,
  //@ts-ignore
  Trigger: Pressable,
  Icon: View,
  TitleText: Text,
  ContentText: Text,
  Content: View,
});

cssInterop(UIAccordion, { className: 'style' });
cssInterop(UIAccordion.Item, { className: 'style' });
cssInterop(UIAccordion.Header, { className: 'style' });
cssInterop(UIAccordion.Trigger, { className: 'style' });
cssInterop(UIAccordion.Icon, { className: 'style' });
cssInterop(UIAccordion.TitleText, { className: 'style' });
cssInterop(UIAccordion.Content, { className: 'style' });
cssInterop(UIAccordion.ContentText, { className: 'style' });

type IAccordionProps = React.ComponentProps<typeof UIAccordion> &
  VariantProps<typeof accordionStyle>;

type IAccordionItemProps = React.ComponentProps<typeof UIAccordion.Item> &
  VariantProps<typeof accordionItemStyle>;

type IAccordionContentProps = React.ComponentProps<typeof UIAccordion.Content> &
  VariantProps<typeof accordionContentStyle>;

type IAccordionContentTextProps = React.ComponentProps<
  typeof UIAccordion.ContentText
> &
  VariantProps<typeof accordionContentTextStyle>;

type IAccordionIconProps = React.ComponentProps<typeof UIAccordion.Icon> & {
  as?: any;
};

type IAccordionHeaderProps = React.ComponentProps<typeof UIAccordion.Header> &
  VariantProps<typeof accordionHeaderStyle>;

type IAccordionTriggerProps = React.ComponentProps<typeof UIAccordion.Trigger> &
  VariantProps<typeof accordionTriggerStyle>;

type IAccordionTitleTextProps = React.ComponentProps<
  typeof UIAccordion.TitleText
> &
  VariantProps<typeof accordionTitleTextStyle>;

/** Components */

const Accordion = React.forwardRef(
  (
    {
      className,
      variant = 'filled',
      //@ts-ignore
      size = 'md',
      ...props
    }: { className?: string } & IAccordionProps,
    ref?: any
  ) => {
    return (
      <UIAccordion
        ref={ref}
        {...props}
        className={accordionStyle({ variant, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

const AccordionItem = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionItemProps,
    ref?: any
  ) => {
    const { variant } = useStyleContext();
    return (
      <UIAccordion.Item
        ref={ref}
        {...props}
        className={accordionItemStyle({
          parentVariants: { variant },
          class: className,
        })}
      />
    );
  }
);

const AccordionContent = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionContentProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Content
        ref={ref}
        {...props}
        className={accordionContentStyle({
          class: className,
        })}
      />
    );
  }
);

const AccordionContentText = React.forwardRef(
  (
    {
      className,
      ...props
    }: { className?: string } & IAccordionContentTextProps,
    ref?: any
  ) => {
    const { size } = useStyleContext();
    return (
      <UIAccordion.ContentText
        ref={ref}
        {...props}
        className={accordionContentTextStyle({
          parentVariants: { size },
          class: className,
        })}
      />
    );
  }
);

const AccordionIcon = ({
  className,
  as: AsComp,
  ...props
}: IAccordionIconProps & { className?: any }) => {
  if (AsComp) {
    return (
      <AsComp
        className={accordionIconStyle({
          class: className,
        })}
        {...props}
      />
    );
  }
  return (
    <UIAccordion.Icon
      className={accordionIconStyle({
        class: className,
      })}
      {...props}
    />
  );
};
const AccordionHeader = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionHeaderProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Header
        ref={ref}
        {...props}
        className={accordionHeaderStyle({
          class: className,
        })}
      />
    );
  }
);
const AccordionTrigger = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionTriggerProps,
    ref?: any
  ) => {
    return (
      <UIAccordion.Trigger
        ref={ref}
        {...props}
        className={accordionTriggerStyle({
          class: className,
        })}
      />
    );
  }
);
const AccordionTitleText = React.forwardRef(
  (
    { className, ...props }: { className?: string } & IAccordionTitleTextProps,
    ref?: any
  ) => {
    const { size } = useStyleContext();
    return (
      <UIAccordion.TitleText
        ref={ref}
        {...props}
        className={accordionTitleTextStyle({
          parentVariants: { size },
          class: className,
        })}
      />
    );
  }
);

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
