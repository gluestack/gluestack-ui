import React from 'react';

import Wrapper from '../Wrapper';
import { Alert } from '../../ui-components';
import { Center } from '../../ui-components';
import { InfoIcon } from '../../ui-components';

export function AlertTemp({ ...props }: any) {
  return (
    <Wrapper>
      <Center>
        <Alert {...props}>
          <Alert.Icon>
            <InfoIcon />
          </Alert.Icon>
          <Alert.Text>Selection successfully moved!</Alert.Text>
        </Alert>
      </Center>
    </Wrapper>
  );
}

export default AlertTemp;
