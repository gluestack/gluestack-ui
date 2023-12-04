import { useEffect, useRef, useState, useCallback } from 'react';

/**
 *
 * @param defaultValue
 * @param wait Wait Time for Debounce
 * @param options options object default false
 * @returns `[value, setValue]` value after update and setter function
 */
export function useDebouncedState<T = any>(
  defaultValue: T,
  wait: number,
  options = { leading: false }
) {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef<number | undefined | NodeJS.Timeout>(undefined);
  const leadingRef = useRef(true);

  const clearTimeoutRef = () => clearTimeout(timeoutRef.current);

  useEffect(() => clearTimeoutRef, []);

  const debouncedSetValue = useCallback(
    (newValue: T) => {
      clearTimeoutRef();
      if (leadingRef.current && options.leading) {
        setValue(newValue);
      } else {
        timeoutRef.current = setTimeout(() => {
          leadingRef.current = true;
          setValue(newValue);
        }, wait);
      }
      leadingRef.current = false;
    },
    [options.leading, wait]
  );

  return [value, debouncedSetValue] as const;
}
