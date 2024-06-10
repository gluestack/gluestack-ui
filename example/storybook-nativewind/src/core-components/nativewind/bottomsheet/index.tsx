import GorhomBottomSheet, {
  BottomSheetBackdrop as GorhomBottomSheetBackdrop,
  BottomSheetView as GorhomBottomSheetView,
  BottomSheetHandle,
  BottomSheetTextInput as GorhomBottomSheetInput,
} from '@gorhom/bottom-sheet';
import { ScrollView, FlatList, VirtualizedList, Platform } from 'react-native';
import type { PressableProps } from 'react-native';
import { FocusScope } from '@react-native-aria/focus';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Pressable, Text } from 'react-native';
import { SectionList } from 'react-native';
import { cssInterop } from 'nativewind';
import { tva } from '@gluestack-ui/nativewind-utils/tva';

const bottomSheetBackdropStyle = tva({
  base: 'absolute inset-0 flex-1 touch-none select-none bg-black opacity-0',
});

const bottomSheetContentStyle = tva({
  base: 'mt-2',
});
const bottomSheetTriggerStyle = tva({
  base: 'px-5 h-10 rounded flex-row items-center justify-center border border-primary-300',
});

const bottomSheetIndicatorStyle = tva({
  base: 'py-1 w-full items-center rounded-t-lg ',
});

const bottomSheetItemStyle = tva({
  base: 'p-3 flex-row items-center rounded-sm w-full disabled:opacity-0.4 web:pointer-events-auto disabled:cursor-not-allowed hover:bg-background-50 active:bg-background-100 focus:bg-background-100 web:focus-visible:bg-background-100',
});

const BottomSheetContext = createContext<any>({});
type IBottomSheetProps = React.ComponentProps<typeof GorhomBottomSheet>;
export const BottomSheet = ({
  snapToIndex = 1,
  onOpen,
  onClose,
  ...props
}: {
  snapToIndex?: number;
  children?: any;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  const bottomSheetRef = useRef<GorhomBottomSheet>(null);

  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => {
    bottomSheetRef.current?.snapToIndex(snapToIndex);
    setVisible(true);
    onOpen && onOpen();
  }, [onOpen, snapToIndex]);

  const handleClose = useCallback(() => {
    bottomSheetRef.current?.close();
    setVisible(false);
    onClose && onClose();
  }, [onClose]);

  return (
    <BottomSheetContext.Provider
      value={{
        visible,
        bottomSheetRef,
        handleClose,
        handleOpen,
      }}
    >
      {props.children}
    </BottomSheetContext.Provider>
  );
};

export const BottomSheetPortal = ({
  snapPoints,
  handleComponent: DragIndicator,
  backdropComponent: BackDrop,
  ...props
}: Partial<IBottomSheetProps> & {
  defaultIsOpen?: boolean;
  snapToIndex?: number;
}) => {
  const { bottomSheetRef, handleClose } = useContext(BottomSheetContext);

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === 0 || index === -1) {
        handleClose();
      }
    },
    [handleClose]
  );

  return (
    <GorhomBottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      backdropComponent={BackDrop}
      onChange={handleSheetChanges}
      handleComponent={DragIndicator}
      enablePanDownToClose={true}
    >
      {props.children}
    </GorhomBottomSheet>
  );
};

export const BottomSheetTrigger = ({ className, ...props }: any) => {
  const { handleOpen } = useContext(BottomSheetContext);
  return (
    <Pressable
      onPress={handleOpen}
      {...props}
      className={bottomSheetTriggerStyle({
        className: className,
      })}
    >
      {props.children}
    </Pressable>
  );
};
type IBottomSheetBackdrop = React.ComponentProps<
  typeof GorhomBottomSheetBackdrop
>;

export const BottomSheetBackdrop = ({
  disappearsOnIndex = -1,
  appearsOnIndex = 1,
  className,
  ...props
}: Partial<IBottomSheetBackdrop> & { className?: string }) => {
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

cssInterop(GorhomBottomSheetBackdrop, { className: 'style' });

type IBottomSheetDragIndicator = React.ComponentProps<typeof BottomSheetHandle>;

export const BottomSheetDragIndicator = ({
  children,
  className,
  ...props
}: Partial<IBottomSheetDragIndicator> & { className?: string }) => {
  return (
    <BottomSheetHandle
      {...props}
      // @ts-ignore
      className={bottomSheetIndicatorStyle({
        className: className,
      })}
    >
      {children}
    </BottomSheetHandle>
  );
};

cssInterop(BottomSheetHandle, { className: 'style' });

type IBottomSheetContent = React.ComponentProps<typeof GorhomBottomSheetView>;

export const BottomSheetContent = ({ ...props }: IBottomSheetContent) => {
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

cssInterop(GorhomBottomSheetView, { className: 'style' });

export const BottomSheetItem = ({
  children,
  className,
  closeOnSelect = true,
  ...props
}: PressableProps & {
  closeOnSelect?: boolean;
}) => {
  const { handleClose } = useContext(BottomSheetContext);
  return (
    <Pressable
      {...props}
      className={bottomSheetItemStyle({
        className: className,
      })}
      onPress={(e) => {
        if (closeOnSelect) {
          handleClose();
        }
        props.onPress && props.onPress(e);
      }}
      role="button"
    >
      {children}
    </Pressable>
  );
};

export const BottomSheetItemText = ({ ...props }: any) => {
  return <Text {...props} />;
};

export const BottomSheetScrollView = ScrollView;
export const BottomSheetFlatList = FlatList;
export const BottomSheetSectionList = SectionList;
export const BottomSheetSectionHeader = Text;
export const BottomSheetVirtualizedList = VirtualizedList;
export const BottomSheetTextInput = GorhomBottomSheetInput;
