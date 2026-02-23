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
      <AlertDialog isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogBackdrop />
        <AlertDialogContent>
          <AlertDialogHeader>
            <Heading className="text-foreground font-semibold text-lg">
              Are you sure you want to delete this post?
            </Heading>
          </AlertDialogHeader>
          <AlertDialogBody className="mt-3 mb-4">
            <Text className="text-sm text-muted-foreground">
              Deleting the post will remove it permanently and cannot be undone.
              Please confirm if you want to proceed.
            </Text>
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button variant="outline" onPress={handleClose}>
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button onPress={handleClose}>
              <ButtonText>Delete</ButtonText>
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}`}
      argTypes={{}}
      reactLive={{ AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogFooter, AlertDialogBody, AlertDialogBackdrop, Button, ButtonText, Text, Heading }}
      
    />
  );
}