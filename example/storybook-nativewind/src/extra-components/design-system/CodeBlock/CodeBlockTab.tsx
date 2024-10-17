import React from 'react';
import { Tabs } from '@gluestack/design-system';

const CodeBlockTab = ({ children, ...props }: any) => {
  return (
    <Tabs.Tab
      // bg="transparent"
      // py="$2"
      // px="$4"
      // boxShadow="none"
      // rounded="$none"
      // sx={{
      //   ':active': {
      //     borderBottomColor: '$primary400',
      //     borderBottomWidth: '$2',
      //     boxShadow: 'none',
      //     rounded: '$none',
      //   },
      // }}
      className="bg-transparent py-2 px-4 shadow-none rounded-none active:border-b-primary-400 active:border-b-2 active:shadow-none active:rounded-none"
      {...props}
    >
      {children}
    </Tabs.Tab>
  );
};

export default CodeBlockTab;
