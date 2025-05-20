import { ComponentPreviewer } from '@/components/component-previewer';
import { Modal } from '@/components/ui/modal';
import { ModalBackdrop } from '@/components/ui/modal';
import { ModalBody } from '@/components/ui/modal';
import { ModalContent } from '@/components/ui/modal';
import { ModalCloseButton } from '@/components/ui/modal';
import { ModalHeader } from '@/components/ui/modal';
import { ModalFooter } from '@/components/ui/modal';
import { Button } from '@/components/ui/button';
import { ButtonText } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { CloseIcon } from '@/components/ui/icon';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

export default function Example() {
  return (
    <ComponentPreviewer
      code={`function App() {
  const [showModal, setShowModal] = React.useState(false)
  return (
    <Center className="h-[300px]">
      <Button onPress={() => setShowModal(true)}>
        <ButtonText>Show Modal</ButtonText>
      </Button>
      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false)
        }}
        size="{{size}}"
      >
        <ModalBackdrop />
        <ModalContent>
          <ModalHeader>
            <Text  className="text-typography-950">
              Invite your team
            </Text>
            <ModalCloseButton>
              <Icon
                as={CloseIcon}
                size="md"
                className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Text size="sm" className="text-typography-500">
              Elevate user interactions with our versatile modals. Seamlessly
              integrate notifications, forms, and media displays. Make an impact
              effortlessly.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Cancel</ButtonText>
            </Button>
            <Button
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Explore</ButtonText>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
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
      reactLive={{ Modal, ModalBackdrop, ModalBody, ModalContent, ModalCloseButton, ModalHeader, ModalFooter, Button, ButtonText, Icon, CloseIcon, Center, Text }}
    />
  );
}