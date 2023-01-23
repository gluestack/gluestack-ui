import {
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
} from './styled-component';
import { createActionsheet } from '@universa11y/actionsheet';
import React from 'react';
import { useState } from 'react';
import { Pressable } from 'react-native';
export { Svg, G, Path, Polygon, Line, Circle, Rect } from 'react-native-svg';

const ActionsheetTemp = createActionsheet({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
});

export const Actionsheet = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <>
      <Pressable onPress={handleClose}>Click me</Pressable>
      <ActionsheetTemp isOpen={showActionsheet} onClose={handleClose}>
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
          <ActionsheetTemp.Item onPress={handleClose}>
            <ActionsheetTemp.ItemText>Cancel</ActionsheetTemp.ItemText>
          </ActionsheetTemp.Item>
        </ActionsheetTemp.Content>
      </ActionsheetTemp>
      {/* @ts-ignore */}
    </>
  );
};
