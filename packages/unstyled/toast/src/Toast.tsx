import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { ToastContext } from './ToastContext';
import { ToastList } from './ToastList';
import type { IToast, IToastInfo, IToastProps } from './types';
export const ToastProvider = ({ children }: { children: any }) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({} as IToastInfo);
  const [visibleToasts, setVisibleToasts] = useState<{
    [key in string]: boolean;
  }>({});

  const AnimationWrapper = React.useRef(View);
  const AnimatePresence = React.useRef(View);
  const toastIndex = React.useRef(1);

  const hideAll = React.useCallback(() => {
    setVisibleToasts({});
  }, [setVisibleToasts]);

  const hideToast = React.useCallback(
    (id: string) => {
      setVisibleToasts((prevVisibleToasts) => ({
        ...prevVisibleToasts,
        [id]: false,
      }));
    },
    [setVisibleToasts]
  );

  const isActive = React.useCallback(
    (id: string) => {
      for (const toastPosition of Object.keys(
        toastInfo
      ) as (keyof typeof toastInfo)[]) {
        const positionArray: Array<IToast> = toastInfo[toastPosition];
        if (positionArray.findIndex((toastData) => toastData.id === id) > -1) {
          return true;
        }
      }
      return false;
    },
    [toastInfo]
  );

  const removeToast = React.useCallback(
    (id: string) => {
      setToastInfo((prev) => {
        for (const toastPosition of Object.keys(
          prev
        ) as (keyof typeof prev)[]) {
          const positionArray: Array<IToast> = prev[toastPosition];
          const isToastPresent =
            positionArray.findIndex((toastData) => toastData.id === id) > -1;

          if (isToastPresent) {
            const newPositionArray = positionArray.filter(
              (item) => item.id !== id
            );
            const temp: any = {};
            temp[toastPosition] = newPositionArray;

            const newToastInfo = { ...prev, ...temp };
            return newToastInfo;
          }
        }

        return prev;
      });
    },
    [setToastInfo]
  );

  const setToast = React.useCallback(
    (props: IToastProps): string => {
      const {
        placement = 'bottom',
        render,
        id = `${toastIndex.current++}`,
        duration = 5000,
      } = props;

      if (render) {
        const component = render({ id });

        setToastInfo((prev: IToastInfo): IToastInfo => {
          return {
            ...prev,
            [placement]: [
              ...(prev[placement] ? prev[placement] : []).filter(
                (t) => t.id !== id
              ),
              { component, id, config: props },
            ],
          };
        });

        setVisibleToasts((toasts: { [key: string]: boolean }) => {
          return {
            ...Object.fromEntries(
              Object.entries(toasts).filter(([key]) => key !== id)
            ),
            [id]: true,
          };
        });

        if (duration !== null) {
          setTimeout(function () {
            hideToast(id);
          }, duration);
        }
      }
      return id;
    },
    [hideToast]
  );

  const contextValue = React.useMemo(() => {
    return {
      toastInfo,
      setToastInfo,
      setToast,
      removeToast,
      hideAll,
      isActive,
      visibleToasts,
      setVisibleToasts,
      hideToast,
      AnimationWrapper,
      AnimatePresence,
    };
  }, [
    toastInfo,
    setToastInfo,
    setToast,
    removeToast,
    hideAll,
    isActive,
    visibleToasts,
    setVisibleToasts,
    hideToast,
  ]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <ToastList />
    </ToastContext.Provider>
  );
};

export const getToastHook = (
  StyledAnimationWrapper: any,
  StyledAnimatePresence: any
) => {
  const useToast = () => {
    const {
      AnimationWrapper,
      AnimatePresence,
      setToast,
      hideAll,
      isActive,
      hideToast,
    } = React.useContext(ToastContext);
    AnimatePresence.current = StyledAnimatePresence;
    AnimationWrapper.current = StyledAnimationWrapper;
    const toast = useMemo(
      () => ({
        show: setToast,
        close: hideToast,
        closeAll: hideAll,
        isActive,
      }),
      [setToast, hideAll, isActive, hideToast]
    );

    return toast;
  };
  return useToast;
};
