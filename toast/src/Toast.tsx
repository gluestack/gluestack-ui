import React, { useState, useMemo } from 'react';
import { ToastList } from './ToastList';
import type { IToastInfo, IToast, IToastProps } from './types';
import { ToastContext } from './ToastContext';
import { View } from 'react-native';
export const ToastProvider = ({ children }: { children: any }) => {
  const [toastInfo, setToastInfo] = useState<IToastInfo>({});
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
    (id: any) => {
      setVisibleToasts((prevVisibleToasts) => ({
        ...prevVisibleToasts,
        [id]: false,
      }));
    },
    [setVisibleToasts]
  );

  const isActive = React.useCallback(
    (id: any) => {
      for (const toastPosition of Object.keys(toastInfo)) {
        const positionArray: Array<IToast> = toastInfo[toastPosition];
        return positionArray.findIndex((toastData) => toastData.id === id) > -1;
      }
      return false;
    },
    [toastInfo]
  );

  const removeToast = React.useCallback(
    (id: any) => {
      setToastInfo((prev) => {
        for (const toastPosition of Object.keys(prev)) {
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
    (props: IToastProps): number => {
      const {
        placement = 'bottom',
        render,
        id = toastIndex.current++,
        duration = 5000,
      } = props;

      let positionToastArray = toastInfo[placement];
      if (!positionToastArray) positionToastArray = [];

      let component = null;

      if (render) {
        component = render({ id });
        toastInfo[placement] = [
          ...positionToastArray,
          { component, id, config: props },
        ];

        setToastInfo((prev: any) => ({ ...prev }));

        setVisibleToasts((toasts: any) => {
          return {
            ...toasts,
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
    [toastInfo, hideToast]
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
