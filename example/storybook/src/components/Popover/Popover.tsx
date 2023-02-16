import Root from './styled-component/Root';
import Arrow from './styled-component/Arrow';
import Content from './styled-component/Content';
import Header from './styled-component/Header';
import Footer from './styled-component/Footer';
import Body from './styled-component/Body';
import Backdrop from './styled-component/Backdrop';
import CloseButton from './styled-component/CloseButton';

import { createPopover } from '@universa11y/popover';
import React from 'react';
import { Text, Pressable } from 'react-native';
import { Wrapper } from '../Wrapper';

export const PopoverTemp: any = createPopover({
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
      <PopoverTemp
        placement={'left'}
        trigger={(triggerProps: any) => {
          return (
            <Pressable
              style={{ marginLeft: 300, marginTop: 300, width: 100 }}
              {...triggerProps}
            >
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
    </Wrapper>
  );
};

export default Popover;
