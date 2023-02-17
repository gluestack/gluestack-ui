import React from 'react';
import { InfoIcon } from '@gluestack/design-system';
import Wrapper from '../Wrapper';
import { Root, Icon, Text } from '../styled-components/alert';

const Alert: any = Root;
Alert.Icon = Icon;
Alert.Text = Text;

export function AlertTemp({ style = 'subtle-success', action, ...props }: any) {
  return (
    <Wrapper>
      <Alert style={style} action={action} {...props}>
        <Alert.Icon>
          <InfoIcon sx={{ width: 18, height: 18 }} />
        </Alert.Icon>
        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Wrapper>
  );
}

export default AlertTemp;
export { Alert };
export { InfoIcon, Center } from '@gluestack/design-system';
