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
} from '@gluestack-ui/themed';

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
          sections={DATA}
          keyExtractor={(item: any, index: any) => item + index}
          renderItem={({ item }: any) => (
            <ActionsheetItem onPress={handleClose}>
              <ActionsheetItemText
                dataSet={{
                  'component-props': JSON.stringify({
                    'is-text-style': true,
                    'component-name': 'Text',
                    'size': 'md',
                  }),
                }}
              >
                {item}
              </ActionsheetItemText>
            </ActionsheetItem>
          )}
          renderSectionHeader={({ section: { title, data } }: any) => (
            <ActionsheetSectionHeaderText
              dataSet={{
                'component-props': JSON.stringify({
                  'is-text-style': true,
                  'component-name': 'Heading',
                  'size': 'xs',
                }),
              }}
            >
              {title} ({data.length})
            </ActionsheetSectionHeaderText>
          )}
        />
      </ActionsheetContent>
    </Actionsheet>
  );
};

export default ActionsheetWithSectionlist;

export { Actionsheet, Button };
