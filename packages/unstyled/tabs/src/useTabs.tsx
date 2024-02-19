import { useFocusManager } from '@react-native-aria/focus';
import type { AccessibilityRole } from 'react-native';

export const useTabs = (
  wrap: boolean,
  orientation: 'vertical' | 'horizontal'
) => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    // switch (e.code) {
    //   case 'ArrowRight': {
    //     e.preventDefault();
    //     //@ts-ignore
    //     focusManager?.focusNext({ wrap, disabled: false });
    //     break;
    //   }
    //   case 'ArrowLeft': {
    //     e.preventDefault();
    //     //@ts-ignore
    //     focusManager?.focusPrevious({ wrap, disabled: false });
    //     break;
    //   }
    //   case 'ArrowUp': {
    //     e.preventDefault();
    //     //@ts-ignore
    //     focusManager?.focusPrevious({ wrap, disabled: false });
    //     break;
    //   }
    //   case 'ArrowDown': {
    //     e.preventDefault();
    //     //@ts-ignore
    //     focusManager?.focusNext({ wrap, disabled: false });
    //     break;
    //   }
    // }

    if (orientation === 'horizontal') {
      switch (e.code) {
        case 'ArrowRight': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusNext({ wrap, disabled: false });
          break;
        }
        case 'ArrowLeft': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusPrevious({ wrap, disabled: false });
          break;
        }
      }
    } else if (orientation === 'vertical') {
      switch (e.code) {
        case 'ArrowUp': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusPrevious({ wrap, disabled: false });
          break;
        }
        case 'ArrowDown': {
          e.preventDefault();
          //@ts-ignore
          focusManager?.focusNext({ wrap, disabled: false });
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
