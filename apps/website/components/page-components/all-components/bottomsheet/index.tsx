import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { BottomSheet } from '@/components/ui/bottomsheet';
import { BottomSheetContent } from '@/components/ui/bottomsheet';
import { BottomSheetItem } from '@/components/ui/bottomsheet';
import { BottomSheetItemText } from '@/components/ui/bottomsheet';
import { BottomSheetDragIndicator } from '@/components/ui/bottomsheet';
import { BottomSheetDragIndicatorWrapper } from '@/components/ui/bottomsheet';
import { BottomSheetBackdrop } from '@/components/ui/bottomsheet';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App() {
  const [showBottomSheet, setShowBottomSheet] = React.useState(false)
  const handleClose = () => setShowBottomSheet(false)
  return (
    <>
      <Button onPress={() => setShowBottomSheet(true)}>
        <ButtonText>Open Bottom Sheet</ButtonText>
      </Button>
      <BottomSheet isOpen={showBottomSheet} onClose={handleClose} snapPoints={[50]}>
        <BottomSheetBackdrop />
        <BottomSheetContent>
          <BottomSheetDragIndicatorWrapper>
            <BottomSheetDragIndicator />
          </BottomSheetDragIndicatorWrapper>
          <BottomSheetItem onPress={handleClose}>
            <BottomSheetItemText>Share</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem onPress={handleClose}>
            <BottomSheetItemText>Download</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem onPress={handleClose}>
            <BottomSheetItemText>Copy Link</BottomSheetItemText>
          </BottomSheetItem>
          <BottomSheetItem onPress={handleClose}>
            <BottomSheetItemText>Report</BottomSheetItemText>
          </BottomSheetItem>
        </BottomSheetContent>
      </BottomSheet>
    </>
  )
}`}
      argTypes={{}}
      reactLive={{ BottomSheet, BottomSheetContent, BottomSheetItem, BottomSheetItemText, BottomSheetDragIndicator, BottomSheetDragIndicatorWrapper, BottomSheetBackdrop, Button, ButtonText }}
    />
  );
}