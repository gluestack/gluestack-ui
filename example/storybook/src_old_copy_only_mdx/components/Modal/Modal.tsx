import {
  Root,
  Backdrop,
  Body,
  CloseButton,
  Content,
  Footer,
  Header,
  IconStyled as IconRoot,
} from './styled-component';
import { createModal } from '@universa11y/modal';
import { createIcon } from '@universa11y/icon';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Wrapper } from '../Wrapper';

export const AccessibleModal = createModal({
  Root,
  Content,
  CloseButton,
  Header,
  Footer,
  Body,
  Backdrop,
}) as any;

export const CloseIcon = createIcon({
  Root: IconRoot,
  viewBox: '0 0 24 24',
  d: 'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
}) as any;

export const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Wrapper>
      <Pressable onPress={() => setShowModal(true)}>
        <Text>Click Me</Text>
      </Pressable>
      <AccessibleModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <AccessibleModal.Backdrop />
        <AccessibleModal.Content>
          <AccessibleModal.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </AccessibleModal.CloseButton>
          <AccessibleModal.Header>
            <Text>Return Policy</Text>
          </AccessibleModal.Header>
          <AccessibleModal.Body>
            <Text>
              {`Create a 'Return Request' under "My Orders" section of App/Website. Follow the screens that come up after tapping on the 'Return' button. Please make a note of the Return ID that we generate at the end of the process. Keep the item ready for pick up or ship it to us basis on the return mode.`}
            </Text>
          </AccessibleModal.Body>
          <AccessibleModal.Footer>
            <Pressable
              // variant="solid"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text>Cancel</Text>
            </Pressable>
          </AccessibleModal.Footer>
        </AccessibleModal.Content>
      </AccessibleModal>
    </Wrapper>
  );
};

export default Modal;
