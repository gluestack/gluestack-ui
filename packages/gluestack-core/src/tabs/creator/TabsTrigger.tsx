import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  forwardRef,
  useRef,
} from 'react';
import { Platform } from 'react-native';
import { TabsContext, TabsTriggerContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils/common';

export const TabsTrigger = (StyledTabsTrigger: any) =>
  forwardRef(
    ({ value, disabled = false, children, ...props }: any, ref?: any) => {
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

      /**
       * 🔥 Cross-platform layout measurement
       */
      const measureTrigger = useCallback(() => {
        const node = innerRef.current;
        const parent = listRef?.current;

        if (!node || !parent) return;

        // WEB (DOM based)
        if (Platform.OS === 'web') {
          const rect = node.getBoundingClientRect();
          const parentRect = parent.getBoundingClientRect?.();

          if (rect && parentRect) {
            registerTrigger(value, {
              x: rect.left - parentRect.left,
              y: rect.top - parentRect.top,
              width: rect.width,
              height: rect.height,
            });
          }
          return;
        }

        // NATIVE (iOS + Android)
        requestAnimationFrame(() => {
          node.measureInWindow(
            (x: number, y: number, width: number, height: number) => {
              parent.measureInWindow((px: number, py: number) => {
                registerTrigger(value, {
                  x: x - px,
                  y: y - py,
                  width,
                  height,
                });
              });
            }
          );
        });
      }, [value, registerTrigger, listRef]);

      /**
       * Measure on mount & layout changes
       */
      const handleLayout = useCallback(() => {
        measureTrigger();
      }, [measureTrigger]);

      /**
       * Unregister on unmount
       */
      useEffect(() => {
        return () => {
          unregisterTrigger(value);
        };
      }, [value, unregisterTrigger]);

      /**
       * Interaction handlers
       */
      const handlePress = useCallback(() => {
        if (!isDisabled) {
          setSelectedKey(value);
        }
      }, [isDisabled, setSelectedKey, value]);

      const handleFocus = useCallback(() => {
        setIsFocused(true);
        setIsFocusVisible(true);

        if (activationMode === 'automatic' && !isDisabled) {
          setSelectedKey(value);
        }
      }, [activationMode, isDisabled, setSelectedKey, value]);

      const handleBlur = useCallback(() => {
        setIsFocused(false);
        setIsFocusVisible(false);
      }, []);

      /**
       * Merge forwarded ref
       */
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

      /**
       * Context for children
       */
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
        [
          value,
          isSelected,
          isDisabled,
          isHovered,
          isFocused,
          isFocusVisible,
          isPressed,
        ]
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
              'selected': isSelected,
              'disabled': isDisabled,
              'hover': isHovered,
              'focus': isFocused,
              'focus-visible': isFocusVisible,
              'pressed': isPressed,
            }}
            {...props}
          >
            {children}
          </StyledTabsTrigger>
        </TabsTriggerContext.Provider>
      );
    }
  );
