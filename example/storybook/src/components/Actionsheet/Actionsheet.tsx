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

export const AccessibleActionsheet = createActionsheet({
  Root,
  Backdrop,
  Item,
  ItemText,
  DragIndicator,
  IndicatorWrapper,
  Content,
}) as any;

export const Actionsheet = () => {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const handleClose = () => setShowActionsheet(!showActionsheet);
  return (
    <Wrapper>
      <Pressable onPress={handleClose}>
        <Text>Click me</Text>
      </Pressable>
      <AccessibleActionsheet isOpen={showActionsheet} onClose={handleClose}>
        <AccessibleActionsheet.Backdrop />
        <AccessibleActionsheet.Content>
          <AccessibleActionsheet.DragIndicatorWrapper>
            <AccessibleActionsheet.DragIndicator />
          </AccessibleActionsheet.DragIndicatorWrapper>

          <AccessibleActionsheet.Item onPress={() => {}}>
            <AccessibleActionsheet.ItemText>
              Share
            </AccessibleActionsheet.ItemText>
          </AccessibleActionsheet.Item>
          <AccessibleActionsheet.Item onPress={() => {}}>
            <AccessibleActionsheet.ItemText>
              Delete
            </AccessibleActionsheet.ItemText>
          </AccessibleActionsheet.Item>
          <AccessibleActionsheet.Item onPress={() => {}} isDisabled>
            <AccessibleActionsheet.ItemText>
              Play
            </AccessibleActionsheet.ItemText>
          </AccessibleActionsheet.Item>
          <AccessibleActionsheet.Item onPress={() => {}}>
            <AccessibleActionsheet.ItemText>
              Favourite
            </AccessibleActionsheet.ItemText>
          </AccessibleActionsheet.Item>
          <AccessibleActionsheet.Item onPress={handleClose}>
            <AccessibleActionsheet.ItemText>
              Cancel
            </AccessibleActionsheet.ItemText>
          </AccessibleActionsheet.Item>
        </AccessibleActionsheet.Content>
      </AccessibleActionsheet>
    </Wrapper>
  );
};

export default Actionsheet;
