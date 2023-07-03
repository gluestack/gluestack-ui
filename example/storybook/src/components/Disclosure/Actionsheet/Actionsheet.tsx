import React, { useState } from 'react';
import Wrapper from '../../Wrapper';
import {
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Text,
} from '../../../ui-components';

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Wrapper>
      <Button>
        <Button.Text>Open2</Button.Text>
        <Button onPress={handleClose}>
          <Button.Text>Open3</Button.Text>
        </Button>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Sheet
        showActionsheet={showActionsheet}
        setShowActionsheet={setShowActionsheet}
        handleClose={handleClose}
      />

      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
      <Button>
        <Button.Text>Open2</Button.Text>
      </Button>
    </Wrapper>
  );
}

const Sheet = ({ showActionsheet, handleClose }: any) => {
  return (
    <Actionsheet isOpen={showActionsheet} onClose={handleClose}>
      <Actionsheet.Backdrop />
      <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Delete</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Share</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Play</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Favourite</Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item onPress={handleClose}>
          <Actionsheet.ItemText>Cancel</Actionsheet.ItemText>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
export default ActionsheetExample;

export {
  Actionsheet,
  Button,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  Input,
  AddIcon,
  Image,
  Text,
  useState,
};
