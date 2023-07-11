import React, { useCallback } from 'react';

import { Actionsheet, Button, Center } from '../../../ui-components';
import { useEffect } from 'react';

export function ActionsheetExample({ ...props }) {
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
      <Actionsheet.Item onPress={handleClose}>
        <Actionsheet.ItemText>{title}</Actionsheet.ItemText>
      </Actionsheet.Item>
    ),
    [handleClose]
  );

  return (
    <Center>
      <Button
        onPress={() => {
          setShowActionsheet(!showActionsheet);
        }}
      >
        <Button.Text>Open</Button.Text>
      </Button>
      <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
        <Actionsheet.Backdrop />
        <Actionsheet.Content>
          <Actionsheet.DragIndicatorWrapper>
            <Actionsheet.DragIndicator />
          </Actionsheet.DragIndicatorWrapper>
          <Actionsheet.FlatList
            data={DATA}
            renderItem={({ item }: any) => <Item title={item.title} />}
            keyExtractor={(item: any) => item.id}
          />
        </Actionsheet.Content>
      </Actionsheet>
    </Center>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
