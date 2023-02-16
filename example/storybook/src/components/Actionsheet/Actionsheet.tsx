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
import { Pressable, Text } from 'react-native';
import { Wrapper } from '../Wrapper';
export { Svg, G, Path, Polygon, Line, Circle, Rect } from 'react-native-svg';

export const ActionsheetTemp: any = createActionsheet({
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
    <Wrapper>
      <Pressable onPress={handleClose}>
        <Text>Click me</Text>
      </Pressable>
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
    </Wrapper>
  );
};

export default Actionsheet;
