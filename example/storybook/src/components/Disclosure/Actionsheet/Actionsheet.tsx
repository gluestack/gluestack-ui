import React, { useState } from 'react';
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
  Center,
} from '../../../ui-components';

function ActionsheetStory({ ...props }: any) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = () => setShowActionsheet(false);

  return (
    <Center>
      <Button
        onPress={() => {
          setShowActionsheet((prev) => !prev);
        }}
      >
        <Button.Text
          dataSet={{
            'component-props': JSON.stringify({
              'is-text-style': true,
              'component-name': 'Text',
              'size': 'md',
            }),
          }}
        >
          Open
        </Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.Item onPress={handleClose} isDisabled>
            <Actionsheet.ItemText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Delete
            </Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Share
            </Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Play
            </Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Favourite
            </Actionsheet.ItemText>
          </Actionsheet.Item>
          <Actionsheet.Item onPress={handleClose}>
            <Actionsheet.ItemText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Text',
                  'size': 'md',
                }),
              }}
            >
              Cancel
            </Actionsheet.ItemText>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

function FigmaActionsheetStory({ ...props }: any) {
  return (
    <Center w={900} h={400}>
      <Actionsheet.Content {...props} w="$full" _experimentalContent={true}>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.Item>
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Delete
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Share
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Play
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Favourite
          </Actionsheet.ItemText>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Actionsheet.ItemText
            dataSet={{
              'component-props': JSON.stringify({
                'is-text-style': true,
                'component-name': 'Text',
                'size': 'md',
              }),
            }}
          >
            Cancel
          </Actionsheet.ItemText>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Center>
  );
}

export default FigmaActionsheetStory;

export {
  ActionsheetStory,
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
