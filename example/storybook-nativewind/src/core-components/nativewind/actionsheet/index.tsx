import { H4 } from '@expo/html-elements';
import { createActionsheet } from '@gluestack-ui/actionsheet';
import {
  Pressable,
  View,
  Text,
  ScrollView,
  VirtualizedList,
  FlatList,
  SectionList,
  Platform,
} from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import { withStyleContext } from '@gluestack-ui/nativewind-utils/withStyleContext';
import { withStyleContextAndStates } from '@gluestack-ui/nativewind-utils/withStyleContextAndStates';
import { cssInterop } from '@gluestack-ui/nativewind-utils/cssInterop';
import {
  Motion,
  AnimatePresence,
  createMotionComponent,
} from '@legendapp/motion';
import React from 'react';

const AnimatedPressable = createMotionComponent(Pressable);
export const UIActionsheet = createActionsheet({
  Root: View,
  Content: withStyleContext(Motion.View),
  // @ts-ignore
  Item:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  ItemText: Text,
  DragIndicator: View,
  IndicatorWrapper: View,
  Backdrop: AnimatedPressable,
  ScrollView: ScrollView,
  VirtualizedList: VirtualizedList,
  FlatList: FlatList,
  SectionList: SectionList,
  SectionHeaderText: H4,
  Icon: View,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

cssInterop(UIActionsheet, { className: 'style' });
// @ts-ignore
cssInterop(UIActionsheet.Content, { className: 'style' });
cssInterop(UIActionsheet.Item, { className: 'style' });
cssInterop(UIActionsheet.ItemText, { className: 'style' });
cssInterop(UIActionsheet.DragIndicator, { className: 'style' });
cssInterop(UIActionsheet.DragIndicatorWrapper, { className: 'style' });
cssInterop(UIActionsheet.Backdrop, { className: 'style' });
cssInterop(UIActionsheet.ScrollView, { className: 'style' });
cssInterop(UIActionsheet.VirtualizedList, { className: 'style' });
cssInterop(UIActionsheet.FlatList, { className: 'style' });
cssInterop(UIActionsheet.SectionList, { className: 'style' });
cssInterop(UIActionsheet.SectionHeaderText, { className: 'style' });
cssInterop(UIActionsheet.Icon, { className: 'style' });

const actionsheetStyle = tva({ base: 'w-full h-full web:pointer-events-none' });

const actionsheetContentStyle = tva({
  base: 'items-center rounded-tl-3xl rounded-tr-3xl p-2 bg-background0 web:pointer-events-auto web:select-none shadow-lg',
});

const actionsheetItemStyle = tva({
  base: 'w-full flex-row items-center p-3 rounded-sm disabled:opacity-40 disabled:web:pointer-events-auto disabled:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 focus:bg-background-100 web:focus-visible:bg-background-100',
});

const actionsheetItemTextStyle = tva({
  base: 'text-typography-700 font-normal font-body tracking-md text-left mx-2',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '2xs': 'text-2xs',
      'xs': 'text-xs',
      'sm': 'text-sm',
      'md': 'text-md',
      'lg': 'text-lg',
      'xl': 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const actionsheetDragIndicatorStyle = tva({
  base: 'w-16 h-1 bg-background-400 rounded-full',
});

const actionsheetDragIndicatorWrapperStyle = tva({
  base: 'w-full py-1 items-center',
});

const actionsheetBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background950 web:cursor-default web:pointer-events-auto',
});

const actionsheetScrollViewStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetVirtualizedListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetFlatListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetSectionListStyle = tva({
  base: 'w-full h-auto',
});

const actionsheetSectionHeaderTextStyle = tva({
  base: 'leading-5 font-bold font-heading my-0 text-typography-500 p-3 uppercase',
  variants: {
    isTruncated: {
      true: '',
    },
    bold: {
      true: 'font-bold',
    },
    underline: {
      true: 'underline',
    },
    strikeThrough: {
      true: 'line-through',
    },
    size: {
      '5xl': 'text-5xl',
      '4xl': 'text-4xl',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      'xl': 'text-xl',
      'lg': 'text-lg',
      'md': 'text-md',
      'sm': 'text-sm',
      'xs': 'text-xs',
    },

    sub: {
      true: 'text-xs',
    },
    italic: {
      true: 'italic',
    },
    highlight: {
      true: 'bg-yellow500',
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});

const actionsheetIconStyle = tva({
  base: 'text-typography-900',
  variants: {
    size: {
      '2xs': 'h-3 w-3',
      'xs': 'h-3.5 w-3.5',
      'sm': 'h-4 w-4',
      'md': 'w-4 h-4',
      'lg': 'h-5 w-5',
      'xl': 'h-6 w-6',
    },
  },
});

const Actionsheet = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet
        className={actionsheetStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetContent = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.Content
        className={actionsheetContentStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetItem = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.Item
        className={actionsheetItemStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetItemText = React.forwardRef(
  (
    {
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      className,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <UIActionsheet.ItemText
        className={actionsheetItemTextStyle({
          class: className,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetDragIndicator = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.DragIndicator
        className={actionsheetDragIndicatorStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetDragIndicatorWrapper = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.DragIndicatorWrapper
        className={actionsheetDragIndicatorWrapperStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetBackdrop = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIActionsheet.Backdrop
        {...props}
        className={actionsheetBackdropStyle({
          class: className,
        })}
        ref={ref}
      />
    );
  }
);

const ActionsheetScrollView = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.ScrollView
        className={actionsheetScrollViewStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetVirtualizedList = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.VirtualizedList
        className={actionsheetVirtualizedListStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetFlatList = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.FlatList
        className={actionsheetFlatListStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetSectionList = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <UIActionsheet.SectionList
        className={actionsheetSectionListStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetSectionHeaderText = React.forwardRef(
  (
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      sub,
      italic,
      highlight,
      ...props
    }: any,
    ref: any
  ) => {
    return (
      <UIActionsheet.SectionHeaderText
        className={actionsheetSectionHeaderTextStyle({
          class: className,
          isTruncated,
          bold,
          underline,
          strikeThrough,
          size,
          sub,
          italic,
          highlight,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetIcon = React.forwardRef(
  ({ className, as: AsComp, size = 'sm', ...props }: any, ref: any) => {
    if (AsComp) {
      return (
        <AsComp
          className={actionsheetIconStyle({
            class: className,
            size,
          })}
          ref={ref}
          {...props}
        />
      );
    }
    return (
      <UIActionsheet.Icon
        className={actionsheetIconStyle({
          class: className,
          size,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

export {
  Actionsheet,
  ActionsheetContent,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetBackdrop,
  ActionsheetScrollView,
  ActionsheetVirtualizedList,
  ActionsheetFlatList,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetIcon,
};
