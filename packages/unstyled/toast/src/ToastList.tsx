/* eslint-disable react-native/no-inline-styles */
import { useKeyboardBottomInset } from '@gluestack-ui/hooks';
import { Overlay } from '@gluestack-ui/overlay';
import React from 'react';
import { Platform, SafeAreaView, View } from 'react-native';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';
import { ToastContext } from './ToastContext';
import type { IToast, ToastPlacement } from './types';

const initialAnimationOffset = 24;
const transitionConfig: any = {
  'bottom': initialAnimationOffset,
  'top': -initialAnimationOffset,
  'top right': -initialAnimationOffset,
  'top left': -initialAnimationOffset,
  'bottom left': initialAnimationOffset,
  'bottom right': initialAnimationOffset,
};

const toastPositionStyle = Platform.OS === 'web' ? 'fixed' : 'absolute';
const POSITIONS = {
  'top': {
    top: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  'top right': {
    top: 0,
    right: 0,
    alignItems: 'flex-end',
  },
  'top left': {
    top: 0,
    left: 0,
    alignItems: 'flex-start',
  },
  'bottom': {
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  'bottom left': {
    bottom: 0,
    left: 0,
    alignItems: 'flex-start',
  },
  'bottom right': {
    bottom: 0,
    right: 0,
    alignItems: 'flex-end',
  },
};
export const ToastList = () => {
  const {
    toastInfo,
    visibleToasts,
    removeToast,
    AnimationWrapper,
    AnimatePresence: ContextAnimatePresence,
  } = React.useContext(ToastContext);
  const AnimationView = AnimationWrapper?.current;
  const AnimatePresence = ContextAnimatePresence?.current;

  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo) as (keyof typeof toastInfo)[];
  };

  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    if (toastInfo[position]?.length > 0) hasToastOnOverlay = true;
  });

  return getPositions().length > 0 ? (
    <Overlay isOpen={hasToastOnOverlay} isKeyboardDismissable={false}>
      {getPositions().map((position: ToastPlacement) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <View
              key={position}
              style={{
                justifyContent: 'center',
                margin: 'auto',
                //@ts-expect-error it is properly defined above per-platform
                position: toastPositionStyle,
                pointerEvents: 'box-none',
                ...POSITIONS[position],
              }}
            >
              {toastInfo[position].map((toast: IToast) => {
                return (
                  <SafeAreaView
                    style={{ pointerEvents: 'box-none' }}
                    key={toast.id}
                  >
                    <OverlayAnimatePresence
                      visible={visibleToasts[toast.id]}
                      AnimatePresence={AnimatePresence}
                      onExit={() => {
                        removeToast(toast.id);
                        toast.config?.onCloseComplete &&
                          toast.config?.onCloseComplete();
                      }}
                    >
                      <AnimationView
                        initial={{
                          opacity: 0,
                          y: transitionConfig[position],
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: transitionConfig[position],
                        }}
                        transition={{
                          type: 'timing',
                          duration: 150,
                        }}
                        key={toast.id}
                        {...toast.config?.containerStyle}
                        style={{ pointerEvents: 'box-none' }}
                      >
                        <View
                          style={{
                            bottom:
                              [
                                'bottom',
                                'bottom-left',
                                'bottom-right',
                              ].includes(position) &&
                              toast.config?.avoidKeyboard
                                ? bottomInset
                                : undefined,
                          }}
                        >
                          {toast.component}
                        </View>
                      </AnimationView>
                    </OverlayAnimatePresence>
                  </SafeAreaView>
                );
              })}
            </View>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
};
