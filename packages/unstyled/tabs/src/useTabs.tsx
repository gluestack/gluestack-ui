import { useFocusManager } from '@react-native-aria/focus';
import { AccessibilityRole } from 'react-native';

export const useTabs = (wrap: boolean) => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowRight': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusNext({ wrap });
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusPrevious({ wrap });
        break;
      }
      case 'ArrowUp': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusPrevious({ wrap });
        break;
      }
      case 'ArrowDown': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusNext({ wrap });
        break;
      }
    }
  };
  return {
    tabProps: { onKeyDown, accessibilityRole: 'tab' as AccessibilityRole },
    focusManager,
  };
};
