import EditScreenInfo from '@/components/EditScreenInfo';
import { BottomSheet, BottomSheetDragIndicator, BottomSheetBackdrop, BottomSheetContent, BottomSheetDragIndicatorWrapper, BottomSheetItem, BottomSheetItemText } from '@/components/ui/bottomsheet';
import { Button, ButtonText } from '@/components/ui/button';
import { Center } from '@/components/ui/center';
import { Divider } from '@/components/ui/divider';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { useEffect, useState } from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';

useEffect(() => {
  ScreenOrientation.unlockAsync();
}, []);

export default function App() {
  const [showBottomSheet, setShowBottomSheet] = useState(false)
  const handleClose = () => setShowBottomSheet(false)
  return (
    <>
      <Button onPress={() => setShowBottomSheet(true)}>
        <ButtonText>Open Bottom Sheet</ButtonText>
      </Button>
      <BottomSheet
        isOpen={showBottomSheet}
        onClose={handleClose}
        snapPoints={[25, 50, 75]}
        snapToIndex={1}
      >
        <BottomSheetBackdrop />
        <BottomSheetContent>
          <BottomSheetDragIndicatorWrapper>
            <BottomSheetDragIndicator />
          </BottomSheetDragIndicatorWrapper>
          <Text style={{ padding: 16, fontSize: 16, fontWeight: 'bold' }}>
            Multiple Snap Points
          </Text>
          <Text style={{ padding: 16, color: '#666' }}>
            This bottom sheet can snap to 25%, 50%, or 75% of the screen height.
            Try dragging it up and down to see the snap points in action.
          </Text>
          <BottomSheetItem onPress={() => { handleClose(); console.log('Option 1') }}>
            <BottomSheetItemText>Option 1</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem onPress={() => { handleClose(); console.log('Option 2') }}>
            <BottomSheetItemText>Option 2</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem onPress={() => { handleClose(); console.log('Option 3') }}>
            <BottomSheetItemText>Option 3</BottomSheetItemText>
          </BottomSheetItem>
        </BottomSheetContent>
      </BottomSheet>
    </>
  )
}
