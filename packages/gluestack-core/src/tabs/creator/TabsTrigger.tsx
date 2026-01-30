import React, { useCallback, useEffect, useState, useMemo, forwardRef, useRef } from 'react';
import { TabsContext, TabsTriggerContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils/common';
import { Platform } from 'react-native';

export const TabsTrigger = (StyledTabsTrigger: any) =>
  forwardRef(({ value, disabled = false, children, ...props }: any, ref?: any) => {
    const context = React.useContext(TabsContext);
    const innerRef = useRef<any>(null);

    if (!context) {
      throw new Error('TabsTrigger must be used within a Tabs component');
    }

    const {
      selectedKey,
      setSelectedKey,
      isDisabled: tabsDisabled,
      registerTrigger,
      unregisterTrigger,
      activationMode,
      listRef,
    } = context;

    const isSelected = selectedKey === value;
    const isDisabled = disabled || tabsDisabled;

    // Interaction states
    const [isHovered, setIsHovered] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isFocusVisible, setIsFocusVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    // Layout tracking for animated indicator - PRIMARY METHOD
    const handleLayout = useCallback(
      (event: any) => {
        const layout = event.nativeEvent?.layout;

        // Use measureLayout for accurate positioning when listRef is available
        if (Platform.OS !== 'web' && innerRef.current && listRef?.current) {
          // Delay to ensure layout is complete
          setTimeout(() => {
            innerRef.current?.measureLayout(
              listRef.current,
              (x: number, y: number, width: number, height: number) => {
                const layoutData = {
                  x: x || 0,
                  y: y || 0,
                  width: width || 0,
                  height: height || 0,
                };
                console.log('measureLayout result:', layoutData, 'for value:', value);
                registerTrigger(value, layoutData);
              },
              () => {
                console.error('measureLayout failed for', value);
                // Fallback to onLayout data
                if (layout) {
                  const layoutData = {
                    x: layout.x || 0,
                    y: layout.y || 0,
                    width: layout.width || 0,
                    height: layout.height || 0,
                  };
                  registerTrigger(value, layoutData);
                }
              }
            );
          }, 50);
        } else if (layout) {
          // Fallback: use onLayout data
          const layoutData = {
            x: layout.x || 0,
            y: layout.y || 0,
            width: layout.width || 0,
            height: layout.height || 0,
          };
          registerTrigger(value, layoutData);
        } else if (Platform.OS === 'web' && innerRef.current) {
          // Web fallback: calculate relative position
          const element = innerRef.current;
          const rect = element.getBoundingClientRect();
          const parent = listRef?.current || element.parentElement;
          const parentRect = parent?.getBoundingClientRect();

          if (rect && parentRect) {
            const layoutData = {
              x: rect.left - parentRect.left,
              y: rect.top - parentRect.top,
              width: rect.width,
              height: rect.height,
            };
            registerTrigger(value, layoutData);
          }
        }
      },
      [value, registerTrigger, listRef]
    );

    // Unregister on unmount
    useEffect(() => {
      return () => {
        unregisterTrigger(value);
      };
    }, [value, unregisterTrigger]);

    // Handle press (click for web, onPress for native)
    const handlePress = useCallback(() => {
      if (!isDisabled) {
        setSelectedKey(value);
      }
    }, [isDisabled, setSelectedKey, value]);

    // Handle focus
    const handleFocus = useCallback(() => {
      setIsFocused(true);
      // Automatic activation - select on focus
      if (activationMode === 'automatic' && !isDisabled) {
        setSelectedKey(value);
      }
    }, [activationMode, isDisabled, setSelectedKey, value]);

    const handleBlur = useCallback(() => {
      setIsFocused(false);
      setIsFocusVisible(false);
    }, []);

    // Combine refs
    const setRefs = useCallback(
      (node: any) => {
        innerRef.current = node;
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );

    // Context for child components
    const triggerContextValue = useMemo(
      () => ({
        value,
        isSelected,
        isDisabled,
        isHovered,
        isFocused,
        isFocusVisible,
        isPressed,
      }),
      [value, isSelected, isDisabled, isHovered, isFocused, isFocusVisible, isPressed]
    );

    return (
      <TabsTriggerContext.Provider value={triggerContextValue}>
        <StyledTabsTrigger
          ref={setRefs}
          role="tab"
          aria-selected={isSelected}
          aria-disabled={isDisabled}
          aria-controls={`tabpanel-${value}`}
          disabled={isDisabled}
          onPress={handlePress}
          onFocus={composeEventHandlers(props?.onFocus, handleFocus)}
          onBlur={composeEventHandlers(props?.onBlur, handleBlur)}
          onMouseEnter={composeEventHandlers(props?.onMouseEnter, () =>
            setIsHovered(true)
          )}
          onMouseLeave={composeEventHandlers(props?.onMouseLeave, () =>
            setIsHovered(false)
          )}
          onPressIn={composeEventHandlers(props?.onPressIn, () =>
            setIsPressed(true)
          )}
          onPressOut={composeEventHandlers(props?.onPressOut, () =>
            setIsPressed(false)
          )}
          onLayout={composeEventHandlers(props?.onLayout, handleLayout)}
          states={{
            selected: isSelected,
            disabled: isDisabled,
            hover: isHovered,
            focus: isFocused,
            focusVisible: isFocusVisible,
            active: isPressed,
          }}
          dataSet={{
            value,
            selected: isSelected,
            disabled: isDisabled,
            hover: isHovered,
            focus: isFocused,
            'focus-visible': isFocusVisible,
            pressed: isPressed,
          }}
          {...props}
        >
          {children}
        </StyledTabsTrigger>
      </TabsTriggerContext.Provider>
    );
  });
