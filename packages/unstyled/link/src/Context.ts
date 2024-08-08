import { createContext, useContext } from 'react';

export const LinkContext = createContext<{
  isHovered: boolean;
  isFocused: boolean;
  isPressed: boolean;
  isDisabled: boolean;
  isFocusVisible: boolean;
}>({
  isHovered: false,
  isFocused: false,
  isPressed: false,
  isDisabled: false,
  isFocusVisible: false,
});
export const useLinkContext = () => useContext(LinkContext);
