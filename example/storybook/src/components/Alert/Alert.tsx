import React from 'react';
import { InfoIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import { Root, Icon, Text } from '../styled-components/alert';

const Alert: any = Root;
Alert.Icon = Icon;
Alert.Text = Text;

export function AlertTemp({ ...props }: any) {
  return (
    <Wrapper>
      <Alert {...props}>
        <Alert.Icon>
          <InfoIcon />
        </Alert.Icon>
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Wrapper>
  );
}

export default AlertTemp;
export { Alert };
export { InfoIcon, Center } from '@gluestack/design-system';
