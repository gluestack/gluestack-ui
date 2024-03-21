import { useFocusManager } from '@react-native-aria/focus';
import { AccessibilityRole } from 'react-native';

export const useTabs = () => {
  const focusManager = useFocusManager();
  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowRight': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusNext({ wrap: true });
        break;
      }
      case 'ArrowLeft': {
        e.preventDefault();
        //@ts-ignore
        focusManager?.focusPrevious({ wrap: true });
        break;
      }
    }
  };
  return {
    tabProps: { onKeyDown, role: 'tab' as AccessibilityRole },
    focusManager,
  };
};
