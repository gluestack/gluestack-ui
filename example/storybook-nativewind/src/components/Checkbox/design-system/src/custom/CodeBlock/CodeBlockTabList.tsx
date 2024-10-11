import React from 'react';
import { Tabs } from '../../index';

const CodeBlockTabList = ({ children, ...props }: any) => {
  return (
    <Tabs.TabList bg="transparent" {...props}>
      {children}
    </Tabs.TabList>
  );
};

export default CodeBlockTabList;
