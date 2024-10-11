import React from 'react';
import { Tabs } from '../../index';

const CodeBlockTab = ({ children, ...props }: any) => {
  return (
    <Tabs.Tab
      bg="transparent"
      py="$2"
      px="$4"
      boxShadow="none"
      rounded="$none"
      sx={{
        ':active': {
          borderBottomColor: '$primary400',
          borderBottomWidth: '$2',
          boxShadow: 'none',
          rounded: '$none',
        },
      }}
      {...props}
    >
      {children}
    </Tabs.Tab>
  );
};

export default CodeBlockTab;
