# `@gluestack-ui/modal`

A Modal is a window on top of the primary content to draw the user's attention to important information or actions. It provides a focused and interruptive way to interact with the application.

## Installation

To install the component, run the following command in your terminal. This will add the component to your project's dependencies and allow you to use it in your project.

```sh
npx gluestack-ui@latest add modal
```

## Usage

Default styling of all these components can be found in the components/core/modal file. For reference, you can view the [source code](https://github.com/gluestack/gluestack-ui/blob/main/example/storybook/src/ui-components/Modal/styled-components/index.tsx) of the styled Modal components.

```jsx
// import the styles
import {
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
} from '../components/core/modal/styled-components';
import { styled } from '../components/styled';

// import the createModal function
import { createModal } from '@gluestack-ui/modal';

// Understanding the API
const Modal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
  AnimatePresence: styled.Component, // Can be AnimatePresence from the library you are using
});

// Using the modal component
export default () => (
  <Modal>
    <ModalBackdrop />
    <ModalContent>
      <ModalHeader>
        <Heading>Confirm your request</Heading>
        <ModalCloseButton>
          <CloseIcon />
        </ModalCloseButton>
      </ModalHeader>
      <ModalBody>
        <Text>Modal Body</Text>
      </ModalBody>
      <ModalFooter>
        <Button>
          <ButtonText></ButtonText>
        </Button>
        <Button>
          <ButtonText></ButtonText>
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
```

More guides on how to get started are available
[here](https://ui.gluestack.io/docs/).
