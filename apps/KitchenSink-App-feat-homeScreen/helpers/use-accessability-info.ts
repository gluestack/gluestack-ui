import { useEffect, useState } from 'react';
import { AccessibilityInfo, Platform } from 'react-native';

export const useAccessibilityInfo = () => {
  const [reduceMotionEnabled, setReduceMotionEnabled] = useState(false);
  const [reduceTransparencyEnabled, setReduceTransparencyEnabled] =
    useState(false);

  useEffect(() => {
    // Skip AccessibilityInfo setup on web as these APIs are not available
    if (Platform.OS === 'web') {
      return;
    }

    const reduceMotionChangedSubscription = AccessibilityInfo.addEventListener(
      'reduceMotionChanged',
      (isReduceMotionEnabled) => {
        setReduceMotionEnabled(isReduceMotionEnabled);
      }
    );
    const reduceTransparencyChangedSubscription =
      AccessibilityInfo.addEventListener(
        'reduceTransparencyChanged',
        (isReduceTransparencyEnabled) => {
          setReduceTransparencyEnabled(isReduceTransparencyEnabled);
        }
      );

    AccessibilityInfo.isReduceMotionEnabled().then((isReduceMotionEnabled) => {
      setReduceMotionEnabled(isReduceMotionEnabled);
    });
    AccessibilityInfo.isReduceTransparencyEnabled().then(
      (isReduceTransparencyEnabled) => {
        setReduceTransparencyEnabled(isReduceTransparencyEnabled);
      }
    );

    return () => {
      reduceMotionChangedSubscription.remove();
      reduceTransparencyChangedSubscription.remove();
    };
  }, []);

  return {
    reduceMotionEnabled,
    reduceTransparencyEnabled,
  };
};
