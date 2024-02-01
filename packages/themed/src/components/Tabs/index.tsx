import { createTabs } from '@gluestack-ui/tabs';
import {
  Root,
  List,
  Trigger,
  TitleText,
  Contents,
  Content,
  ContentText,
  Icon,
} from './styled-components';

export const Tabs = createTabs({
  Root,
  List,
  Trigger,
  Icon,
  TitleText,
  Contents,
  Content,
  ContentText,
});

export const TabsList = Tabs.List;
export const TabsTrigger = Tabs.Trigger;
export const TabsTitleText = Tabs.TitleText;
export const TabsContents = Tabs.Contents;
export const TabsContent = Tabs.Content;
export const TabsContentText = Tabs.ContentText;
export const TabsIcon = Tabs.Icon;
