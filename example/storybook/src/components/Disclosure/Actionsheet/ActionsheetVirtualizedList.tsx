import React, { useMemo, useCallback, memo } from 'react';

import { Actionsheet, Button } from '../../../ui-components';
import { useEffect } from 'react';
import {
  FlatList,
  VirtualizedList,
  View,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = useCallback(
    () => setShowActionsheet(false),
    [setShowActionsheet]
  );

  const handleOpen = useCallback(
    () => setShowActionsheet(true),
    [setShowActionsheet]
  );

  const getItem = (_data: any, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });

  const getItemCount = (_data: any) => _data.length;

  const Item = useCallback(
    ({ title }: any) => (
      <Pressable bg="$amber300" h="$4" w="$40">
        <Text>{title}</Text>
      </Pressable>
    ),
    []
  );

  const data = useMemo(
    () =>
      Array(500)
        .fill(0)
        .map((_, index) => `Item ${index + 1}`),
    []
  );

  return (
    <>
      <Button onPress={handleOpen}>
        <Button.Text>virtualised sheet</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        {/* <Actionsheet.Backdrop /> */}
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Button onPress={handleClose}>
            <Button.Text>virtualised sheet</Button.Text>
          </Button>
          {/* <Actionsheet.VirtualizedList
            data={data}
            initialNumToRender={5}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any) => item.id}
            getItemCount={getItemCount}
            getItem={getItem}
          /> */}
          {/* <FlatList
            data={data}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any, index: any) => index}
          /> */}

          {/* <MyComponent></MyComponent> */}
          <Actionsheet.VirtualizedList
            data={data}
            initialNumToRender={5}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any, index: any) => index}
            getItemCount={getItemCount}
            getItem={getItem}
            maxToRenderPerBatch={1}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
}

const MyComponent = memo(() => {
  // console.log('hello 111');

  const getItem = (_data: any, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });

  const getItemCount = (_data: any) => _data.length;

  const Item = useCallback(
    ({ title }: any) => (
      <Actionsheet.Item bg="$amber300" h="$4" w="$40">
        <Actionsheet.ItemText>{title}</Actionsheet.ItemText>
      </Actionsheet.Item>
    ),
    []
  );

  const data = useMemo(
    () =>
      Array(500)
        .fill(0)
        .map((_, index) => `Item ${index + 1}`),
    []
  );

  return (
    <Actionsheet.VirtualizedList
      data={data}
      initialNumToRender={5}
      renderItem={({ item }: any) => <Item title={item.title} />}
      keyExtractor={(item: any, index: any) => index}
      getItemCount={getItemCount}
      getItem={getItem}
      maxToRenderPerBatch={1}
    />
  );
});

export default ActionsheetExample;

export { Actionsheet, Button };
