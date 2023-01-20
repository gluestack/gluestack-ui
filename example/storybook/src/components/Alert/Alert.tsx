import { Root, Icon, Text } from './styled-component';
import { createAlert } from '@universa11y/alert';
import React from 'react';

const AlertTemp = createAlert({
  Root,
  Icon,
  Text,
});

export const Alert = () => {
  return (
    <>
      <AlertTemp>
        <AlertTemp.Icon>
          {/* <InfoIcon sx={{ style: { width: 18, height: 18 } }} /> */}
        </AlertTemp.Icon>
        <AlertTemp.Text>Selection successfully moved!</AlertTemp.Text>
      </AlertTemp>
    </>
  );
};
