import React from 'react';
import { Tabs } from '@gluestack/design-system';
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
        className="pt-5"
        {...props}
      />
    </Tabs.TabPanel>
  );
};
export default CodeBlockTabPanel;
