import React from 'react';
import { Text, View, Pressable } from 'react-native';

import Root from './src/components/Popover/styled-component/Root';
import Arrow from './src/components/Popover/styled-component/Arrow';
import Content from './src/components/Popover/styled-component/Content';
import Header from './src/components/Popover/styled-component/Header';
import Footer from './src/components/Popover/styled-component/Footer';
import Body from './src/components/Popover/styled-component/Body';
import Backdrop from './src/components/Popover/styled-component/Backdrop';
import CloseButton from './src/components/Popover/styled-component/CloseButton';

import { createPopover } from '@universa11y/popover';
import { Wrapper } from './src/components/Wrapper';

const PopoverTemp = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
});

export const Popover = () => {
  return (
    <Wrapper>
      <View style={{ marginTop: 100 }}>
        <PopoverTemp
          placement={'bottom'}
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
          <PopoverTemp.Content>
            {/* <PopoverTemp.Arrow />
          <PopoverTemp.CloseButton></PopoverTemp.CloseButton>
          {/* <PopoverTemp.Header>
            <Text>Delete Customer</Text>
          </PopoverTemp.Header> */}
            <PopoverTemp.Body>
              <Text>This will</Text>
            </PopoverTemp.Body>
            {/* <PopoverTemp.Footer></PopoverTemp.Footer> */}
          </PopoverTemp.Content>
        </PopoverTemp>
      </View>
    </Wrapper>
  );
};
export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //   </View>
  // );

  return (
    <>
      <Popover />
    </>
  );
}
