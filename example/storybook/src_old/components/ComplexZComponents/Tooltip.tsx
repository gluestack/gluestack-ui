import { ActionsheetTemp } from '../Actionsheet/Actionsheet';
import { MenuTemp } from '../Menu/Menu';
import { TooltipTemp } from '../Tooltip/Tooltip';
import { ModalTemp } from '../Modal/Modal';
import { IconStyled } from '../Modal/styled-component';
import { PopoverTemp } from '../Popover/Popover';
import { AlertDialogTemp } from '../AlertDialog/AlertDialog';
import { createIcon } from '@universa11y/icon';
// import { createTooltip } from '@universa11y/tooltip';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { Wrapper } from '../Wrapper';
const CloseIcon = createIcon({
  Root: IconStyled,
  viewBox: '0 0 24 24',
  d: 'M12 9.77778L4.22222 2L2 4.22222L9.77778 12L2 19.7778L4.22222 22L12 14.2222L19.7778 22L22 19.7778L14.2222 12L22 4.22222L19.7778 2L12 9.77778Z',
});

export const Tooltip = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);
  const handleClose = () => setShowAlertDialog(!showAlertDialog);
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleCloseActionsheet = () => setShowActionsheet(!showActionsheet);
  return (
    <Wrapper>
      <Pressable onPress={() => setShowModal(true)}>
        <Text>Click Me</Text>
      </Pressable>
      <ModalTemp
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <ModalTemp.Backdrop />
        <ModalTemp.Content>
          <ModalTemp.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </ModalTemp.CloseButton>
          <ModalTemp.Header>
            <Text>Return Policy Modal</Text>
          </ModalTemp.Header>
          <ModalTemp.Body>
            <TooltipTemp
              placement="bottom"
              trigger={(triggerProps: any) => {
                return (
                  <Pressable
                    style={{
                      backgroundColor: 'blue',
                      padding: 10,
                      borderRadius: 4,
                      width: 100,
                    }}
                    {...triggerProps}
                  >
                    <Text style={{ color: 'white' }}>Tooltip</Text>
                  </Pressable>
                  // <Center>
                  //   <Button {...triggerProps}>
                  //     <Button.Text>More</Button.Text>
                  //   </Button>
                  // </Center>
                );
              }}
            >
              <TooltipTemp.Content
                sx={{
                  color: '$white',
                  px: '$2',
                  py: '$1',
                  fontSize: 12,
                }}
              >
                {/* <Text
            sx={{
              style: { color: '$white', px: '$2', py: '$1', fontSize: 12 },
            }}
          >
            {text}
          </Text> */}
                <Text>Hello world</Text>
              </TooltipTemp.Content>
            </TooltipTemp>
            <Text>{`Create a 'Return Request' under "My Orders"`}</Text>
            <Pressable onPress={handleClose}>
              <Text>Open Alert Dialog</Text>
            </Pressable>
            <Pressable onPress={handleCloseActionsheet}>
              <Text>Open Actionsheet</Text>
            </Pressable>
            <PopoverTemp
              placement={'top'}
              trigger={(triggerProps: any) => {
                return (
                  <Pressable style={{ width: 100 }} {...triggerProps}>
                    <Text style={{ padding: 10, backgroundColor: 'red' }}>
                      Popover
                    </Text>
                  </Pressable>
                );
              }}
            >
              <PopoverTemp.Content>
                {/* <PopoverTemp.Arrow />
          <PopoverTemp.CloseButton></PopoverTemp.CloseButton>
          {/* <PopoverTemp.Header>
            <Text>Delete Customer</Text>
          </PopoverTemp.Header> */}

                <Text>This will</Text>
                {/* </PopoverTemp.Body>
          <PopoverTemp.Footer></PopoverTemp.Footer> */}
              </PopoverTemp.Content>
            </PopoverTemp>
          </ModalTemp.Body>
          <ModalTemp.Footer>
            <Pressable
              // variant="solid"
              onPress={() => {
                setShowModal(false);
              }}
            >
              <Text>Cancel</Text>
            </Pressable>
          </ModalTemp.Footer>
        </ModalTemp.Content>
      </ModalTemp>

      {/* @ts-ignore */}
      <AlertDialogTemp isOpen={showAlertDialog} onClose={handleClose}>
        <AlertDialogTemp.Backdrop />
        <AlertDialogTemp.Content>
          <AlertDialogTemp.CloseButton>
            <CloseIcon sx={{ w: 16, h: 16 }} />
          </AlertDialogTemp.CloseButton>
          <AlertDialogTemp.Header>
            {/* @ts-ignore */}
            <Text variant="AlertDialogTempHeader">Return Policy</Text>
          </AlertDialogTemp.Header>
          <AlertDialogTemp.Body>
            <Text>
              {`Create a 'Return Request' under “My Orders" section of App/Website. Follow the screens that come up after tapping on the 'Return' button. Please make a note of the Return ID that we generate at the end of the process. Keep the item ready for pick up or ship it to us basis on the return mode.`}
            </Text>
          </AlertDialogTemp.Body>
          <AlertDialogTemp.Footer>
            <Pressable onPress={handleClose}>
              <Text>Cancel</Text>
            </Pressable>
          </AlertDialogTemp.Footer>
        </AlertDialogTemp.Content>
      </AlertDialogTemp>

      <ActionsheetTemp
        isOpen={showActionsheet}
        onClose={handleCloseActionsheet}
      >
        <ActionsheetTemp.Backdrop />
        {/* @ts-ignore */}
        <ActionsheetTemp.Content>
          <ActionsheetTemp.DragIndicatorWrapper>
            <ActionsheetTemp.DragIndicator />
          </ActionsheetTemp.DragIndicatorWrapper>

          <ActionsheetTemp.Item onPress={() => {}}>
            <ActionsheetTemp.ItemText>Share</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
          <ActionsheetTemp.Item onPress={() => {}}>
            <ActionsheetTemp.ItemText>Delete</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
          <ActionsheetTemp.Item onPress={() => {}} isDisabled>
            <ActionsheetTemp.ItemText>Play</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
          <ActionsheetTemp.Item onPress={() => {}}>
            <ActionsheetTemp.ItemText>Favourite</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
          <MenuTemp
            placement={'bottom'}
            trigger={(triggerProps: any) => {
              return (
                <Pressable {...triggerProps}>
                  <Text>Menu</Text>
                </Pressable>
              );
            }}
          >
            <MenuTemp.Content>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Arial</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Nunito Sans</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Roboto</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Poppins</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>SF Pro</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Helvetica</Text>
              </MenuTemp.Item>
              <MenuTemp.Item isDisabled>
                <Text style={{ padding: 12 }}>Sofia</Text>
              </MenuTemp.Item>
              <MenuTemp.Item>
                <Text style={{ padding: 12 }}>Cookie</Text>
              </MenuTemp.Item>
            </MenuTemp.Content>
            <MenuTemp.Backdrop />
          </MenuTemp>
          <ActionsheetTemp.Item onPress={handleCloseActionsheet}>
            <ActionsheetTemp.ItemText>Cancel</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
        </ActionsheetTemp.Content>
      </ActionsheetTemp>
    </Wrapper>
  );
};

export default Tooltip;
