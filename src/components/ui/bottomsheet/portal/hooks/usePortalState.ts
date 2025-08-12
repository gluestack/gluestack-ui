import { useContext } from 'react';
import { PortalStateContext } from '../contexts/portal';

export const usePortalState = (hostName: string) => {
  const state = useContext(PortalStateContext);

  if (state === null) {
    throw new Error(
      "'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }

  return state[hostName] || [];
};
