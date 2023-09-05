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
  AddIcon,
  Image,
  config,
  Text,
  Center,
} from '@gluestack-ui/themed';

function ActionsheetStory({ showActionsheetProp, ...props }: any) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Center>
      <Button onPress={() => setShowActionsheet(true)}>
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
}

function FigmaActionsheetStory({ ...props }: any) {
  return (
    <Center w={900} h={400}>
      <ActionsheetContent {...props} w="$full" _experimentalContent={true}>
        <ActionsheetDragIndicatorWrapper>
          <ActionsheetDragIndicator />
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetItem>
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Delete
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Share
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Play
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Favourite
          </ActionsheetItemText>
        </ActionsheetItem>
        <ActionsheetItem>
          <ActionsheetItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Cancel
          </ActionsheetItemText>
        </ActionsheetItem>
      </ActionsheetContent>
    </Center>
  );
}

export default FigmaActionsheetStory;

export {
  ActionsheetStory,
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
  AddIcon,
  Image,
  Text,
  useState,
  config,
};
