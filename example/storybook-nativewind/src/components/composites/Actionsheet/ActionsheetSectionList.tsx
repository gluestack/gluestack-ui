import React, { useCallback, useEffect } from 'react';

import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetItem,
  ActionsheetItemText,
  ActionsheetSectionList,
  ActionsheetSectionHeaderText,
  Button,
} from '@custom-ui/themed';

const ActionsheetWithSectionlist = ({
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
      title: 'Main dishes',
      data: ['Pizza', 'Burger', 'Risotto'],
    },
    {
      title: 'Sides',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Desserts',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

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
        <ActionsheetSectionList
          h="$56"
          sections={DATA}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({ item }: any) => (
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText>{item}</ActionsheetItemText>
            </ActionsheetItem>
          )}
          renderSectionHeader={({ section: { title, data } }: any) => (
            <ActionsheetSectionHeaderText>
              {title} ({data.length})
            </ActionsheetSectionHeaderText>
          )}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

ActionsheetWithSectionlist.description =
  'This is an example of actionsheet with items rendered using SectionList ';

export default ActionsheetWithSectionlist;

export { Actionsheet, Button };
