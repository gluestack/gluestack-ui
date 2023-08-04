import React, { useMemo, useCallback } from 'react';

import { Actionsheet, Button } from '../../../ui-components';
import { useEffect } from 'react';
import { Motion } from '@legendapp/motion';

function ActionsheetExample({
  showActionsheet: showActionsheetProp = true,
  ...props
}) {
  const [showActionsheet, setShowActionsheet] = React.useState(false);

  const handleClose = useCallback(
    () => setShowActionsheet(false),
    [setShowActionsheet]
  );

  // variables
  const data = useMemo(
    () =>
      Array(500)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <Actionsheet.Item onPress={handleClose} key={item}>
        <Actionsheet.ItemText>{item}</Actionsheet.ItemText>
      </Actionsheet.Item>
    ),
    [handleClose]
  );

  return (
    <>
      <Button
        onPress={() => {
          setShowActionsheet(!showActionsheet);
        }}
      >
        <Button.Text>Hello show</Button.Text>
      </Button>
      {/* <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}> */}
      {/* <Actionsheet.Backdrop /> */}
      {/* <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.ScrollView>{data.map(renderItem)}</Actionsheet.ScrollView>
      </Actionsheet.Content> */}
      {/* </Actionsheet> */}
      <Motion.View
        style={{ height: 100, width: 100 }}
        initial={{
          backgroundColor: 'red',
          opacity: 0,
          scale: 0.7,
        }}
        animate={{
          backgroundColor: showActionsheet ? 'blue' : 'pink',
          opacity: showActionsheet ? 1 : 0,
          scale: showActionsheet ? 1 : 0.5,
        }}
      />
    </>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
