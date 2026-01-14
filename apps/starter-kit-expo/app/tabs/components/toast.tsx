import { Toast, ToastTitle, ToastDescription, useToast } from '@/components/ui/toast'
import { Button, ButtonText, ButtonGroup } from '@/components/ui/button'
import { Pressable } from '@/components/ui/pressable'
import { Icon, CloseIcon, HelpCircleIcon } from '@/components/ui/icon'
import { HStack } from '@/components/ui/hstack'
import { VStack } from '@/components/ui/vstack'
import { Avatar, AvatarImage, AvatarFallbackText } from '@/components/ui/avatar'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Box } from '@/components/ui/box'
import { RefreshCw, Send } from 'lucide-react-native'
import { Divider } from '@/components/ui/divider'


import React from 'react';
import { UsageVariantFlatList } from '@/components/custom/component-presentation/usage-variant-flatlist';

const ExampleBasic = () => {
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
          <Toast nativeID={uniqueToastId} action="muted" variant="solid">
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
};

const VariantOutline = () => {
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
          <Toast nativeID={uniqueToastId} action="muted" variant="outline">
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
};

const ExampleToastInNoteTalkingPlatform = () => {
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
                    className="p-4 gap-6 border-destructive w-full shadow-hard-5 max-w-[443px] flex-row justify-between"
                  >
                    <HStack space="md">
                      <Icon
                        as={HelpCircleIcon}
                        className="stroke-destructive mt-0.5"
                      />
                      <VStack space="xs">
                        <ToastTitle className="font-semibold text-destructive">Error!</ToastTitle>
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
          )
};

const ExampleSocialMediaNotification = () => {
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
                        className="p-4 gap-3 w-full sm:min-w-[386px] max-w-[386px] bg-card shadow-hard-2 flex-row"
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
                              className="text-foreground font-semibold"
                            >
                              Jacob Steve
                            </Heading>
                            <Text size="sm" className="text-muted-foreground">
                              2m ago
                            </Text>
                          </HStack>
                          <Text size="sm" className="text-muted-foreground">
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
          )
};

const ExampleSoftwareUpdateToast = () => {
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
                  className="p-4 gap-4 w-full max-w-[386px] bg-card shadow-hard-2 flex-row"
                >
                  <Box className="h-11 w-11 items-center justify-center hidden min-[400px]:flex bg-muted">
                    <Icon
                      as={RefreshCw}
                      size="xl"
                      className="stroke-foreground"
                    />
                  </Box>
                  <VStack space="xl">
                    <VStack space="xs">
                      <HStack className="justify-between">
                        <ToastTitle className="text-foreground font-semibold">
                          Update available
                        </ToastTitle>
                        <Pressable onPress={() => toast.close(id)}>
                          <Icon as={CloseIcon} className="stroke-muted-foreground" />
                        </Pressable>
                      </HStack>
                      <ToastDescription className="text-muted-foreground">
                        A new software version is available for download.
                      </ToastDescription>
                    </VStack>
                    <ButtonGroup className="gap-3 flex-row">
                      <Button
                        action="secondary"
                        variant="outline"
                      >
                        <ButtonText>Not now</ButtonText>
                      </Button>
                      <Button>
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
        )
};

const ExampleMessageSentToast = () => {
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
                          className="fill-foreground/80 stroke-none"
                        />
                        <Divider
                          orientation="vertical"
                          className="h-[30px] bg-border/80"
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
          )
};

const COMPONENT_VARIANTS = [
  {
    value: "basic",
    label: "Basic",
    content: <ExampleBasic />,
  },
  {
    value: "outline",
    label: "Outline",
    content: <VariantOutline />,
  },
  {
    value: "toast-in-note-talking-platform",
    label: "Toast in note talking platform",
    content: <ExampleToastInNoteTalkingPlatform />,
  },
  {
    value: "social-media-notification",
    label: "Social media notification",
    content: <ExampleSocialMediaNotification />,
  },
  {
    value: "software-update-toast",
    label: "Software update toast",
    content: <ExampleSoftwareUpdateToast />,
  },
  {
    value: "message-sent-toast",
    label: "Message sent toast",
    content: <ExampleMessageSentToast />,
  }
];

export default function ToastScreen() {
  return <UsageVariantFlatList data={COMPONENT_VARIANTS} />;
}