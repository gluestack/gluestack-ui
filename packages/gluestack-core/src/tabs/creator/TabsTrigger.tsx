import React, {
  useCallback,
  useEffect,
  useState,
  useMemo,
  forwardRef,
  useRef,
} from 'react';
import { Platform, findNodeHandle } from 'react-native';
import { TabsContext, TabsTriggerContext } from './Context';
import { composeEventHandlers } from '@gluestack-ui/utils/common';

export const TabsTrigger = (StyledTabsTrigger: any) =>
  forwardRef(
    ({ value, disabled = false, children, ...props }: any, ref?: any) => {
      const context = React.useContext(TabsContext);
      const innerRef = useRef<any>(null);
//change the mesurement methods for web
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
       * ✅ Cross-platform layout measurement
       */
      const measureTrigger = useCallback(() => {
        const node = innerRef.current;
        const parent = listRef?.current;

        if (!node || !parent) return;

        // 🌐 WEB (DOM)
        if (Platform.OS === 'web') {
          // Resolve real DOM nodes
          const domNode =
            // @ts-ignore
            node?.unstable_getDOMNode?.() ??
            (node instanceof HTMLElement ? node : null);

          const parentDom =
            // @ts-ignore
            parent?.unstable_getDOMNode?.() ??
            (parent instanceof HTMLElement ? parent : null);

          if (!domNode || !parentDom) return;

          const rect = domNode.getBoundingClientRect();
          const parentRect = parentDom.getBoundingClientRect();

          registerTrigger(value, {
            x: rect.left - parentRect.left,
            y: rect.top - parentRect.top,
            width: rect.width,
            height: rect.height,
          });

          return;
        }

        // 📱 NATIVE (iOS / Android)
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
       * Measure on layout
       */
      const handleLayout = useCallback(() => {
        measureTrigger();
      }, [measureTrigger]);

      /**
       * Measure after mount on WEB (onLayout is unreliable)
       */
      useEffect(() => {
        if (Platform.OS === 'web') {
          requestAnimationFrame(measureTrigger);
        }
      }, [measureTrigger]);

      /**
       * Cleanup
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
       * Merge refs
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

      /**
       * 🚫 Remove dataSet on WEB to avoid React DOM warning
       */
      const safeProps =
        Platform.OS === 'web'
          ? (() => {
              const { dataSet, ...rest } = props as any;
              return rest;
            })()
          : props;

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
            onFocus={composeEventHandlers(safeProps?.onFocus, handleFocus)}
            onBlur={composeEventHandlers(safeProps?.onBlur, handleBlur)}
            onMouseEnter={composeEventHandlers(safeProps?.onMouseEnter, () =>
              setIsHovered(true)
            )}
            onMouseLeave={composeEventHandlers(safeProps?.onMouseLeave, () =>
              setIsHovered(false)
            )}
            onPressIn={composeEventHandlers(safeProps?.onPressIn, () =>
              setIsPressed(true)
            )}
            onPressOut={composeEventHandlers(safeProps?.onPressOut, () =>
              setIsPressed(false)
            )}
            onLayout={composeEventHandlers(safeProps?.onLayout, handleLayout)}
            states={{
              selected: isSelected,
              disabled: isDisabled,
              hover: isHovered,
              focus: isFocused,
              focusVisible: isFocusVisible,
              active: isPressed,
            }}
            {...safeProps}
          >
            {children}
          </StyledTabsTrigger>
        </TabsTriggerContext.Provider>
      );
    }
  );
