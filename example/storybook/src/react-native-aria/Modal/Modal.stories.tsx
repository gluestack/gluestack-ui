import React from 'react';

import { View, Pressable } from 'react-native';
import { Wrapper } from '../Wrapper';
import type { AriaDialogProps } from 'react-aria';
import { useDialog } from '@react-native-aria/dialog';
import type { ComponentMeta } from '@storybook/react-native';
import DocsContainer from '@storybook/addon-docs';

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

function Dialog({ title, children, ...props }: DialogProps) {
  let ref = React.useRef(null);
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} style={{ padding: 30 }}>
      {title && (
        <h3 {...titleProps} style={{ marginTop: 0 }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

const ModalExample = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <View style={{ marginTop: 100 }}>
      <Pressable onPress={() => setIsOpen(true)}>Open</Pressable>
      {isOpen && (
        <Dialog title="Enter your name">
          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="first-name">First Name:</label>
            <input id="first-name" />
            <label htmlFor="last-name">Last Name:</label>
            <input id="last-name" />
            <Pressable
              onPress={() => setIsOpen(false)}
              style={{ marginTop: 10 }}
            >
              Submit
            </Pressable>
          </form>
        </Dialog>
      )}
    </View>
  );
};

const Example = () => {
  return (
    <Wrapper>
      <ModalExample />
    </Wrapper>
  );
};

const ModalMeta: ComponentMeta<any> = {
  title: 'react-native-aria/modal',
  component: Example,
  parameters: {
    docs: {
      container: DocsContainer,
      page: () => <></>,
    },
  },
};

export default ModalMeta;
