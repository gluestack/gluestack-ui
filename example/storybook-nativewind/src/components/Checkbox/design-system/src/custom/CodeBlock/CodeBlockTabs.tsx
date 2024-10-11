import React from 'react';
import { Tabs } from '../../index';

const CodeBlockTabs = ({ children, ...props }: any) => {
  return (
    <Tabs bg="transparent" value={'tab-0'} {...props}>
      {children}
    </Tabs>
  );
};

export default CodeBlockTabs;
