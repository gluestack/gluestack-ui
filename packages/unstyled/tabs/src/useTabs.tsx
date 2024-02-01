import { useFocusManager } from '@react-native-aria/focus';
import { AccessibilityRole } from 'react-native';

export const useTabs = (wrap: boolean) => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
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
  };
  return {
    tabProps: { onKeyDown, accessibilityRole: 'tab' as AccessibilityRole },
    focusManager,
  };
};
