/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-nocheck
import React, { forwardRef, memo } from 'react';
import { Overlay } from '@gluestack-ui/overlay';
import PresenceTransition from './PresenceTransition';
import { View } from 'react-native';

const holderStyle: any = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottom: {
    bottom: 0,
    right: 0,
    left: 0,
  },
  left: {
    left: 0,
    bottom: 0,
    top: 0,
  },
};

export const Slide = memo(
  forwardRef(({ children, ...props }: any, ref?: any) => {
    const {
      in: visible,
      placement = 'bottom',
      overlay = true,
      duration = 500,
      ...resolvedProps
    } = props;
    const [containerOpacity, setContainerOpacity] = React.useState(0);
    const [size, setSize] = React.useState(0);
    const provideSize = (layoutSize: any) => {
      if (placement === 'right' || placement === 'left')
        setSize(layoutSize.width);
      else setSize(layoutSize.height);
      setContainerOpacity(1);
    };

    const transition = { duration };

    const animationStyle: any = {
      top: {
        initial: {
          translateY: -size,
        },
        animate: {
          translateY: 0,
          transition,
        },
      },
      bottom: {
        initial: {
          translateY: size,
        },
        animate: {
          translateY: 0,
          transition,
        },
        exit: {
          translateY: size,
          transition,
        },
      },
      left: {
        initial: {
          translateX: -size,
        },
        animate: {
          translateX: 0,
          transition,
        },
      },
      right: {
        initial: {
          translateX: size,
        },
        animate: {
          translateX: 0,
          transition,
        },
      },
    };

    const slideComponent = (
      <PresenceTransition
        visible={visible}
        {...animationStyle[placement]}
        style={[
          { position: 'absolute' },
          holderStyle[placement],
          { height: '100%' },
        ]}
      >
        <View
          {...resolvedProps}
          opacity={containerOpacity}
          ref={ref}
          onLayout={(e) => provideSize(e.nativeEvent.layout)}
        >
          {size ? children : null}
        </View>
      </PresenceTransition>
    );

    if (overlay) {
      return (
        <>
          <Overlay isKeyboardDismissable={false}>{slideComponent}</Overlay>
        </>
      );
    } else {
      return slideComponent;
    }
  })
);

export default Slide;
