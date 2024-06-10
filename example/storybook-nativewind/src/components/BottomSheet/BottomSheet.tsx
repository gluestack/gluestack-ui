import React from 'react';
import {
  BottomSheet,
  BottomSheetBackdrop,
  BottomSheetContent,
  BottomSheetDragIndicator,
  BottomSheetItem,
  BottomSheetItemText,
  BottomSheetPortal,
  BottomSheetTrigger,
} from '@/components/ui/bottomsheet';
import { Text } from '@/components/ui/text';

const BottomSheetBasic = ({
  text = 'Open Action Sheet',
  _colorMode,
  ...props
}: any) => {
  return (
    <BottomSheet {...props}>
      <BottomSheetTrigger>
        <Text>{text}</Text>
      </BottomSheetTrigger>
      <BottomSheetPortal
        snapPoints={['25%', '50%']}
        backdropComponent={BottomSheetBackdrop}
        handleComponent={BottomSheetDragIndicator}
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
      </BottomSheetPortal>
    </BottomSheet>
  );
};

BottomSheetBasic.description =
  'This is a basic BottomSheet component example. The BottomSheet component lets you quickly and easily add status indicators to your interface for improved usability. They are designed to be attention-grabbing and quickly convey important information.';

export default BottomSheetBasic;

export { BottomSheet };
