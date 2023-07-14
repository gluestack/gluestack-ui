import React, { useMemo, useCallback } from 'react';

import { Actionsheet, Button } from '../../../ui-components';
import { useEffect } from 'react';

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
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
      <Actionsheet.Item onPress={handleClose}>
        <Actionsheet.ItemText>{title}</Actionsheet.ItemText>
      </Actionsheet.Item>
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
      <Actionsheet.Backdrop />
      <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.VirtualizedList
          data={data}
          initialNumToRender={5}
          renderItem={({ item }: any) => <Item title={item.title} />}
          keyExtractor={(item: any) => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
