import React from 'react';
import { Alert } from '@gluestack/ui-compiled';
import { InfoIcon } from '@gluestack/ui-compiled';
import Wrapper from '../Wrapper';

export function AlertTemp({ style = 'subtle-success', action, ...props }: any) {
  return (
    <Wrapper>
      <Alert style={style} action={action} {...props}>
        {/* @ts-ignore */}
        <Alert.Icon>
          <InfoIcon sx={{ width: 18, height: 18 }} />
          {/* @ts-ignore */}
        </Alert.Icon>
        {/* @ts-ignore */}

        <Alert.Text>Selection successfully moved!</Alert.Text>
      </Alert>
    </Wrapper>
  );
}

export default AlertTemp;
export { Alert };
export { InfoIcon, Center } from '@gluestack/ui-compiled';
