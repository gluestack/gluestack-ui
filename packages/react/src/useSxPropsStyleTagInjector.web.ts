import { useEffect } from 'react';

export function useSxPropsStyleTagInjector(styleTagId: any, sx: any) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (Object.keys(sx).length > 0) {
        let styleTag = document.getElementById(styleTagId?.current);
        if (!styleTag) {
          styleTag = document.createElement('style');
          styleTag.id = styleTagId.current;
          document.body.appendChild(styleTag);
        }
      }
    }
  }, [styleTagId, sx]);
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        //@ts-ignore
        // eslint-disable-next-line react-hooks/exhaustive-deps
        const styleTag = document.getElementById(styleTagId?.current);
        if (styleTag) {
          styleTag.remove();
        }
      }
    };
  }, [styleTagId]);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleTag = document.getElementById(styleTagId?.current);
      if (styleTag && Object.keys(sx).length > 0) {
        //@ts-ignore
        styleTag.innerHTML = '';
      }
    }
  }, [styleTagId, sx]);
}
