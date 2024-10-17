import React from 'react';
import { Tabs } from '@gluestack/design-system';

const CodeBlockTabs = ({ children, ...props }: any) => {
  return (
    <Tabs value={'tab-0'} className="bg-transparent" {...props}>
      {children}
    </Tabs>
  );
};

export default CodeBlockTabs;
