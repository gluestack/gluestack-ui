import type { ReactNode } from 'react';
import type { ACTIONS } from '@gorhom/portal/portal/state/constants';

export interface AddUpdatePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
  node: ReactNode;
}

export interface RemovePortalAction {
  type: ACTIONS;
  hostName: string;
  portalName: string;
}

export interface RegisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export interface UnregisterHostAction {
  type: ACTIONS;
  hostName: string;
}

export type ActionTypes =
  | AddUpdatePortalAction
  | RemovePortalAction
  | RegisterHostAction
  | UnregisterHostAction;
