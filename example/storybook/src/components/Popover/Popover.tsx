/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { TextInput } from 'react-native';
import Wrapper from '../Wrapper';
import { Popover, Text, Pressable } from '../../ui-components';
export const PopoverStory = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [text, setText] = React.useState('');
  const handleClose = () => {
    setIsOpen(false);
  };
  const triggerRef = React.useRef(null);

  return (
    <>
      <Wrapper>
        <TextInput
          onFocus={() => {
            setIsOpen(true);
          }}
          style={{ marginBottom: 10, borderWidth: 1, width: 100 }}
          ref={triggerRef}
        />
        <TextInput
          onFocus={() => {
            setIsOpen(true);
          }}
          style={{ marginBottom: 10, borderWidth: 1, width: 100 }}
          ref={triggerRef}
        />
        <Popover
          isOpen={isOpen}
          onClose={handleClose}
          placement="bottom"
          triggerRef={triggerRef}
          trigger={(triggerProps: any) => {
            return (
              <Pressable {...triggerProps}>
                <Text style={{ padding: 10, backgroundColor: 'red' }}>
                  Popover
                </Text>
              </Pressable>
            );
          }}
        >
          <Popover.Backdrop />
          <Popover.Content>
            <Popover.Body>
              <Pressable>
                <Text>Here 1</Text>
              </Pressable>
            </Popover.Body>
          </Popover.Content>
        </Popover>
      </Wrapper>
    </>
  );
};
