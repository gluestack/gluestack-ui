'use client';
import { FocusScope } from '@gluestack-ui/utils/aria';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { Overlay } from '@gluestack-ui/core/overlay/creator';
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
import { withUniwind } from 'uniwind';
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
import { Keyboard, Platform, Text, View } from 'react-native';
import { Pressable as RNPressable } from 'react-native';
import { Pressable as GGHPressable } from 'react-native-gesture-handler';

const bottomSheetBackdropStyle = tva({
  base: 'absolute inset-0 bg-black opacity-50',
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
  base: 'p-3 flex-row items-center rounded-sm w-full disabled:opacity-40 web:pointer-events-auto disabled:cursor-not-allowed hover:bg-accent/40 active:bg-accent/50 data-[focus=true]:bg-accent/20 web:data-[focus-visible=true]:bg-accent/40',
});
const bottomSheetItemTextStyle = tva({
  base: 'text-foreground font-normal text-sm',
});

const bottomSheetFooterStyle = tva({
  base: 'p-4 border-t border-border/90',
});

const bottomSheetTextInputStyle = tva({
  base: 'flex-1 text-foreground text-sm md:text-sm py-1 placeholder:text-muted-foreground  web:outline-none ios:leading-[0px] web:cursor-text  h-9 w-full flex-row items-center rounded-md border border-border dark:bg-input/30 bg-transparent shadow-xs overflow-hidden px-3 gap-2',
});

type BottomSheetContextValue = {
  bottomSheetRef: React.RefObject<GorhomBottomSheet>;
  handleClose: () => void;
  handleOpen: (index?: number) => void;
  isVisible: boolean;
  handleSheetChanges: (index: number) => void;
  currentIndex: number;
};

const BottomSheetContext = createContext<BottomSheetContextValue>({
  bottomSheetRef: { current: null! },
  handleClose: () => {},
  handleOpen: () => {},
  isVisible: false,
  handleSheetChanges: () => {},
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
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1);

    const handleOpen = useCallback(
      (index?: number) => {
        const targetIndex = index ?? defaultSnapIndex;
        setCurrentIndex(targetIndex);
        setIsVisible(true);
        onOpen?.();
      },
      [defaultSnapIndex, onOpen]
    );

    const handleClose = useCallback(() => {
      Keyboard.dismiss();
      setCurrentIndex(-1);
    }, []);

    const handleSheetChanges = useCallback(
      (index: number) => {
        setCurrentIndex(index);
        onChange?.(index);
        if (index === -1) {
          setIsVisible(false);
          onClose?.();
        } else {
          setIsVisible(true);
        }
      },
      [onClose, onChange]
    );

    const snapToIndex = useCallback((index: number) => {
      if (bottomSheetRef.current) {
        bottomSheetRef.current.snapToIndex(index);
      } else {
        setCurrentIndex(index);
        setIsVisible(true);
      }
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
        bottomSheetRef,
        handleClose,
        handleOpen,
        isVisible,
        handleSheetChanges,
        currentIndex,
      }),
      [handleClose, handleOpen, isVisible, handleSheetChanges, currentIndex]
    );

    return (
      <BottomSheetContext.Provider value={contextValue}>
        {children}
      </BottomSheetContext.Provider>
    );
  }
);

BottomSheet.displayName = 'BottomSheet';

const StyledGorhomBottomSheet = withUniwind(GorhomBottomSheet);

type IBottomSheetPortalProps = Omit<
  React.ComponentProps<typeof GorhomBottomSheet>,
  'ref' | 'index'
> & {
  className?: string;
  backgroundClassName?: string;
  handleIndicatorClassName?: string;
};

export const BottomSheetPortal = ({
  className,
  backgroundClassName,
  handleIndicatorClassName,
  enablePanDownToClose = true,
  enableDynamicSizing = false,
  snapPoints,
  onChange,
  ...props
}: IBottomSheetPortalProps) => {
  const { bottomSheetRef, handleSheetChanges, isVisible, currentIndex } =
    useContext(BottomSheetContext);

  const memoizedSnapPoints = useMemo(
    () => snapPoints,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(snapPoints)]
  );

  if (!isVisible) return null;

  // Defensive index check to prevent Invariant Violation
  const validIndex =
    memoizedSnapPoints && memoizedSnapPoints.length > 0
      ? Math.min(currentIndex, memoizedSnapPoints.length - 1)
      : currentIndex;

  return (
    <Overlay isOpen={true} isKeyboardDismissable={false} style={{ flex: 1 }}>
      <StyledGorhomBottomSheet
        ref={bottomSheetRef}
        snapPoints={memoizedSnapPoints}
        index={validIndex}
        enableDynamicSizing={enableDynamicSizing}
        onChange={(idx) => {
          handleSheetChanges(idx);
          onChange?.(idx);
        }}
        enablePanDownToClose={enablePanDownToClose}
        // @ts-ignore
        className={className}
        // @ts-ignore
        backgroundClassName={`${backgroundClassName} bg-background border border-border/90 rounded-xl`}
        // @ts-ignore
        handleIndicatorClassName={`${handleIndicatorClassName} bg-primary`}
        {...props}
      >
        {props.children}
      </StyledGorhomBottomSheet>
    </Overlay>
  );
};

export const BottomSheetTrigger = ({
  className,
  index,
  ...props
}: PressableProps & { className?: string; index?: number }) => {
  const { handleOpen } = useContext(BottomSheetContext);
  return (
    <RNPressable
      onPress={(e) => {
        props.onPress?.(e);
        handleOpen(index);
      }}
      {...props}
      className={bottomSheetTriggerStyle({ className })}
    >
      {props.children}
    </RNPressable>
  );
};

type IBottomSheetBackdropProps = BottomSheetBackdropProps & {
  className?: string;
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

const StyledGorhomBottomSheetHandle = withUniwind(GorhomBottomSheetHandle);

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
    <StyledGorhomBottomSheetHandle
      {...props}
      // @ts-ignore
      className={bottomSheetHandleStyle({ className })}
    >
      {children}
    </StyledGorhomBottomSheetHandle>
  );
};

const StyledGorhomBottomSheetView = withUniwind(GorhomBottomSheetView);

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
  const { handleClose, isVisible } = useContext(BottomSheetContext);

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
    Platform.OS === 'web' && isVisible && focusScope ? (
      <FocusScope contain={isVisible} autoFocus restoreFocus>
        {content}
      </FocusScope>
    ) : (
      content
    );

  return (
    <StyledGorhomBottomSheetView
      {...props}
      // @ts-ignore
      {...keyDownHandlers}
      // @ts-ignore
      className={bottomSheetContentStyle({ className })}
    >
      {wrappedContent}
    </StyledGorhomBottomSheetView>
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

const StyledGGHPressable = withUniwind(GGHPressable);

export const BottomSheetItem = ({
  children,
  className,
  closeOnSelect = true,
  ...props
}: IBottomSheetItemProps) => {
  const { handleClose } = useContext(BottomSheetContext);

  const Pressable = Platform.OS === 'web' ? RNPressable : StyledGGHPressable;

  return (
    <Pressable
      {...props}
      // @ts-ignore
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
  return (
    <Text {...props} className={bottomSheetItemTextStyle({ className })} />
  );
};

const StyledGorhomBottomSheetInput = withUniwind(GorhomBottomSheetInput);

export const BottomSheetTextInput = ({
  className,
  ...props
}: TextInputProps) => {
  return (
    <StyledGorhomBottomSheetInput
      {...props}
      // @ts-ignore
      className={bottomSheetTextInputStyle({ className })}
    />
  );
};

// Scrollable components
export const BottomSheetScrollView = GorhomBottomSheetScrollView;
export const BottomSheetFlatList = GorhomBottomSheetFlatList;
export const BottomSheetSectionList = GorhomBottomSheetSectionList;
