import { useState, useEffect } from 'react';
import { AccessibilityInfo, Platform } from 'react-native';

export function useAccessibilityInfo() {
  const [reduceTransparencyEnabled, setReduceTransparencyEnabled] = useState(false);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      AccessibilityInfo.isReduceTransparencyEnabled().then(setReduceTransparencyEnabled);
      
      const subscription = AccessibilityInfo.addEventListener(
        'reduceTransparencyChanged',
        setReduceTransparencyEnabled
      );

      return () => {
        subscription?.remove();
      };
    }
  }, []);

  return {
    reduceTransparencyEnabled,
  };
}
