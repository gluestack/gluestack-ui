import { createCollapsible } from '@gluestack-ui/collapsible';
import {
  Root,
  Trigger,
  TriggerText,
  ContentText,
  Content,
} from './styled-components';

export const Collapsible = createCollapsible({
  Root,
  Trigger,
  TriggerText,
  ContentText,
  Content,
});

export const CollapsibleItem = Collapsible.Item;
export const CollapsibleHeader = Collapsible.Header;
export const CollapsibleTrigger = Collapsible.Trigger;
export const CollapsibleTitleText = Collapsible.TitleText;
export const CollapsibleContentText = Collapsible.ContentText;
export const CollapsibleIcon = Collapsible.Icon;
export const CollapsibleContent = Collapsible.Content;
