import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
  BottomSheetHandle,
} from '@gorhom/bottom-sheet';
import { ScrollView, FlatList, VirtualizedList } from 'react-native';
import { useControllableState } from '@gluestack-ui/hooks';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import { Pressable, Text } from 'react-native';
import { SectionList } from 'react-native';

const ActionsheetContext = createContext<any>({});
export const Actionsheet = ({
  isOpen,
  onClose,
  onOpen,
  defaultIsOpen = false,
  snapToIndex = 0,
  ...props
}: any) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const backDropRef = useRef<any>(false);
  const handlerRef = useRef<any>(false);

  const [visible, setVisible] = useControllableState({
    value: isOpen,
    defaultValue: defaultIsOpen,
    onChange: (val) => {
      if (val === false) {
        onClose && onClose();
      } else {
        onOpen && onOpen();
      }
    },
  });

  // callbacks
  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        setVisible(false);
      }
    },
    [setVisible]
  );

  useEffect(() => {
    if (visible) {
      bottomSheetRef.current?.snapToIndex(snapToIndex);
    } else {
      bottomSheetRef.current?.close();
    }
  }, [visible, snapToIndex]);

  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  return (
    <ActionsheetContext.Provider
      value={{
        handleClose,
        backDropRef,
        handlerRef,
      }}
    >
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={-1}
        backdropComponent={backDropRef.current ? backDropRef.current : null}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        // @ts-ignore
        handleComponent={handlerRef.current ? handlerRef.current : null}
      >
        {props.children}
      </BottomSheet>
    </ActionsheetContext.Provider>
  );
};

type IActionsheetBackdrop = React.ComponentProps<typeof BottomSheetBackdrop>;

export const ActionsheetBackdrop = ({
  ...backDropProps
}: IActionsheetBackdrop) => {
  const { backDropRef } = useContext(ActionsheetContext);
  const BackDropComponent = ({
    disappearsOnIndex = -1,
    appearsOnIndex = 0,
    ...props
  }) => {
    return (
      <BottomSheetBackdrop
        {...backDropProps}
        disappearsOnIndex={disappearsOnIndex}
        appearsOnIndex={appearsOnIndex}
        {...props}
      ></BottomSheetBackdrop>
    );
  };
  useEffect(() => {
    backDropRef.current = BackDropComponent;
    return () => {
      backDropRef.current = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

type IActionsheetDragIndicator = React.ComponentProps<typeof BottomSheetHandle>;

export const ActionsheetDragIndicator = ({
  children,
  ...indicatorProps
}: IActionsheetDragIndicator) => {
  const { handlerRef } = useContext(ActionsheetContext);
  const HandleComponent = ({ props }: any) => {
    return (
      <BottomSheetHandle {...indicatorProps} {...props}>
        {children}
      </BottomSheetHandle>
    );
  };

  useEffect(() => {
    handlerRef.current = HandleComponent;
    return () => {
      handlerRef.current = false;
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
};

type IActionsheetContent = React.ComponentProps<typeof BottomSheetView>;

export const ActionsheetContent = ({ ...props }: IActionsheetContent) => {
  return <BottomSheetView {...props}></BottomSheetView>;
};

export const ActionsheetItem = ({ children, ...props }: any) => {
  return <Pressable {...props}>{children}</Pressable>;
};

export const ActionsheetItemText = ({ children, ...props }: any) => {
  return <Text {...props}>{children}</Text>;
};

export const ActionsheetScrollView = ({ children, ...props }: any) => {
  return <ScrollView {...props}>{children}</ScrollView>;
};

export const ActionsheetFlatList = ({ children, ...props }: any) => {
  return <FlatList {...props}>{children}</FlatList>;
};

export const ActionsheetSectionList = ({ children, ...props }: any) => {
  return <SectionList {...props}>{children}</SectionList>;
};

export const ActionsheetSectionHeader = ({ children, ...props }: any) => {
  return <Text {...props}>{children}</Text>;
};

export const ActionsheetVirtualizedList = ({ children, ...props }: any) => {
  return <VirtualizedList {...props}>{children}</VirtualizedList>;
};
