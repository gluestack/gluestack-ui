/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ToastContext } from './ToastContext';
import { Overlay } from '@gluestack-ui/overlay';
import { SafeAreaView } from 'react-native';
import { View, Platform } from 'react-native';
import { useKeyboardBottomInset } from '@gluestack-ui/hooks';
import type { IToast } from './types';
import { OverlayAnimatePresence } from './OverlayAnimatePresence';

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
  const AnimationView = AnimationWrapper.current;
  const AnimatePresence = ContextAnimatePresence.current;

  const bottomInset = useKeyboardBottomInset() * 2;
  const getPositions = () => {
    return Object.keys(toastInfo);
  };

  let hasToastOnOverlay = false;
  getPositions().map((position) => {
    if (toastInfo[position]?.length > 0) hasToastOnOverlay = true;
  });

  return getPositions().length > 0 ? (
    <Overlay isOpen={hasToastOnOverlay} isKeyboardDismissable={false}>
      {getPositions().map((position: string) => {
        if (Object.keys(POSITIONS).includes(position))
          return (
            <View
              key={position}
              style={{
                justifyContent: 'center',
                margin: 'auto',
                position: toastPositionStyle,
                pointerEvents: 'box-none',
                //@ts-ignore
                ...POSITIONS[position],
              }}
            >
              {toastInfo[position].map((toast: IToast) => {
                return (
                  <OverlayAnimatePresence
                    key={toast.id}
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
                      {...toast.config?.containerStyle}
                    >
                      <SafeAreaView style={{ pointerEvents: 'box-none' }}>
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
                      </SafeAreaView>
                    </AnimationView>
                  </OverlayAnimatePresence>
                );
              })}
            </View>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
};
