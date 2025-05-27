import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Toast, ToastTitle, ToastDescription, useToast } from '@/components/ui/toast'
import { Button, ButtonText, ButtonGroup } from '@/components/ui/button'
import { Pressable } from '@/components/ui/pressable'
import { Icon, CloseIcon, HelpCircleIcon } from '@/components/ui/icon'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Box } from '@/components/ui/box'
import { RefreshCw, Send } from 'lucide-react-native'
import { Divider } from '@/components/ui/divider'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
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

<ComponentPreviewer props={{}} title={"Toast in note talking platform"}>
  {props => {
          const toast = useToast();
          const [toastId, setToastId] = React.useState(0);
          const handleToast = () => {
            if (!toast.isActive(toastId)) {
              showNewToast();
            }
          };
          const showNewToast = () => {
            const newId = Math.random();
            setToastId(newId);
            toast.show({
              id: newId,
              placement: 'top',
              duration: 3000,
              render: ({ id }) => {
                const uniqueToastId = "toast-" + id;
                return (
                  <Toast
                    action="error"
                    variant="outline"
                    nativeID={uniqueToastId}
                    className="p-4 gap-6 border-error-500 w-full shadow-hard-5 max-w-[443px] flex-row justify-between"
                  >
                    <HStack space="md">
                      <Icon
                        as={HelpCircleIcon}
                        className="stroke-error-500 mt-0.5"
                      />
                      <VStack space="xs">
                        <ToastTitle className="font-semibold text-error-500">Error!</ToastTitle>
                        <ToastDescription size="sm">
                          Something went wrong.
                        </ToastDescription>
                      </VStack>
                    </HStack>
                    <HStack className="min-[450px]:gap-3 gap-1">
                      <Button variant="link" size="sm" className="px-3.5 self-center">
                        <ButtonText>Retry</ButtonText>
                      </Button>
                      <Pressable onPress={() => toast.close(id)}>
                        <Icon as={CloseIcon} />
                      </Pressable>
                    </HStack>
                  </Toast>
                );
              },
            });
          };
          return (
            <Button onPress={handleToast}>
              <ButtonText>Press Me</ButtonText>
            </Button>
          );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Social media notification"}>
  {props => {
          const toast = useToast();
          return (
            <Button
              onPress={() => {
                toast.show({
                  placement:"top",
                  render: ({ id }) => {
                    const toastId = "toast-" + id;
                    return (
                      <Toast
                        nativeID={toastId}
                        className="p-4 gap-3 w-full sm:min-w-[386px] max-w-[386px] bg-background-0 shadow-hard-2 flex-row"
                      >
                        <Avatar>
                          <AvatarFallbackText>JS</AvatarFallbackText>
                          <AvatarImage
                            source={{
                              uri: "https://gluestack.github.io/public-blog-video-assets/Avatar.png",
                            }}
                          />
                        </Avatar>
                        <VStack className="web:flex-1">
                          <HStack className="justify-between">
                            <Heading
                              size="sm"
                              className="text-typography-950 font-semibold"
                            >
                              Jacob Steve
                            </Heading>
                            <Text size="sm" className="text-typography-500">
                              2m ago
                            </Text>
                          </HStack>
                          <Text size="sm" className="text-typography-500">
                            commented on your photo
                          </Text>
                        </VStack>
                      </Toast>
                    );
                  },
                });
              }}
            >
              <ButtonText>Show Toast</ButtonText>
            </Button>
          );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Software update toast"}>
  {props => {
        const toast = useToast();
        const [toastId, setToastId] = React.useState(0);
        const handleToast = () => {
          if (!toast.isActive(toastId)) {
            showNewToast();
          }
        };
        const showNewToast = () => {
          const newId = Math.random();
          setToastId(newId);
          toast.show({
            id: newId,
            placement: 'top',
            duration: 3000,
            render: ({ id }) => {
              const uniqueToastId = "toast-" + id;
              return (
                <Toast
                  nativeID={uniqueToastId}
                  className="p-4 gap-4 w-full max-w-[386px] bg-background-0 shadow-hard-2 flex-row"
                >
                  <Box className="h-11 w-11 items-center justify-center hidden min-[400px]:flex bg-background-50">
                    <Icon
                      as={RefreshCw}
                      size="xl"
                      className="stroke-background-800"
                    />
                  </Box>
                  <VStack space="xl">
                    <VStack space="xs">
                      <HStack className="justify-between">
                        <ToastTitle className="text-typography-900 font-semibold">
                          Update available
                        </ToastTitle>
                        <Pressable onPress={() => toast.close(id)}>
                          <Icon as={CloseIcon} className="stroke-background-500" />
                        </Pressable>
                      </HStack>
                      <ToastDescription className="text-typography-700">
                        A new software version is available for download.
                      </ToastDescription>
                    </VStack>
                    <ButtonGroup className="gap-3 flex-row">
                      <Button
                        action="secondary"
                        variant="outline"
                        size="sm"
                        className="flex-grow"
                      >
                        <ButtonText>Not now</ButtonText>
                      </Button>
                      <Button size="sm" className="flex-grow">
                        <ButtonText>Update</ButtonText>
                      </Button>
                    </ButtonGroup>
                  </VStack>
                </Toast>
              );
            },
          });
        };
        return (
          <Button onPress={handleToast}>
            <ButtonText>Press Me</ButtonText>
          </Button>
        );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Message sent toast"}>
  {props => {
          const toast = useToast();
          return (
            <Button
              onPress={() => {
                toast.show({
                  placement:"top",
                  render: ({ id }) => {
                    const toastId = "toast-" + id;
                    return (
                      <Toast
                        nativeID={toastId}
                        className="px-5 py-3 gap-4 shadow-soft-1 items-center flex-row"
                      >
                        <Icon
                          as={Send}
                          size="xl"
                          className="fill-typography-100 stroke-none"
                        />
                        <Divider
                          orientation="vertical"
                          className="h-[30px] bg-outline-200"
                        />
                        <ToastTitle size="sm">Message sent successfully</ToastTitle>
                      </Toast>
                    );
                  },
                });
              }}
            >
              <ButtonText>Show Toast</ButtonText>
            </Button>
          );}}
</ComponentPreviewer>
        </ScrollView>
  );
}