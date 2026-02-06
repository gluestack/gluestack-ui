import React, { useCallback, useRef, forwardRef } from 'react';
import { useTabsContext } from './Context';

export const TabsList = (StyledTabsList: any) =>
  forwardRef(({ children, scrollable = false, snapToCenter = true, ...props }: any, ref?: any) => {
    const { orientation, activationMode, setSelectedKey } =
      useTabsContext('TabsList');
    const listRef = useRef<any>(null);

    // Keyboard navigation handler
    const handleKeyDown = useCallback(
      (event: any) => {
        const key = event.key;

        // Get all trigger elements
        const triggers = listRef.current?.querySelectorAll
          ? Array.from(listRef.current.querySelectorAll('[role="tab"]'))
          : [];

        if (triggers.length === 0) return;

        const currentIndex = triggers.findIndex(
          (trigger: any) => trigger === event.target
        );

        if (currentIndex === -1) return;

        let nextIndex = currentIndex;

        // Handle arrow keys based on orientation
        if (orientation === 'horizontal') {
          if (key === 'ArrowLeft') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) nextIndex = triggers.length - 1;
            event.preventDefault();
          } else if (key === 'ArrowRight') {
            nextIndex = currentIndex + 1;
            if (nextIndex >= triggers.length) nextIndex = 0;
            event.preventDefault();
          }
        } else {
          // vertical
          if (key === 'ArrowUp') {
            nextIndex = currentIndex - 1;
            if (nextIndex < 0) nextIndex = triggers.length - 1;
            event.preventDefault();
          } else if (key === 'ArrowDown') {
            nextIndex = currentIndex + 1;
            if (nextIndex >= triggers.length) nextIndex = 0;
            event.preventDefault();
          }
        }

        // Handle Home/End
        if (key === 'Home') {
          nextIndex = 0;
          event.preventDefault();
        } else if (key === 'End') {
          nextIndex = triggers.length - 1;
          event.preventDefault();
        }

        if (nextIndex !== currentIndex) {
          const nextTrigger = triggers[nextIndex] as any;
          nextTrigger?.focus();

          // Automatic activation - select on focus
          if (activationMode === 'automatic') {
            const value = nextTrigger?.getAttribute('data-value');
            if (value) {
              setSelectedKey(value);
            }
          }
        }

        // Manual activation - select on Enter/Space
        if (activationMode === 'manual' && (key === 'Enter' || key === ' ')) {
          const value = event.target?.getAttribute('data-value');
          if (value) {
            setSelectedKey(value);
            event.preventDefault();
          }
        }
      },
      [orientation, activationMode, setSelectedKey]
    );

    return (
      <StyledTabsList
        ref={(node: any) => {
          listRef.current = node;
          if (typeof ref === 'function') {
            ref(node);
          } else if (ref) {
            ref.current = node;
          }
        }}
        role="tablist"
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </StyledTabsList>
    );
  });
