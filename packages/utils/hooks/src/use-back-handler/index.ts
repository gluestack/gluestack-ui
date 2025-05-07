import { useEffect, useRef } from 'react';
import { BackHandler, type NativeEventSubscription } from 'react-native';

type IParams = {
  enabled?: boolean;
  callback: () => any;
};

export function useBackHandler({ enabled, callback }: IParams) {
  const backHandlerRef = useRef<NativeEventSubscription | null>(null);

  useEffect(() => {
    const backHandler = () => {
      callback();
      return true;
    };
    if (enabled) {
      backHandlerRef.current = BackHandler.addEventListener(
        'hardwareBackPress',
        backHandler
      );
    } else {
      backHandlerRef.current?.remove();
    }
    return () => backHandlerRef.current?.remove();
  }, [enabled, callback]);
}
