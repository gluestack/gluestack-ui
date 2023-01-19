import React from 'react';
import { createContext } from '@universa11y/utils';
import type { ISelectContext } from './types';
export const [SelectProvider, useSelect] =
  createContext<ISelectContext>('SelectContext');

export const SelectContext = React.createContext({
  isHovered: false,
  hoverRef: null as any,
  hoverProps: null as any,
  isFocused: false,
  isFocusVisible: false,
  focusProps: null as any,
  setFocused: (() => {}) as any,
  isDisabled: false,
  isReadOnly: false,
  isInvalid: false,
});
