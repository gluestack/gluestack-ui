import { useFocusManager } from '@react-native-aria/focus';
import type { AccessibilityRole } from 'react-native';

export const useTabs = (
  wrap: boolean,
  orientation: 'vertical' | 'horizontal'
) => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    if (orientation === 'horizontal') {
      switch (e.code) {
        case 'ArrowRight': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusNext({ wrap, tabbable: true });
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusPrevious({ wrap, tabbable: true });
          break;
        }
      }
    } else if (orientation === 'vertical') {
      switch (e.code) {
        case 'ArrowUp': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusPrevious({ wrap, tabbable: true });
          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusNext({ wrap, tabbable: true });
          break;
        }
      }
    }
  };
  return {
    tabProps: { onKeyDown, accessibilityRole: 'tab' as AccessibilityRole },
    focusManager,
  };
};
