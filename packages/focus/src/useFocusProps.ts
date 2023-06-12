import { useState } from 'react';

export const useFocusProps = () => {
  const [isFocused, setFocused] = useState(false);
  return {
    focusProps: {
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
    },
    isFocused,
  };
};
