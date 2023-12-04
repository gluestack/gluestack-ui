/* eslint-disable no-console */

import React from 'react';

export const useGetMountTime = (
  componentKey: string,
  noTarget: boolean = true
) => {
  const isMounted = React.useRef(false);
  const reRender = React.useRef(false);
  const ref = React.useRef(null);

  if (noTarget || isMounted.current) {
    reRender.current = !reRender.current;
    console.startMount(componentKey);
  }
  React.useEffect(() => {
    /** End previous timer  */
    if (noTarget && isMounted?.current) {
      console.endMount(componentKey);
    }

    /** In case of overlay components we will require to check ref of that component  */
    if (ref?.current) {
      isMonted.current = true;
    }

    /** In case there is not target that the component is directly mounted then we will directly mark it as mounted  */

    if (noTarget) isMounted.current = true;

    /** If component is mounted then we will end the timer  */
    if (isMounted.current) {
      console.endMount(componentKey);
    }

    return () => {
      //clean up
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reRender?.current, ref?.current, componentKey, noTarget]);

  return { isMounted: isMounted.current, ref };
};
