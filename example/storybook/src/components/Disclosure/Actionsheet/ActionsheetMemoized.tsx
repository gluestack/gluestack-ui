import React from 'react';
import { Actionsheet, Button } from '../../../ui-components';
import { Pressable, Text as RNText, View } from 'react-native';

// variables
const data = Array(1000)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function ActionsheetExample({}) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  return (
    <>
      <Pressable
        style={{ backgroundColor: 'yellow', padding: 30 }}
        onPress={() => {
          setShowActionsheet(!showActionsheet);
        }}
      >
        <RNText>Hello show</RNText>
      </Pressable>
      <ActionContent visible={showActionsheet}>
        <MemoizedActionContentData />
      </ActionContent>
    </>
  );
}
const MemoizedActionContentData = React.memo(() => {
  return data.map((item) => {
    return (
      <ActionItem key={item}>
        <ActionItemText>{item}</ActionItemText>
      </ActionItem>
    );
  });
});

const ActionContent = React.memo(({ visible, children }: any) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ display: visible ? 'flex' : 'none' }} children={children} />
  );
});

const ActionItem = React.memo(({ children }: any) => {
  return <View>{children}</View>;
});

const ActionItemText = React.memo(({ children }: any) => {
  return <RNText>{children}</RNText>;
});

export default ActionsheetExample;

export { Actionsheet, Button };
