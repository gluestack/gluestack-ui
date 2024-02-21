import { createAccordion } from '@gluestack-ui/accordion';
import React from 'react';
import { View, Pressable, Text, Platform } from 'react-native';
import {
  tva,
  withStyleContext,
  useStyleContext,
  withStates,
} from '@gluestack-ui/nativewind-utils';

import { H3 } from '@expo/html-elements';
import { cssInterop } from 'nativewind';

/** Styles */

const accordionStyle = tva({
  base: 'w-full shadow-sm',
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
      md: 'text-md',
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
      md: 'text-md',
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
  Root: withStyleContext(View),
  Item: View,
  // @ts-ignore
  Header: Platform.OS === 'web' ? H3 : View,
  Trigger: Platform.OS === 'web' ? Pressable : withStates(Pressable),
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

/** Components */

const Accordion = React.forwardRef(
  (
    { className, variant = 'filled', size = 'md', ...props }: any,
    ref?: any
  ) => {
    return (
      <UIAccordion
        ref={ref}
        {...props}
        className={accordionStyle({ variant, size, class: className })}
        context={{ variant, size }}
      />
    );
  }
);

const AccordionItem = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    const { variant, size } = useStyleContext();
    return (
      <UIAccordion.Item
        ref={ref}
        {...props}
        className={accordionItemStyle({
          parentVariants: { variant, size },
          class: className,
        })}
      />
    );
  }
);

const AccordionContent = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
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
  ({ className, ...props }: any, ref?: any) => {
    const { variant, size } = useStyleContext();
    return (
      <UIAccordion.ContentText
        ref={ref}
        {...props}
        className={accordionContentTextStyle({
          parentVariants: { variant, size },
          class: className,
        })}
      />
    );
  }
);

const AccordionIcon = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
    return (
      <UIAccordion.Icon
        ref={ref}
        {...props}
        className={accordionIconStyle({
          class: className,
        })}
      />
    );
  }
);
const AccordionHeader = React.forwardRef(
  ({ className, ...props }: any, ref?: any) => {
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
  ({ className, ...props }: any, ref?: any) => {
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
  ({ className, ...props }: any, ref?: any) => {
    const { variant, size } = useStyleContext();
    return (
      <UIAccordion.Header
        ref={ref}
        {...props}
        className={accordionTitleTextStyle({
          parentVariants: { variant, size },
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
