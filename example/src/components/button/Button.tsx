import React, { useRef } from 'react';
import { Animated, Text } from 'react-native';
import { AriaButton, useUniversalButton } from 'react-native-aria';
import { useHover } from '@react-aria/interactions';
import { useFocusRing } from 'react-native-aria';

export function Button(props: any) {
  let ref = React.useRef<any>();

  const springValueRef = useRef(new Animated.Value(1));

  const { buttonProps, isPressed } = useUniversalButton(
    {
      ...props,
      onKeyDown: () => {
        console.log('browser key down');
      },
      onPress: () => {
        console.log('on press works on both platforms');
      },
      onPressStart: () => {
        Animated.spring(springValueRef.current, {
          toValue: 0.85,
          useNativeDriver: true,
        }).start();
      },
      onPressEnd: () => {
        Animated.spring(springValueRef.current, {
          toValue: 1,
          useNativeDriver: true,
          friction: 3,
        }).start();
      },
    },
    ref
  );

  let { focusProps, isFocusVisible } = useFocusRing();
  let { hoverProps, isHovered } = useHover({});

  let style: any = {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: 'rgb(20, 115, 230)',
    borderRadius: 6,
  };

  if (isHovered) {
    style.backgroundColor = 'rgb(13, 102, 208)';
  }

  if (isPressed) {
    style.backgroundColor = 'rgb(9, 90, 186)';
  }

  if (isFocusVisible) {
    style.borderWidth = 2;
    style.borderColor = 'black';
  }

  return (
    <>
      {/* Unstyled button component to accept react-aria's refs/props */}
      <AriaButton {...hoverProps} {...buttonProps} {...focusProps} ref={ref}>
        {/* Attach styles on this View */}
        <Animated.View
          style={[
            style,
            {
              transform: [
                {
                  scale: springValueRef.current,
                },
              ],
            },
          ]}
        >
          {props.children}
        </Animated.View>
      </AriaButton>

      <Text style={{ textAlign: 'center' }}>
        {isHovered ? 'hovering' : null}
      </Text>
      <Text>{isFocusVisible ? 'Focus visible' : null}</Text>
    </>
  );
}
