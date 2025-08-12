import React, { memo, useReducer } from 'react';
import { PortalHost } from '../../components/portalHost/PortalHost';
import {
  PortalDispatchContext,
  PortalStateContext,
} from '../../contexts/portal';
import { INITIAL_STATE } from '../../state/constants';
import { reducer } from '../../state/reducer';
import type { PortalProviderProps } from '../../components/portalProvider/types';

const PortalProviderComponent = ({
  rootHostName = 'root',
  shouldAddRootHost = true,
  children,
}: PortalProviderProps) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <PortalDispatchContext.Provider value={dispatch}>
      <PortalStateContext.Provider value={state}>
        {children}
        {shouldAddRootHost && <PortalHost name={rootHostName} />}
      </PortalStateContext.Provider>
    </PortalDispatchContext.Provider>
  );
};

export const PortalProvider = memo(PortalProviderComponent);
PortalProvider.displayName = 'PortalProvider';
