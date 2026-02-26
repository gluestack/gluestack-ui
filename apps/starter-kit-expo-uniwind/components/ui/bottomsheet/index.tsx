"use client";
import { FocusScope } from '@gluestack-ui/utils/aria';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import GorhomBottomSheet, {
  BottomSheetBackdrop as GorhomBottomSheetBackdrop,
  BottomSheetFlatList as GorhomBottomSheetFlatList,
  BottomSheetFooter as GorhomBottomSheetFooter,
  BottomSheetHandle as GorhomBottomSheetHandle,
  BottomSheetTextInput as GorhomBottomSheetInput,
  BottomSheetScrollView as GorhomBottomSheetScrollView,
  BottomSheetSectionList as GorhomBottomSheetSectionList,
  BottomSheetView as GorhomBottomSheetView,
  type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { styled } from 'nativewind';
import React, {
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { PressableProps, TextInputProps, TextProps } from 'react-native';
import { Keyboard, Platform, Pressable, Text, View } from 'react-native';

const bottomSheetBackdropStyle = tva({
  base: 'absolute inset-0 bg-black/50',
});

const bottomSheetContentStyle = tva({
  base: 'px-4 gap-2',
});

const bottomSheetTriggerStyle = tva({
  base: 'p-4 rounded-lg border border-border/90',
});

const bottomSheetHandleStyle = tva({
  base: 'py-3 w-full items-center rounded-t-xl',
});

const bottomSheetItemStyle = tva({
  base: 'p-3 flex-row items-center rounded-sm w-full disabled:opacity-40 web:pointer-events-auto disabled:cursor-not-allowed hover:bg-background/90 active:bg-background/80 focus:bg-background/90 web:focus-visible:bg-background/90',
});
const bottomSheetItemTextStyle = tva({
  base: 'text-foreground font-normal text-sm',
});

const bottomSheetFooterStyle = tva({
  base: 'p-4 border-t border-border/90',
});

const bottomSheetTextInputStyle = tva({
  base: 'flex-1 text-foreground text-sm md:text-sm py-1 placeholder:text-muted-foreground  web:outline-none ios:leading-[0px] web:cursor-text  h-9 w-full flex-row items-center rounded-md border border-border  dark:bg-input/30 bg-transparent shadow-xs transition-[color,box-shadow] overflow-hidden px-3 gap-2',
});

type BottomSheetContextValue = {
  visible: boolean;
  bottomSheetRef: React.RefObject<GorhomBottomSheet>;
  handleClose: () => void;
  handleNaturalClose: () => void;
  handleOpen: (index?: number) => void;
  snapToIndex: (index: number) => void;
  currentIndex: number;
};

const BottomSheetContext = createContext<BottomSheetContextValue>({
  visible: false,
  bottomSheetRef: { current: null! },
  handleClose: () => { },
  handleNaturalClose: () => { },
  handleOpen: () => { },
  snapToIndex: () => { },
  currentIndex: -1,
});

export type BottomSheetRef = {
  open: (index?: number) => void;
  close: () => void;
  snapToIndex: (index: number) => void;
  expand: () => void;
  collapse: () => void;
};

type IBottomSheetRootProps = {
  defaultSnapIndex?: number;
  children?: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
  onChange?: (index: number) => void;
};

export const BottomSheet = forwardRef<BottomSheetRef, IBottomSheetRootProps>(
  ({ defaultSnapIndex = 0, onOpen, onClose, onChange, children }, ref) => {
    const bottomSheetRef = useRef<GorhomBottomSheet>(null);
    const [visible, setVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleOpen = useCallback(
      (index?: number) => {
        const targetIndex = index ?? defaultSnapIndex;
        bottomSheetRef.current?.snapToIndex(targetIndex);
        setVisible(true);
        setCurrentIndex(targetIndex);
        onOpen?.();
      },
      [defaultSnapIndex, onOpen]
    );

    // Triggers the close animation only — state updates happen via onChange chain
    const handleClose = useCallback(() => {
      Keyboard.dismiss();
      bottomSheetRef.current?.close();
    }, []);

    // Updates React state after sheet has naturally closed (index reached -1)
    const handleNaturalClose = useCallback(() => {
      Keyboard.dismiss();
      setVisible(false);
      setCurrentIndex(-1);
      onClose?.();
    }, [onClose]);

    const snapToIndex = useCallback((index: number) => {
      bottomSheetRef.current?.snapToIndex(index);
      setCurrentIndex(index);
    }, []);

    const expand = useCallback(() => {
      bottomSheetRef.current?.expand();
    }, []);

    const collapse = useCallback(() => {
      bottomSheetRef.current?.collapse();
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        open: handleOpen,
        close: handleClose,
        snapToIndex,
        expand,
        collapse,
      }),
      [handleOpen, handleClose, snapToIndex, expand, collapse]
    );

    const contextValue = useMemo(
      () => ({
        visible,
        bottomSheetRef,
        handleClose,
        handleNaturalClose,
        handleOpen,
        snapToIndex,
        currentIndex,
      }),
      [visible, handleClose, handleNaturalClose, handleOpen, snapToIndex, currentIndex]
    );

    return (
      <BottomSheetContext.Provider value={contextValue}>
        {children}
      </BottomSheetContext.Provider>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

type IBottomSheetPortalProps = Omit<
  React.ComponentProps<typeof GorhomBottomSheet>,
  'ref'
> & {
  snapPoints: (string | number)[];
  className?: string;
  backgroundClassName?: string;
  handleIndicatorClassName?: string;
  enableDynamicSizing?: boolean;
  closeOnBackdropPress?: boolean;
};

const StyledGorhomBottomSheet = styled(GorhomBottomSheet, {
  className: 'style',
  backgroundClassName: 'backgroundStyle',
  handleIndicatorClassName: 'handleIndicatorStyle',
});

export const BottomSheetPortal = ({
  snapPoints,
  handleComponent,
  backdropComponent,
  footerComponent,
  className,
  backgroundClassName,
  handleIndicatorClassName,
  index = -1,
  enablePanDownToClose = true,
  enableDynamicSizing = false,
  closeOnBackdropPress = true,
  onChange,
  ...props
}: IBottomSheetPortalProps) => {
  const { bottomSheetRef, handleNaturalClose } = useContext(BottomSheetContext);

  const handleSheetChanges = useCallback(
    (idx: number) => {
      onChange?.(idx);
      // Sheet reached closed position naturally — update React state
      if (idx === -1) {
        handleNaturalClose();
      }
    },
    [handleNaturalClose, onChange]
  );

  return (
    <StyledGorhomBottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={index}
      backdropComponent={backdropComponent}
      handleComponent={handleComponent}
      footerComponent={footerComponent}
      onChange={handleSheetChanges}
      enablePanDownToClose={enablePanDownToClose}
      enableDynamicSizing={enableDynamicSizing}
      // @ts-ignore - className support via styled()
      backgroundClassName={`${backgroundClassName} bg-background border border-border/90 rounded-xl`}
      // @ts-ignore
      handleIndicatorClassName={`${handleIndicatorClassName} bg-primary`}
      {...props}
    >
      {props.children}
    </StyledGorhomBottomSheet>
  );
};

export const BottomSheetTrigger = ({
  className,
  index,
  ...props
}: PressableProps & { className?: string; index?: number }) => {
  const { handleOpen } = useContext(BottomSheetContext);
  return (
    <Pressable
      onPress={(e) => {
        props.onPress?.(e);
        handleOpen(index);
      }}
      {...props}
      className={bottomSheetTriggerStyle({ className })}
    >
      {props.children}
    </Pressable>
  );
};

type IBottomSheetBackdropProps = BottomSheetBackdropProps & {
  className?: string;
  opacity?: number;
};

export const BottomSheetBackdrop = ({
  disappearsOnIndex = -1,
  appearsOnIndex = 0,
  opacity = 0.5,
  className,
  pressBehavior = 'close',
  ...props
}: Partial<IBottomSheetBackdropProps>) => {
  return (
    <GorhomBottomSheetBackdrop
      // @ts-ignore
      className={bottomSheetBackdropStyle({ className })}
      disappearsOnIndex={disappearsOnIndex}
      appearsOnIndex={appearsOnIndex}
      opacity={opacity}
      pressBehavior={pressBehavior}
      {...props}
    />
  );
};

type IBottomSheetHandleProps = React.ComponentProps<
  typeof GorhomBottomSheetHandle
> & {
  className?: string;
  indicatorClassName?: string;
};

export const BottomSheetDragIndicator = ({
  children,
  className,
  indicatorClassName,
  ...props
}: Partial<IBottomSheetHandleProps>) => {
  return (
    <GorhomBottomSheetHandle
      {...props}
      // @ts-ignore
      className={bottomSheetHandleStyle({ className })}
    >
      {children}
    </GorhomBottomSheetHandle>
  );
};

type IBottomSheetContentProps = React.ComponentProps<
  typeof GorhomBottomSheetView
> & {
  className?: string;
  focusScope?: boolean;
};

export const BottomSheetContent = ({
  className,
  focusScope = true,
  ...props
}: IBottomSheetContentProps) => {
  const { handleClose, visible } = useContext(BottomSheetContext);

  const keyDownHandlers = useMemo(() => {
    if (Platform.OS !== 'web') return {};
    return {
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          handleClose();
        }
      },
    };
  }, [handleClose]);

  const content = props.children;
  const wrappedContent =
    Platform.OS === 'web' && visible && focusScope ? (
      <FocusScope contain={visible} autoFocus restoreFocus>
        {content}
      </FocusScope>
    ) : (
      content
    );

  return (
    <GorhomBottomSheetView
      {...props}
      // @ts-ignore
      {...keyDownHandlers}
      // @ts-ignore
      className={bottomSheetContentStyle({ className })}
    >
      {wrappedContent}
    </GorhomBottomSheetView>
  );
};

type IBottomSheetFooterProps = React.ComponentProps<
  typeof GorhomBottomSheetFooter
> & {
  className?: string;
  children?: React.ReactNode;
};

export const BottomSheetFooter = ({
  className,
  children,
  ...props
}: IBottomSheetFooterProps) => {
  return (
    <GorhomBottomSheetFooter {...props}>
      <View
        // @ts-ignore
        className={bottomSheetFooterStyle({ className })}
      >
        {children}
      </View>
    </GorhomBottomSheetFooter>
  );
};

type IBottomSheetItemProps = PressableProps & {
  className?: string;
  closeOnSelect?: boolean;
};

export const BottomSheetItem = ({
  children,
  className,
  closeOnSelect = true,
  ...props
}: IBottomSheetItemProps) => {
  const { handleClose } = useContext(BottomSheetContext);

  return (
    <Pressable
      {...props}
      className={bottomSheetItemStyle({ className })}
      onPress={(e) => {
        props.onPress?.(e);
        if (closeOnSelect) {
          handleClose();
        }
      }}
      role="button"
      accessibilityRole="button"
    >
      {children}
    </Pressable>
  );
};

type IBottomSheetItemTextProps = TextProps & {
  className?: string;
};

export const BottomSheetItemText = ({
  className,
  ...props
}: IBottomSheetItemTextProps) => {
  return <Text {...props} className={bottomSheetItemTextStyle({ className })} />;
};

export const BottomSheetTextInput = ({
  className,
  ...props
}: TextInputProps) => {
  return <GorhomBottomSheetInput {...props} className={bottomSheetTextInputStyle({ className })} />;
};

const StyledGorhomBottomSheetScrollView = styled(GorhomBottomSheetScrollView, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

const StyledGorhomBottomSheetFlatList = styled(GorhomBottomSheetFlatList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

const StyledGorhomBottomSheetSectionList = styled(GorhomBottomSheetSectionList, {
  className: 'style',
  contentContainerClassName: 'contentContainerStyle',
});

// Scrollable components with className support
export const BottomSheetScrollView = StyledGorhomBottomSheetScrollView;
export const BottomSheetFlatList = StyledGorhomBottomSheetFlatList;
export const BottomSheetSectionList = StyledGorhomBottomSheetSectionList;