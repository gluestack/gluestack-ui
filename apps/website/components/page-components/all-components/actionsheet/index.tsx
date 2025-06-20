import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Actionsheet } from '@/components/ui/actionsheet';
import { ActionsheetContent } from '@/components/ui/actionsheet';
import { ActionsheetItem } from '@/components/ui/actionsheet';
import { ActionsheetItemText } from '@/components/ui/actionsheet';
import { ActionsheetDragIndicator } from '@/components/ui/actionsheet';
import { ActionsheetDragIndicatorWrapper } from '@/components/ui/actionsheet';
import { ActionsheetBackdrop } from '@/components/ui/actionsheet';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App() {
  const [showActionsheet, setShowActionsheet] = React.useState(false)
  const handleClose = () => setShowActionsheet(false)
  return (
    <>
      <Button onPress={() => setShowActionsheet(true)}>
        <ButtonText>Open Actionsheet</ButtonText>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Edit Message</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Mark Unread</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Remind Me</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Add to Saved Items</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem isDisabled onPress={handleClose}>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </>
  )
}`}
      argTypes={{}}
      reactLive={{ Actionsheet, ActionsheetContent, ActionsheetItem, ActionsheetItemText, ActionsheetDragIndicator, ActionsheetDragIndicatorWrapper, ActionsheetBackdrop, Button, ButtonText }}
    />
  );
}