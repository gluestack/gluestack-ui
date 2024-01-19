import React, { useMemo, useCallback } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetVirtualizedList,
  Button,
} from '@custom-ui/themed';
import { useEffect } from 'react';

const ActionsheetWithVirtualizedList = ({
  showActionsheet: showActionsheetProp = true,
  ...props
}) => {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = useCallback(
    () => setShowActionsheet(false),
    [setShowActionsheet]
  );

  const getItem = (_data: any, index: number): any => ({
    id: Math.random().toString(12).substring(0),
    title: _data[index],
  });

  const getItemCount = (_data: any) => _data.length;

  const Item = useCallback(
    ({ title }: any) => (
      <ActionsheetItem onPress={handleClose}>
        <ActionsheetItemText>{title}</ActionsheetItemText>
      </ActionsheetItem>
    ),
    [handleClose]
  );

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index + 1}`),
    []
  );

  return (
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
        <ActionsheetVirtualizedList
          h="$56"
          data={data}
          initialNumToRender={5}
          renderItem={({ item }: any) => <Item title={item.title} />}
          keyExtractor={(item: any) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

ActionsheetWithVirtualizedList.description =
  'This is an example of actionsheet with items rendered using VirtualizedList ';

export default ActionsheetWithVirtualizedList;

export { Actionsheet, Button };
