import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { BottomSheet } from '@/components/ui/bottomsheet';
import { BottomSheetTrigger } from '@/components/ui/bottomsheet';
import { BottomSheetContent } from '@/components/ui/bottomsheet';
import { BottomSheetBackdrop } from '@/components/ui/bottomsheet';
import { BottomSheetDragIndicator } from '@/components/ui/bottomsheet';
import { BottomSheetItem } from '@/components/ui/bottomsheet';
import { BottomSheetItemText } from '@/components/ui/bottomsheet';
import { BottomSheetPortal } from '@/components/ui/bottomsheet';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  return (
     <BottomSheet>
            <BottomSheetTrigger>
              <Text>Open BottomSheet</Text>
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
  )
}`}
      argTypes={{}}
      reactLive={{ BottomSheet, BottomSheetTrigger, BottomSheetContent, BottomSheetBackdrop, BottomSheetDragIndicator, BottomSheetItem, BottomSheetItemText, BottomSheetPortal, Text }}
      
    />
  );
}