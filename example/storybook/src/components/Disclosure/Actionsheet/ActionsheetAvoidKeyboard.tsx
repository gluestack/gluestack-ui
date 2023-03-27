import React, { useEffect } from 'react';
import Wrapper from '../../Wrapper';
import { Actionsheet, Button, VStack, Input } from '../../../ui-components';
import { KeyboardAvoidingView, Platform } from 'react-native';

export function ActionsheetExample({ ...props }) {
  const [showActionsheet, setShowActionsheet] = React.useState(
    props.showActionsheet
  );

  useEffect(() => {
    setShowActionsheet(props.showActionsheet);
  }, [props.showActionsheet]);

  const handleClose = () => setShowActionsheet(!showActionsheet);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''}>
      <Wrapper>
        <Button onPress={handleClose}>
          <Button.Text>Open</Button.Text>
        </Button>
        <Actionsheet isOpen={showActionsheet} onClose={handleClose} {...props}>
          <Actionsheet.Backdrop />
          <Actionsheet.Content maxHeight="75%">
            <Actionsheet.DragIndicatorWrapper>
              <Actionsheet.DragIndicator />
            </Actionsheet.DragIndicatorWrapper>
            <Actionsheet.ScrollView>
              <VStack p={16} space="md">
                {[...Array(20).keys()].map(() => {
                  return (
                    <Input {...props}>
                      <Input.Input placeholder="Enter Text here" />
                    </Input>
                  );
                })}

                <Button onPress={handleClose}>
                  <Button.Text>Close</Button.Text>
                </Button>
              </VStack>
            </Actionsheet.ScrollView>
          </Actionsheet.Content>
        </Actionsheet>
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

export default ActionsheetExample;

export { Actionsheet, Button };
