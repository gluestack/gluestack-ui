import React, { useState } from 'react';
import {
  Actionsheet,
  ActionsheetIcon,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetFlatList,
  ActionsheetScrollView,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetVirtualizedList,
  Button,
  ButtonText,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  AddIcon,
  Image,
  Text,
  Center,
} from '@custom-ui/themed';
import { config } from '@custom-ui/config';

const ActionsheetBasic = ({ showActionsheetProp, ...props }: any) => {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Center>
      <Button>
        <ButtonText>Open</ButtonText>
      </Button>
      <Actionsheet
        isOpen={showActionsheet || showActionsheetProp}
        onClose={handleClose}
        {...props}
      >
        <ActionsheetBackdrop />
        <ActionsheetContent>
          <ActionsheetDragIndicatorWrapper>
            <ActionsheetDragIndicator />
          </ActionsheetDragIndicatorWrapper>
          <ActionsheetItem onPress={handleClose} isDisabled>
            <ActionsheetItemText>Delete</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Share</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Play</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Favourite</ActionsheetItemText>
          </ActionsheetItem>
          <ActionsheetItem onPress={handleClose}>
            <ActionsheetItemText>Cancel</ActionsheetItemText>
          </ActionsheetItem>
        </ActionsheetContent>
      </Actionsheet>
    </Center>
  );
};

function FigmaActionsheetStory({ ...props }: any) {
  return (
    <Box w={900}>
      <ActionsheetContent {...props} w="$full" _experimentalContent={true}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem>
          <ActionsheetItemText>Delete</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText>Share</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText>Play</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText>Favourite</ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText>Cancel</ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Box>
  );
}

ActionsheetBasic.description =
  'This is a basic Actionsheet component example. Actionsheets are used to display a list of actions that can be performed on a page.';

export default ActionsheetBasic;

export {
  FigmaActionsheetStory,
  Actionsheet,
  ActionsheetIcon,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetFlatList,
  ActionsheetScrollView,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  ActionsheetVirtualizedList,
  Button,
  ButtonText,
  VStack,
  HStack,
  Icon,
  Box,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
  AddIcon,
  Image,
  Text,
  useState,
  config,
};
