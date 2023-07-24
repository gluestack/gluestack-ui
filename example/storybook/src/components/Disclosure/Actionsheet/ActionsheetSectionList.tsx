import React, { useCallback, useEffect } from 'react';

import { Actionsheet, Button } from '../../../ui-components';

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
      <Actionsheet.Backdrop />
      <Actionsheet.Content>
        <Actionsheet.DragIndicatorWrapper>
          <Actionsheet.DragIndicator />
        </Actionsheet.DragIndicatorWrapper>
        <Actionsheet.SectionList
          sections={DATA}
          keyExtractor={(item: any, index) => item + index}
          renderItem={({ item }: any) => (
            <Actionsheet.Item onPress={handleClose}>
              <Actionsheet.ItemText>{item}</Actionsheet.ItemText>
            </Actionsheet.Item>
          )}
          renderSectionHeader={({ section: { title, data } }: any) => (
            <Actionsheet.SectionHeaderText>
              {title} ({data.length})
            </Actionsheet.SectionHeaderText>
          )}
        />
      </Actionsheet.Content>
    </Actionsheet>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
