import {
  AnimatePresence,
  AnimatedView,
  AnimatedPressable,
} from '@gluestack-style/animation-resolver';
import { createAlertDialog } from '@gluestack-ui/alert-dialog';
import { View, Pressable, ScrollView } from 'react-native';
import {
  tva,
  withStyleContextAndStates,
  useStyleContext,
  withStates,
} from '@gluestack-ui/nativewind-utils';
import React from 'react';
import { Platform } from 'react-native';

const UIAccessibleAlertDialog = createAlertDialog({
  Root: withStyleContextAndStates(View),
  Content: AnimatedView,
  CloseButton: Platform.OS === 'web' ? Pressable : withStates(Pressable),
  Header: View,
  Footer: View,
  Body: ScrollView,
  Backdrop: AnimatedPressable,
  //@ts-ignore
  AnimatePresence: AnimatePresence,
});

const alertDialogStyle = tva({
  base: 'w-full h-full justify-center items-center web:pointer-events-none',
});

// const StyledRoot = styled(
//   View,
//   {
//     w: '$full',
//     h: '$full',
//     justifyContent: 'center',
//     alignItems: 'center',

//     variants: {
//       size: {
//         xs: { _content: { w: '60%', maxWidth: 360 } },
//         sm: { _content: { w: '70%', maxWidth: 420 } },
//         md: { _content: { w: '80%', maxWidth: 510 } },
//         lg: { _content: { w: '90%', maxWidth: 640 } },
//         full: { _content: { w: '$full' } },
//       },
//     },
//     defaultProps: { size: 'md' },

//     _web: {
//       pointerEvents: 'box-none',
//     },
//   },
//   {
//     descendantStyle: ['_content'],
//   }
// );

const alertDialogContentStyle = tva({
  base: 'bg-background-50 rounded-lg overflow-hidden shadow',
  parentVariants: {
    size: {
      xs: 'w-[60%] max-w-[360px]',
      sm: 'w-[70%] max-w-[420px]',
      md: 'w-[80%] max-w-[510px]',
      lg: 'w-[90%] max-w-[640px]',
      full: 'w-full',
    },
  },
});

// const StyledContent = styled(
//   AnimatedView,
//   {
//     'bg': '$background50',
//     'rounded': '$lg',
//     'overflow': 'hidden',

//     //@ts-ignore
//     ':initial': {
//       scale: 0.9,
//       opacity: 0,
//     },

//     ':animate': {
//       scale: 1,
//       opacity: 1,
//     },

//     ':exit': {
//       scale: 0.9,
//       opacity: 0,
//     },

//     ':transition': {
//       type: 'spring',
//       damping: 18,
//       stiffness: 250,
//       opacity: {
//         type: 'timing',
//         duration: 250,
//       },
//     },

//     'defaultProps': {
//       softShadow: '3',
//     },
//   },
//   {
//     ancestorStyle: ['_content'],
//   }
// );

const alertDialogCloseButtonStyle = tva({
  base: 'z-10 rounded p-2 data-[focus-visible=true]:bg-background-100 web:cursor-pointer outline-0',

  //   '_icon': {
  //     color: '$background400',
  //   },

  //   '_text': {
  //     color: '$background400',
  //   },

  //   ':hover': {
  //     _icon: {
  //       color: '$background700',
  //     },
  //     _text: {
  //       color: '$background700',
  //     },
  //   },

  //   ':active': {
  //     _icon: {
  //       color: '$background900',
  //     },
  //     _text: {
  //       color: '$background900',
  //     },
  //   },

  //   ':focusVisible': {

  //     _icon: {
  //       color: '$background900',
  //     },

  //     _text: {
  //       color: '$background900',
  //     },
  //   },
  // },
  // {
  //   descendantStyle: ['_icon', '_text'],
});

// const StyledCloseButton = styled(
//   Pressable,
//   {
//     'zIndex': 1,
//     'rounded': '$sm',
//     'p': '$2',

//     '_icon': {
//       color: '$background400',
//     },

//     '_text': {
//       color: '$background400',
//     },

//     ':hover': {
//       _icon: {
//         color: '$background700',
//       },
//       _text: {
//         color: '$background700',
//       },
//     },

//     ':active': {
//       _icon: {
//         color: '$background900',
//       },
//       _text: {
//         color: '$background900',
//       },
//     },

//     ':focusVisible': {
//       bg: '$background100',

//       _icon: {
//         color: '$background900',
//       },

//       _text: {
//         color: '$background900',
//       },
//     },

//     '_web': {
//       outlineWidth: 0,
//       cursor: 'pointer',
//     },
//   },
//   {
//     descendantStyle: ['_icon', '_text'],
//   }
// );

const alertDialogHeaderStyle = tva({
  base: 'p-4 border-border-300 justify-between items-center flex-row pb-0',
});

// const StyledHeader = styled(
//   View,
//   {
//     p: '$4',
//     borderColor: '$border300',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   {}
// );

const alertDialogFooterStyle = tva({
  base: 'p-4 flex-row justify-end items-center flex-wrap border-border-300',
});

// const StyledFooter = styled(
//   View,
//   {
//     p: '$4',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     flexWrap: 'wrap',
//     borderColor: '$border300',
//   },
//   {}
// );

const alertDialogBodyStyle = tva({ base: 'px-4 py-2' });

// const StyledBody = styled(ScrollView, { px: '$4', py: '$2' }, {});

const alertDialogBackdropStyle = tva({
  base: 'absolute left-0 top-0 right-0 bottom-0 bg-background-950 web:cursor-default',
});

// const StyledBackdrop = styled(
//   AnimatedPressable,
//   {
//     ':initial': {
//       opacity: 0,
//     },

//     ':animate': {
//       opacity: 0.5,
//     },

//     ':exit': {
//       opacity: 0,
//     },

//     ':transition': {
//       type: 'spring',
//       damping: 18,
//       stiffness: 250,
//       opacity: {
//         type: 'timing',
//         duration: 250,
//       },
//     },

//     'position': 'absolute',
//     'left': 0,
//     'top': 0,
//     'right': 0,
//     'bottom': 0,
//     'bg': '$background950',

//     // @ts-ignore
//     '_web': {
//       cursor: 'default',
//     },
//   },
//   {}
// );

export const AlertDialog = React.forwardRef(
  ({ className, size = 'md', ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog
        ref={ref}
        {...props}
        className={alertDialogStyle({ class: className })}
        context={{ size }}
      />
    );
  }
);

export const AlertDialogContent = React.forwardRef(
  ({ className, size, ...props }: any, ref) => {
    const { size: parentSize } = useStyleContext();

    return (
      <UIAccessibleAlertDialog.Content
        ref={ref}
        {...props}
        className={alertDialogContentStyle({
          parentVariants: {
            size: parentSize,
          },
          size,
          class: className,
        })}
      />
    );
  }
);

export const AlertDialogCloseButton = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog.CloseButton
        ref={ref}
        {...props}
        className={alertDialogCloseButtonStyle({
          class: className,
        })}
      />
    );
  }
);

export const AlertDialogHeader = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog.Header
        ref={ref}
        {...props}
        className={alertDialogHeaderStyle({
          class: className,
        })}
      />
    );
  }
);

export const AlertDialogFooter = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog.Footer
        ref={ref}
        {...props}
        className={alertDialogFooterStyle({
          class: className,
        })}
      />
    );
  }
);

export const AlertDialogBody = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog.Body
        ref={ref}
        {...props}
        className={alertDialogBodyStyle({
          class: className,
        })}
      />
    );
  }
);

export const AlertDialogBackdrop = React.forwardRef(
  ({ className, ...props }: any, ref) => {
    return (
      <UIAccessibleAlertDialog.Backdrop
        ref={ref}
        {...props}
        className={alertDialogBackdropStyle({
          class: className,
        })}
      />
    );
  }
);

// AlertDialog.displayName = 'AlertDialog';
// AlertDialogContent.displayName = 'AlertDialogContent';
// AlertDialogCloseButton.displayName = 'AlertDialogCloseButton';
// AlertDialogHeader.displayName = 'AlertDialogHeader';
// AlertDialogFooter.displayName = 'AlertDialogFooter';
// AlertDialogBody.displayName = 'AlertDialogBody';
// AlertDialogBackdrop.displayName = 'AlertDialogBackdrop';

// export {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogCloseButton,
//   AlertDialogHeader,
//   AlertDialogFooter,
//   AlertDialogBody,
//   AlertDialogBackdrop,
// };
