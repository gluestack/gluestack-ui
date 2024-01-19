import React, { useCallback } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetFlatList,
  Button,
} from '@custom-ui/themed';
import { useEffect } from 'react';

const ActionsheetWithFlatList = ({
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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = useCallback(
    ({ title }: any) => (
      <ActionsheetItem onPress={handleClose}>
        <ActionsheetItemText>{title}</ActionsheetItemText>
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
        <ActionsheetFlatList
          data={DATA}
          renderItem={({ item }: any) => <Item title={item.title} />}
          keyExtractor={(item: any) => item.id}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

ActionsheetWithFlatList.description =
  'This is an example of actionsheet with items rendered using FlatList';

export default ActionsheetWithFlatList;

export { Actionsheet, Button };
