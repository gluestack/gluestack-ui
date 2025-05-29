import { ComponentPreviewer } from '@/components/custom/component-previewer';
import { Toast } from '@/components/ui/toast';
import { ToastTitle } from '@/components/ui/toast';
import { ToastDescription } from '@/components/ui/toast';
import { useToast } from '@/components/ui/toast';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function Example() {
  const toast = useToast()
  const [toastId, setToastId] = React.useState(0)
  const handleToast = () => {
    if (!toast.isActive(toastId)) {
      showNewToast()
    }
  }
  const showNewToast = () => {
    const newId = Math.random()
    setToastId(newId)
    toast.show({
      id: newId,
      placement: "top",
      duration: 3000,
      render: ({ id }) => {
        const uniqueToastId = "toast-" + id
        return (
          <Toast nativeID={uniqueToastId} action="{{action}}" variant="{{variant}}">
            <ToastTitle>Hello!</ToastTitle>
            <ToastDescription>
              This is a customized toast message.
            </ToastDescription>
          </Toast>
        )
      },
    })
  }
  return (
    <Button onPress={handleToast}>
      <ButtonText>Press Me</ButtonText>
    </Button>
  )
}`}
      argTypes={{
  "action": {
    "control": {
      "type": "select"
    },
    "options": [
      "success",
      "info",
      "warning",
      "error",
      "muted"
    ],
    "defaultValue": "muted"
  },
  "variant": {
    "control": {
      "type": "select"
    },
    "options": [
      "solid",
      "outline"
    ],
    "defaultValue": "solid"
  }
}}
      reactLive={{ Toast, ToastTitle, ToastDescription, useToast, Button, ButtonText }}
      title={}
      description={}
    />
  );
}