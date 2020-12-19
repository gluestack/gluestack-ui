import React from 'react';
import { Text, View } from 'react-native';
import { AriaButton, useUniversalButton } from 'react-native-aria';
import { useHover } from '@react-aria/interactions';
import { useFocusRing } from 'react-native-aria';

export function Button(props: any) {
  let ref = React.useRef<any>();

  const { buttonProps, isPressed } = useUniversalButton(
    {
      ...props,
      'onKeyDown': () => {
        console.log('browser key down');
      },
      'onPress': () => {
        console.log('on press works on both platforms');
      },
      'aria-label': 'browser specific label',
      'accessibilityLabel': 'mobile specific label',
      'onPressEnd': () => {
        //@ts-ignore
        alert('press out');
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
    borderRadius: 20,
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
        <View style={style}>{props.children}</View>
      </AriaButton>

      <Text style={{ textAlign: 'center' }}>
        {isFocusVisible ? 'Focus visible' : null}
        {isHovered ? 'hovering' : null}
      </Text>
    </>
  );
}
