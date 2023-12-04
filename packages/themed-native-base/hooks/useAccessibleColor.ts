import React from 'react';
import type { IColorModeContextProps } from './types';
import { HooksContext } from '../components/Provider';

export function useAccessibleColors(): [
  boolean,
  (val: boolean) => void,
  () => void
] {
  const {
    colorMode: colorModeContext,
  }: {
    colorMode: IColorModeContextProps;
  } = React.useContext<any>(HooksContext);
  const toggleAccessibleColors = () =>
    colorModeContext.setAccessibleColors(!colorModeContext.accessibleColors);
  return [
    colorModeContext.accessibleColors,
    colorModeContext.setAccessibleColors,
    toggleAccessibleColors,
  ];
}
