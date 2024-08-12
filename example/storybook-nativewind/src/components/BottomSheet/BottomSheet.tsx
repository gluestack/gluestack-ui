import React from 'react';
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
} from '@/components/ui/bottomsheet';
import { Button, ButtonText } from '@/components/ui/button';
const BottomSheetBasic = ({ ...props }: any) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Button onPress={() => setIsOpen(true)}>
        <ButtonText>Open Bottom Sheet</ButtonText>
      </Button>
      <BottomSheet
        snapPoints={['25%', '90%']}
        isOpen={isOpen}
        index={0}
        enableDynamicSizing={false}
        onClose={() => {
          setIsOpen(false);
        }}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
        {...props}
      >
        <BottomSheetContent>
          <BottomSheetItem>
            <BottomSheetItemText>Item 1</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem>
            <BottomSheetItemText>Item 2</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem>
            <BottomSheetItemText>Item 3</BottomSheetItemText>
          </BottomSheetItem>
        </BottomSheetContent>
      </BottomSheet>
    </>
  );
};

BottomSheetBasic.description =
  'This is a basic BottomSheet component example. The BottomSheet component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BottomSheetBasic;

export { BottomSheet };
