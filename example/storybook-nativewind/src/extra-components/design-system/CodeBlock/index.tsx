import { CodeBlock } from './CodeBlock';
import CodeBlockTab from './CodeBlockTab';
import CodeBlockTabList from './CodeBlockTabList';
import CodeBlockTabPanel from './CodeBlockTabPanel';
import CodeBlockTabs from './CodeBlockTabs';

const CodeBlockMain = CodeBlock as any;
CodeBlockMain.Tab = CodeBlockTab;
CodeBlockMain.Tabs = CodeBlockTabs;
CodeBlockMain.TabList = CodeBlockTabList;
CodeBlockMain.TabPanel = CodeBlockTabPanel;

export { CodeBlockMain as CodeBlock };
