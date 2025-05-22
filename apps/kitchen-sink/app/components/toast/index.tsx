import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Toast, ToastTitle, ToastDescription, useToast } from '@/components/ui/toast'
import { Button, ButtonText } from '@/components/ui/button'


import { SafeAreaView } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
    <SafeAreaView className="flex-1 bg-background-0">
        <ScrollView>
      <ComponentPreviewer props={{
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
}} title={undefined}>
  {props => {
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
          <Toast nativeID={uniqueToastId} action={props.action} variant={props.variant}>
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
  )}}
</ComponentPreviewer>
        </ScrollView>
    </SafeAreaView>
  );
}