import React from 'react';
import { Text } from '@gluestack/design-system';

import { createPopover } from '@universa11y/popover';
import {
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
} from '../styled-components/popover';

const Popover = createPopover({
  Root,
  Arrow,
  Content,
  Header,
  Footer,
  Body,
  Backdrop,
  CloseButton,
});

import Wrapper from '../Wrapper';

export const PopoverStory = ({ placement }: any) => {
  return (
    <>
      <Wrapper>
        <Popover
          placement={'left top'}
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
          <Popover.Content>
            {/* <Popover.Arrow />
          <Popover.CloseButton></Popover.CloseButton>
          {/* <Popover.Header>
            <Text>Delete Customer</Text>
          </Popover.Header> */}
            <Popover.Body>
              <Text>This will</Text>
            </Popover.Body>
            {/* <Popover.Footer></Popover.Footer> */}
          </Popover.Content>
        </Popover>
      </Wrapper>
    </>
  );
};
