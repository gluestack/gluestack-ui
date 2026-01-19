/* eslint-disable react-native/no-inline-styles */
import { useKeyboardBottomInset } from '@gluestack-ui/utils/hooks';
import { Overlay } from '../../overlay/creator';
import React from 'react';
import { Platform, View, Animated } from 'react-native';
import {
  initialWindowMetrics,
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
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
  const { toastInfo, visibleToasts, removeToast, ViewComponent } =
    React.useContext(ToastContext);

  const ViewComponentRef = ViewComponent?.current || View;

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
                  <SafeAreaProvider
                    key={toast.id}
                    initialMetrics={initialWindowMetrics}
                  >
                    <SafeAreaView style={{ pointerEvents: 'box-none' }}>
                      <AnimatedToastView
                        key={toast.id}
                        visible={visibleToasts[toast.id]}
                        position={position}
                        ViewComponent={ViewComponentRef}
                        containerStyle={toast.config?.containerStyle}
                        avoidKeyboard={toast.config?.avoidKeyboard}
                        bottomInset={bottomInset}
                        onExit={() => {
                          removeToast(toast.id);
                          toast.config?.onCloseComplete &&
                            toast.config?.onCloseComplete();
                        }}
                      >
                        {toast.component}
                      </AnimatedToastView>
                    </SafeAreaView>
                  </SafeAreaProvider>
                );
              })}
            </View>
          );
        else return null;
      })}
    </Overlay>
  ) : null;
};

const AnimatedToastView = ({
  visible,
  position,
  ViewComponent,
  containerStyle,
  avoidKeyboard,
  bottomInset,
  onExit,
  children,
}: {
  visible: boolean;
  position: ToastPlacement;
  ViewComponent: any;
  containerStyle?: any;
  avoidKeyboard?: boolean;
  bottomInset?: number;
  onExit: () => void;
  children: React.ReactNode;
}) => {
  const initialOffset = transitionConfig[position] || 0;
  const opacity = React.useRef(new Animated.Value(visible ? 1 : 0)).current;
  const translateY = React.useRef(
    new Animated.Value(visible ? 0 : initialOffset)
  ).current;
  const prevVisible = React.useRef(visible);
  const AnimatedViewComponent = React.useMemo(
    () => Animated.createAnimatedComponent(ViewComponent),
    [ViewComponent]
  );

  React.useEffect(() => {
    if (prevVisible.current !== visible) {
      if (visible) {
        // Animate in
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        // Animate out
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 150,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: initialOffset,
            duration: 150,
            useNativeDriver: true,
          }),
        ]).start(() => {
          onExit();
        });
      }
      prevVisible.current = visible;
    }
  }, [visible, opacity, translateY, initialOffset, onExit]);

  if (!visible && !prevVisible.current) {
    return null;
  }

  return (
    <AnimatedViewComponent
      style={[
        {
          opacity,
          transform: [{ translateY }],
          pointerEvents: 'box-none' as const,
        },
        containerStyle,
      ]}
    >
      <View
        style={{
          bottom:
            ['bottom', 'bottom-left', 'bottom-right'].includes(position) &&
            avoidKeyboard
              ? bottomInset
              : undefined,
        }}
      >
        {children}
      </View>
    </AnimatedViewComponent>
  );
};
