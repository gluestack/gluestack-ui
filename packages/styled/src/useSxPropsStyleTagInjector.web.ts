import { useEffect } from 'react';

export function useSxPropsStyleTagInjector(styleTagId: any, sx: any) {
  useEffect(() => {
    const documentElement = document;
    let styleTag = documentElement.getElementById(styleTagId?.current);
    if (!styleTag) {
      styleTag = documentElement.createElement('style');
      styleTag.id = styleTagId.current;
      documentElement.body.appendChild(styleTag);
    }
    return () => {
      //@ts-ignore
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const styleTag = documentElement.getElementById(styleTagId?.current);
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, [styleTagId]);

  useEffect(() => {
    const styleTag = document.getElementById(styleTagId?.current);
    //@ts-ignore
    styleTag.innerHTML = '';
  }, [styleTagId, sx]);
}
