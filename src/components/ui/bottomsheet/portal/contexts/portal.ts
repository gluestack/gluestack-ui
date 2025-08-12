import { createContext } from 'react';
import type { ActionTypes } from '../state/types';
import type { PortalType } from '../types';

export const PortalStateContext = createContext<Record<
  string,
  Array<PortalType>
> | null>(null);
export const PortalDispatchContext =
  createContext<React.Dispatch<ActionTypes> | null>(null);
