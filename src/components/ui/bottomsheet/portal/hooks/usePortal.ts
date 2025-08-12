import { ReactNode, useCallback, useContext } from 'react';
import { ACTIONS } from '../state/constants';
import { PortalDispatchContext } from '../contexts/portal';

export const usePortal = (hostName: string = 'root') => {
  const dispatch = useContext(PortalDispatchContext);

  if (dispatch === null) {
    throw new Error(
      "'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component."
    );
  }

  //#region methods
  const registerHost = useCallback(() => {
    dispatch({
      type: ACTIONS.REGISTER_HOST,
      hostName: hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deregisterHost = useCallback(() => {
    dispatch({
      type: ACTIONS.DEREGISTER_HOST,
      hostName: hostName,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addUpdatePortal = useCallback((name: string, node: ReactNode) => {
    dispatch({
      type: ACTIONS.ADD_UPDATE_PORTAL,
      hostName,
      portalName: name,
      node,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removePortal = useCallback((name: string) => {
    dispatch({
      type: ACTIONS.REMOVE_PORTAL,
      hostName,
      portalName: name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion

  return {
    registerHost,
    deregisterHost,
    addPortal: addUpdatePortal,
    updatePortal: addUpdatePortal,
    removePortal,
  };
};
