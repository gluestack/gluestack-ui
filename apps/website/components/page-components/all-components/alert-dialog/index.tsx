import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { AlertDialog } from '@/components/ui/alert-dialog';
import { AlertDialogContent } from '@/components/ui/alert-dialog';
import { AlertDialogHeader } from '@/components/ui/alert-dialog';
import { AlertDialogFooter } from '@/components/ui/alert-dialog';
import { AlertDialogBody } from '@/components/ui/alert-dialog';
import { AlertDialogBackdrop } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
import { Heading } from '@/components/ui/heading';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false)
  const handleClose = () => setShowAlertDialog(false)
  return (
    <>
      <Button onPress={() => setShowAlertDialog(true)}>
        <ButtonText>Open Dialog</ButtonText>
      </Button>
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose} size="{{size}}">
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-typography-950 font-semibold" size="md">
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text size="sm">
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter className="">
            <Button
              variant="outline"
              action="secondary"
              onPress={handleClose}
              size="sm"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button size="sm" onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`}
      argTypes={{
  "size": {
    "control": {
      "type": "select"
    },
    "options": [
      "xs",
      "sm",
      "md",
      "lg",
      "full"
    ],
    "defaultValue": "md"
  }
}}
      reactLive={{ AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop, Button, ButtonText, Text, Heading }}
    />
  );
}