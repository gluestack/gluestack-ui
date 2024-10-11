import React from 'react';
import { Tabs } from '@gluestack/design-system';

const CodeBlockTabList = ({ children, ...props }: any) => {
  return (
    <Tabs.TabList className="bg-transparent" {...props}>
      {children}
    </Tabs.TabList>
  );
};

export default CodeBlockTabList;
