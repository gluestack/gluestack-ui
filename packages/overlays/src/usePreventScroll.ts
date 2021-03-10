interface PreventScrollOptions {
  /** Whether the scroll lock is disabled. */
  isDisabled?: boolean;
}

// Polyfill
export const usePreventScroll = (_options: PreventScrollOptions = {}) => {};
