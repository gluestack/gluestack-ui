import type { Key } from 'react';

export interface LayoutData {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TabsProps {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  activationMode?: 'automatic' | 'manual';
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface TabsListProps {
  scrollable?: boolean;
  snapToCenter?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface TabsTriggerProps {
  value: string;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface TabsContentProps {
  value: string;
  forceMount?: boolean;
  className?: string;
  children: React.ReactNode;
}

export interface TabsTriggerTextProps {
  className?: string;
  children: React.ReactNode;
}

export interface TabsTriggerIconProps {
  as: React.ComponentType<any>;
  className?: string;
}

export interface TabsIndicatorProps {
  className?: string;
  children?: React.ReactNode | ((context: { selectedKey: any; orientation: string; triggerLayouts: Map<any, LayoutData> }) => React.ReactNode);
}

export interface TabsContextValue {
  selectedKey: Key | null;
  setSelectedKey: (key: Key) => void;
  orientation: 'horizontal' | 'vertical';
  activationMode: 'automatic' | 'manual';
  isDisabled: boolean;
  triggerLayouts: Map<Key, LayoutData>;
  registerTrigger: (key: Key, layout: LayoutData) => void;
  unregisterTrigger: (key: Key) => void;
  scrollOffset: number;
  setScrollOffset: (offset: number) => void;
  listRef?: React.RefObject<any>;
  contentLayouts: Map<Key, LayoutData>;
  registerContent: (key: Key, layout: LayoutData) => void;
  unregisterContent: (key: Key) => void;
}

export interface TabsTriggerContextValue {
  value: string;
  isSelected: boolean;
  isDisabled: boolean;
  isHovered: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
  isPressed: boolean;
}
