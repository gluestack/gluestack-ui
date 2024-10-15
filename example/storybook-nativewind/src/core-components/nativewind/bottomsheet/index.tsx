import {
  BottomSheetBackdrop as GorhomBottomSheetBackdrop,
  BottomSheetView as GorhomBottomSheetView,
  BottomSheetHandle,
  BottomSheetTextInput as GorhomBottomSheetInput,
  BottomSheetScrollView as GorhomBottomSheetScrollView,
  BottomSheetFlatList as GorhomBottomSheetFlatList,
  BottomSheetSectionList as GorhomBottomSheetSectionList,
  BottomSheetModal as GorhomBottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { FocusScope } from '@react-native-aria/focus';
import { cssInterop } from 'nativewind';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Platform } from 'react-native';
import { tva } from '@gluestack-ui/nativewind-utils/tva';
import type { TextProps } from 'react-native';
import { Pressable, Text } from 'react-native';
import { createPressable } from '@gluestack-ui/pressable';
import { VariantProps } from '@gluestack-ui/nativewind-utils';

const ItemPressable = createPressable({ Root: Pressable });
const BottomSheetContext = createContext<any>({});

const bottomSheetBackdropStyle = tva({
  base: 'absolute inset-0 flex-1 touch-none select-none bg-black opacity-0',
});

const bottomSheetContentStyle = tva({
  base: 'flex-1 items-center p-5 pt-2 bg-background-0 shadow-hard-5',
});

const bottomSheetIndicatorStyle = tva({
  base: 'w-16 h-1 bg-background-400 rounded-full',
});

const bottomSheetItemStyle = tva({
  base: 'w-full flex-row items-center p-3 rounded-sm data-[disabled=true]:opacity-40 data-[disabled=true]:web:pointer-events-auto data-[disabled=true]:web:cursor-not-allowed hover:bg-background-50 active:bg-background-100 data-[focus=true]:bg-background-100 web:data-[focus-visible=true]:bg-background-100 web:data-[focus-visible=true]:outline-indicator-primary gap-2',
});

const bottomSheetItemTextStyle = tva({
  base: 'text-typography-700 font-normal font-body',
  variants: {
    isTruncated: {
      true: 'web:truncate',
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
});

cssInterop(GorhomBottomSheetView, { className: 'style' });
cssInterop(GorhomBottomSheetBackdrop, { className: 'style' });
cssInterop(BottomSheetHandle, { className: 'style' });
cssInterop(GorhomBottomSheetInput, { className: 'style' });
cssInterop(GorhomBottomSheetScrollView, { className: 'style' });
cssInterop(GorhomBottomSheetFlatList, { className: 'style' });
cssInterop(GorhomBottomSheetSectionList, { className: 'style' });
cssInterop(GorhomBottomSheetModal, {
  className: 'style',
  dragIndicatorClassName: 'handleIndicatorStyle',
});

type IBottomSheetProps = React.ComponentProps<typeof GorhomBottomSheetModal> & {
  dragIndicatorClassName?: string;
  className?: string;
};

const BottomSheet = ({
  onOpen,
  onClose,
  isOpen,
  onChange,
  snapPoints,
  index = 0,
  handleComponent: DragIndicator,
  backdropComponent: BackDrop,
  ...props
}: Partial<IBottomSheetProps> & {
  onClose: () => void;
  isOpen: boolean;
  snapPoints?: string[];
  children?: React.ReactNode;
  onOpen?: () => void;
  onChange?: (isOpen: boolean) => void;
}) => {
  const bottomSheetRef = useRef<GorhomBottomSheetModal>(null);

  useEffect(() => {
    if (isOpen) {
      bottomSheetRef.current?.present();
      onOpen && onOpen();
    } else {
      bottomSheetRef.current?.close();
      onClose && onClose();
    }
  }, [isOpen, onOpen, onClose]);

  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <GorhomBottomSheetModal
      handleComponent={DragIndicator}
      backdropComponent={BackDrop}
      onDismiss={() => {
        onClose && onClose();
        props.onDismiss && props.onDismiss();
      }}
      onChange={onChange}
      snapPoints={snapPoints}
      index={index}
      {...props}
      ref={bottomSheetRef}
      // @ts-ignore
      className={props.className}
      dragIndicatorClassName={bottomSheetIndicatorStyle({
        className: props.dragIndicatorClassName,
      })}
    >
      <BottomSheetContext.Provider
        value={{
          handleClose,
          visible: isOpen,
        }}
      >
        {props.children}
      </BottomSheetContext.Provider>
    </GorhomBottomSheetModal>
  );
};

type IBottomSheetContent = React.ComponentProps<typeof GorhomBottomSheetView>;

const BottomSheetContent = ({ ...props }: IBottomSheetContent) => {
  const { handleClose, visible } = useContext(BottomSheetContext);
  const keyDownHandlers = useMemo(() => {
    return Platform.OS === 'web'
      ? {
          onKeyDown: (e: any) => {
            if (e.key === 'Escape') {
              e.preventDefault();
              handleClose();
              return;
            }
          },
        }
      : {};
  }, [handleClose]);

  if (Platform.OS === 'web')
    return (
      <GorhomBottomSheetView
        {...props}
        // @ts-ignore
        {...keyDownHandlers}
        className={bottomSheetContentStyle({
          className: props.className,
        })}
      >
        {visible && (
          <FocusScope contain={visible} autoFocus={true} restoreFocus={true}>
            {props.children}
          </FocusScope>
        )}
      </GorhomBottomSheetView>
    );

  return (
    <GorhomBottomSheetView
      {...props}
      // @ts-ignore
      {...keyDownHandlers}
      className={bottomSheetContentStyle({
        className: props.className,
      })}
    >
      {props.children}
    </GorhomBottomSheetView>
  );
};

type IBottomSheetBackdrop = Partial<
  React.ComponentProps<typeof GorhomBottomSheetBackdrop>
>;

const BottomSheetBackdrop = ({
  disappearsOnIndex = -1,
  appearsOnIndex = 1,
  className,
  ...props
}: IBottomSheetBackdrop & { className?: string }) => {
  return (
    <GorhomBottomSheetBackdrop
      // @ts-ignore
      className={bottomSheetBackdropStyle({
        className: className,
      })}
      disappearsOnIndex={disappearsOnIndex}
      appearsOnIndex={appearsOnIndex}
      {...props}
    />
  );
};

const BottomSheetDragIndicator = ({ children, ...props }: any) => {
  return (
    <BottomSheetHandle
      {...props}
      // @ts-ignore
      className="items-center py-1 w-full rounded-t-3xl"
    >
      {children}
    </BottomSheetHandle>
  );
};
type IBottomSheetItem = React.ComponentPropsWithRef<typeof ItemPressable> & {
  closeOnSelect?: boolean & VariantProps<typeof bottomSheetItemStyle>;
};

const BottomSheetItem = ({
  children,
  className,
  closeOnSelect = true,
  ...props
}: IBottomSheetItem) => {
  const { handleClose } = useContext(BottomSheetContext);
  return (
    <ItemPressable
      role="button"
      {...props}
      className={bottomSheetItemStyle({
        class: className,
      })}
      onPress={(e) => {
        if (closeOnSelect) {
          handleClose();
        }
        props.onPress && props.onPress(e);
      }}
    >
      {children}
    </ItemPressable>
  );
};

type IBottomSheetItemText = TextProps & {
  closeOnSelect?: boolean;
} & VariantProps<typeof bottomSheetItemTextStyle>;

const BottomSheetItemText = ({
  isTruncated,
  bold,
  underline,
  strikeThrough,
  size = 'sm',
  className,
  ...props
}: IBottomSheetItemText) => {
  return (
    <Text
      {...props}
      className={bottomSheetItemTextStyle({
        isTruncated,
        bold,
        underline,
        strikeThrough,
        size,
        class: className,
      })}
    />
  );
};

export const BottomSheetScrollView = GorhomBottomSheetScrollView;
export const BottomSheetFlatList = GorhomBottomSheetFlatList;
export const BottomSheetSectionList = GorhomBottomSheetSectionList;
export const BottomSheetTextInput = GorhomBottomSheetInput;

export {
  BottomSheetModalProvider,
  BottomSheet,
  BottomSheetContent,
  BottomSheetBackdrop,
  BottomSheetHandle,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
};
