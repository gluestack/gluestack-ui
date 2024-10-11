import React from 'react';
import { Tabs } from '../../index';
import { CodeBlock } from './index';

const CodeBlockTabPanel = ({
  code,
  withLineNumbers,
  showHeader,
  showHeaderIcons,
  theme,
  language = 'jsx',
  value,
  ...props
}: any) => {
  return (
    <Tabs.TabPanel value={value}>
      <CodeBlock
        code={code}
        withLineNumbers={withLineNumbers}
        showHeader={showHeader}
        showHeaderIcons={showHeaderIcons}
        language={language}
        theme={theme}
        pt="$5"
        {...props}
      />
    </Tabs.TabPanel>
  );
};
export default CodeBlockTabPanel;
