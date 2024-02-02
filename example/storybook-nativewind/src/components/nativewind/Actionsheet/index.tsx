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
import {
  tva,
  withStyleContext,
  withStyleContextAndStates,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';

export const AccessibleActionsheet = createActionsheet({
  Root: View,
  Content: withStyleContext(View),
  Item:
    Platform.OS === 'web'
      ? withStyleContext(Pressable)
      : withStyleContextAndStates(Pressable),
  ItemText: Text,
  DragIndicator: View,
  IndicatorWrapper: View,
  Backdrop: Pressable,
  ScrollView: ScrollView,
  VirtualizedList: VirtualizedList,
  FlatList: FlatList,
  SectionList: SectionList,
  SectionHeaderText: H4,
  Icon: View,
  //@ts-ignore
  AnimatePresence: null,
});

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
  base: 'w-16 h-1 bg-background400 rounded-full',
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
  base: 'bg-background-500',
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
  defaultVariants: {
    size: 'sm',
  },
});

const Actionsheet = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <AccessibleActionsheet
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
      <AccessibleActionsheet.Content
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
      <AccessibleActionsheet.Item
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
  ({ className, ...props }: any, ref: any) => {
    return (
      <AccessibleActionsheet.ItemText
        className={actionsheetItemTextStyle({
          class: className,
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
      <AccessibleActionsheet.DragIndicator
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
      <AccessibleActionsheet.DragIndicatorWrapper
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
      <AccessibleActionsheet.Backdrop
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
      <AccessibleActionsheet.ScrollView
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
      <AccessibleActionsheet.VirtualizedList
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
      <AccessibleActionsheet.FlatList
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
      <AccessibleActionsheet.SectionList
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
  ({ className, ...props }: any, ref: any) => {
    return (
      <AccessibleActionsheet.SectionHeaderText
        className={actionsheetSectionHeaderTextStyle({
          class: className,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);

const ActionsheetIcon = React.forwardRef(
  ({ className, ...props }: any, ref: any) => {
    return (
      <AccessibleActionsheet.Icon
        className={actionsheetIconStyle({
          class: className,
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
