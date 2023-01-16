import { useEffect } from 'react';

export function useSxPropsStyleTagInjector(styleTagId: any, sx: any) {
  useEffect(() => {
    const documentElement = document;
    if (Object.keys(sx).length > 0) {
      let styleTag = documentElement.getElementById(styleTagId?.current);
      if (!styleTag) {
        styleTag = documentElement.createElement('style');
        styleTag.id = styleTagId.current;
        documentElement.body.appendChild(styleTag);
      }
    }
    return () => {
      //@ts-ignore
      // eslint-disable-next-line react-hooks/exhaustive-deps
      const styleTag = documentElement.getElementById(styleTagId?.current);
      if (styleTag) {
        styleTag.remove();
      }
    };
  }, [styleTagId, sx]);

  useEffect(() => {
    const styleTag = document.getElementById(styleTagId?.current);
    if (styleTag && Object.keys(sx).length) {
      //@ts-ignore
      styleTag.innerHTML = '';
    }
  }, [styleTagId, sx]);
}
