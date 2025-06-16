import { useEffect } from 'react';

type IParams = {
  enabled?: boolean;
  callback: () => any;
};

export function useBackHandler({ enabled, callback }: IParams) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    document?.body?.addEventListener?.('keyup', handleEscape);
    return () => {
      document?.body?.removeEventListener?.('keyup', handleEscape);
    };
  }, [enabled, callback]);
}
