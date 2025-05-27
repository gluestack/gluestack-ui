import { ComponentPreviewer } from '@/components/custom/component-previewer'
import { Modal, ModalBackdrop, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@/components/ui/modal'
import { Button, ButtonText, ButtonIcon } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Text } from '@/components/ui/text'
import { Icon, CloseIcon, ArrowLeftIcon, TrashIcon, CopyIcon } from '@/components/ui/icon'
import { HStack } from '@/components/ui/hstack'
import { Input, InputField } from '@/components/ui/input'
import { Link, LinkText } from '@/components/ui/link'
import { Image } from '@/components/ui/image'
import { Box } from '@/components/ui/box'
import { VStack } from '@/components/ui/vstack'
import { Pressable } from '@/components/ui/pressable'


import React from 'react';
import { ScrollView } from 'react-native';
export default function ComponentExamples() {
  return (
        <ScrollView className="bg-background-0 flex-1" contentContainerClassName="px-3 pb-6">
      <ComponentPreviewer props={{
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
}} title={"Basic"}>
  {props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Open Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        size={props.size}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Heading size="lg">Modal Title</Heading>
            <ModalCloseButton>
              <Icon as={CloseIcon} />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text>
              This is the modal body. You can add any content here.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              className="mr-3"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
            >
              <ButtonText>Save</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Multiple Modals"}>
  {props => {
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Forgot password?</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>Forgot password?</Heading>
            <Text size="sm">No worries, we'll send you reset instructions</Text>
          </ModalHeader>
          <ModalBody className="mb-4">
            <Input>
              <InputField placeholder="Enter your email" />
            </Input>
          </ModalBody>
          <ModalFooter className="flex-col items-start">
            <Button
              onPress={() => {
                setShowModal2(true);
              }}
              className="w-full"
            >
              <ButtonText>Submit</ButtonText>
            </Button>
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="gap-1"
            >
              <ButtonIcon as={ArrowLeftIcon} />
              <ButtonText>Back to login</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showModal2}
        onClose={() => {
          setShowModal2(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>Reset password</Heading>
            <Text size="sm">
              A verification code has been sent to you. Enter code below.
            </Text>
          </ModalHeader>
          <ModalBody className="mb-4">
            <Input>
              <InputField placeholder="Enter verification code" />
            </Input>
          </ModalBody>
          <ModalFooter className="flex-col items-start">
            <Button
              onPress={() => {
                setShowModal3(true);
              }}
              className="w-full"
            >
              <ButtonText>Continue</ButtonText>
            </Button>
            <Text size="sm" className="">
              Didn't receive the email?
              <Link className="">
                <LinkText
                  size="xs"
                  className="text-typography-700 font-semibold"
                >
                  Click to resend
                </LinkText>
              </Link>
            </Text>
            <HStack space="xs" className="items-center">
              <Button
                variant="link"
                size="sm"
                onPress={() => {
                  setShowModal2(false);
                }}
                className="gap-1"
              >
                <ButtonIcon as={ArrowLeftIcon} />
                <ButtonText>Back to login</ButtonText>
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        isOpen={showModal3}
        onClose={() => {
          setShowModal3(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader className="flex-col items-start gap-0.5">
            <Heading>Set new password</Heading>
            <Text size="sm">
              Almost done. Enter your new password and you are all set.
            </Text>
          </ModalHeader>
          <ModalBody className="" contentContainerClassName="gap-3">
            <Input>
              <InputField placeholder="New password" />
            </Input>
            <Input>
              <InputField placeholder="Confirm new password" />
            </Input>
          </ModalBody>
          <ModalFooter className="flex-col items-start">
            <Button
              onPress={() => {
                setShowModal(false);
                setShowModal2(false);
                setShowModal3(false);
              }}
              className="w-full"
            >
              <ButtonText>Submit</ButtonText>
            </Button>
            <Button
              variant="link"
              size="sm"
              onPress={() => {
                setShowModal3(false);
              }}
              className="gap-1"
            >
              <ButtonIcon as={ArrowLeftIcon} />
              <ButtonText>Back to login</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Onboarding Message"}>
  {props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Dashboard</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[375px]">
          <Image
            source={{
              uri: 'https://gluestack.github.io/public-blog-video-assets/Image%20Element.png',
            }}
            alt="image"
            className="h-[185px] w-full rounded"
          />
          <ModalBody className="mb-5" contentContainerClassName="">
            <Heading size="md" className="text-typography-950 text-center">
              Welcome to the dashboard
            </Heading>
            <Text size="sm" className="text-typography-500 text-center">
              We are glad to have you on board, Here are some quick tips to let
              you up and running.
            </Text>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button
              variant="outline"
              action="secondary"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="flex-grow"
            >
              <ButtonText>Skip</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              size="sm"
              className="flex-grow"
            >
              <ButtonText>Next</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Delete Post"}>
  {props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Delete Post</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[305px] items-center">
          <ModalHeader>
            <Box className="w-[56px] h-[56px] rounded-full bg-background-error items-center justify-center">
              <Icon as={TrashIcon} className="stroke-error-600" size="xl" />
            </Box>
          </ModalHeader>
          <ModalBody className="mt-0 mb-4">
            <Heading size="md" className="text-typography-950 mb-2 text-center">
              Delete blog post
            </Heading>
            <Text size="sm" className="text-typography-500 text-center">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </Text>
          </ModalBody>
          <ModalFooter className="w-full">
            <Button
              variant="outline"
              action="secondary"
              size="sm"
              onPress={() => {
                setShowModal(false);
              }}
              className="flex-grow"
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false);
              }}
              size="sm"
              className="flex-grow"
            >
              <ButtonText>Delete</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );}}
</ComponentPreviewer>

<ComponentPreviewer props={{}} title={"Invite Friends to Project"}>
  {props => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Invite</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalBackdrop />
        <ModalContent className="max-w-[395px]">
          <ModalHeader className="gap-2 items-start">
            <VStack className="gap-1">
              <Heading size="md" className="text-typography-950">
                Invite your team
              </Heading>
              <Text size="sm" className="text-typography-500">
                You have created a new project! Invite colleagues to collaborate
                on this project.
              </Text>
            </VStack>
            <ModalCloseButton>
              <Icon as={CloseIcon} className="stroke-background-500" />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody
            className="mb-0"
            contentContainerClassName="gap-4 space-between flex-row items-center"
          >
            <Input variant="outline" size="sm" className="flex-1">
              <InputField placeholder="join.untitledui.com/personalproject" />
            </Input>
            <Pressable className="h-9 w-9 justify-center items-center border border-outline-300 rounded">
              <Icon as={CopyIcon} className="stroke-background-800" />
            </Pressable>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );}}
</ComponentPreviewer>
        </ScrollView>
  );
}