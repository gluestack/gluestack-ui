import React, { useMemo, useCallback } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetScrollView,
  Button,
} from '@custom-ui/themed';
import { useEffect } from 'react';

const ActionsheetWithScrollView = ({
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

  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `Item ${index}`),
    []
  );

  const renderItem = useCallback(
    (item: any) => (
      <ActionsheetItem onPress={handleClose} key={item}>
        <ActionsheetItemText>{item}</ActionsheetItemText>
      </ActionsheetItem>
    ),
    [handleClose]
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
        <ActionsheetScrollView h="$56">
          {data.map(renderItem)}
        </ActionsheetScrollView>
      </ActionsheetContent>
    </Actionsheet>
  );
};
ActionsheetWithScrollView.description =
  'This is an example of an Actionsheet with a list of items inside a ScrollView.';

export default ActionsheetWithScrollView;

export { Actionsheet, Button };
