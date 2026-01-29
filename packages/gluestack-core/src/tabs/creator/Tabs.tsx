import React, { useState, useCallback, useMemo, forwardRef } from 'react';
import type { Key } from 'react';
import { TabsContext } from './Context';
import type { LayoutData } from './types';

export const Tabs = (StyledTabs: any) =>
  forwardRef(
    (
      {
        value,
        defaultValue,
        onValueChange,
        orientation = 'horizontal',
        activationMode = 'automatic',
        disabled = false,
        children,
        ...props
      }: any,
      ref?: any
    ) => {
      // State management - support both controlled and uncontrolled
      const [selectedKeyState, setSelectedKeyState] = useState<Key | null>(
        defaultValue ?? null
      );

      const selectedKey = value !== undefined ? value : selectedKeyState;

      const setSelectedKey = useCallback(
        (key: Key) => {
          if (value === undefined) {
            setSelectedKeyState(key);
          }
          onValueChange?.(String(key));
        },
        [value, onValueChange]
      );

      // Layout tracking for animated indicator
      const [triggerLayouts, setTriggerLayouts] = useState<
        Map<Key, LayoutData>
      >(new Map());

      const registerTrigger = useCallback((key: Key, layout: LayoutData) => {
        setTriggerLayouts((prev) => {
          const next = new Map(prev);
          next.set(key, layout);
          return next;
        });
      }, []);

      const unregisterTrigger = useCallback((key: Key) => {
        setTriggerLayouts((prev) => {
          const next = new Map(prev);
          next.delete(key);
          return next;
        });
      }, []);

      const contextValue = useMemo(
        () => ({
          selectedKey,
          setSelectedKey,
          orientation,
          activationMode,
          isDisabled: disabled,
          triggerLayouts,
          registerTrigger,
          unregisterTrigger,
        }),
        [
          selectedKey,
          setSelectedKey,
          orientation,
          activationMode,
          disabled,
          triggerLayouts,
          registerTrigger,
          unregisterTrigger,
        ]
      );

      return (
        <TabsContext.Provider value={contextValue}>
          <StyledTabs ref={ref} {...props}>
            {children}
          </StyledTabs>
        </TabsContext.Provider>
      );
    }
  );
