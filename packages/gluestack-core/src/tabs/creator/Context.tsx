import React from 'react';
import type { TabsContextValue, TabsTriggerContextValue } from './types';

export const TabsContext = React.createContext<TabsContextValue | null>(null);

export const TabsTriggerContext = React.createContext<TabsTriggerContextValue | null>(null);

export function useTabsContext(componentName: string = 'Tabs'): TabsContextValue {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error(`${componentName} must be used within a Tabs component`);
  }
  return context;
}

export function useTabsTriggerContext(componentName: string = 'TabsTrigger'): TabsTriggerContextValue {
  const context = React.useContext(TabsTriggerContext);
  if (!context) {
    throw new Error(`${componentName} must be used within a TabsTrigger component`);
  }
  return context;
}
