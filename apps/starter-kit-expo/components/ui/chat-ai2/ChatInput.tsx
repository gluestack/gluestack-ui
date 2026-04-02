'use client';
import React, { useContext, useState, useCallback } from 'react';
import {
  View,
  ViewProps,
  TextInput,
  TextInputProps,
  Pressable,
  Text,
  LayoutChangeEvent,
} from 'react-native';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import { ChatContext } from './context';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useKeyboardAwareChat } from './useKeyboardAwareChat';
import { GestureDetector } from 'react-native-gesture-handler';
const { scrollHandler, inputStyle, listContentStyle, panGesture } =
  useKeyboardAwareChat();
const inputContainerStyle = tva({
  base: 'flex-row items-center p-2 border-t border-border bg-background',
});

const sendButtonStyle = tva({
  base: 'ml-2 px-4 py-2 bg-primary rounded-lg',
});

const sendButtonTextStyle = tva({
  base: 'text-primary-foreground font-medium',
});

interface ChatInputProps extends ViewProps {
  onSend?: (input: string) => void;
  placeholder?: string;
  inputProps?: TextInputProps;
  sendButtonText?: string;
  renderSendButton?: (
    onPress: () => void,
    disabled: boolean
  ) => React.ReactElement;
}

export const ChatInput = React.forwardRef<
  React.ComponentRef<typeof View>,
  ChatInputProps
>(function ChatInput(
  {
    onSend: onSendProp,
    placeholder = 'Type a message...',
    inputProps,
    sendButtonText = 'Send',
    renderSendButton,
    className,
    ...props
  },
  ref
) {
  const context = useContext(ChatContext);
  const [input, setInput] = useState('');

  const loading = context?.loading || false;
  const { height } = useReanimatedKeyboardAnimation();

  const inputAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: height.value }], // ← fixed sign (was positive)
    };
  });

  // Measure composer height so blankSize calculation is correct
  const onComposerLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (context) {
        context.composerHeight.value = event.nativeEvent.layout.height;
      }
    },
    [context]
  );

  const handleSend = () => {
    if (!input.trim() || loading) return;

    if (onSendProp) {
      onSendProp(input);
    } else if (context?.send) {
      context.send(input);
    }

    setInput('');
  };

  const defaultSendButton = (
    <Pressable
      onPress={handleSend}
      disabled={!input.trim() || loading}
      className={sendButtonStyle({})}
    >
      <Text className={sendButtonTextStyle({})}>
        {loading ? '...' : sendButtonText}
      </Text>
    </Pressable>
  );

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        ref={ref}
        className={inputContainerStyle({ class: className })}
        style={[inputAnimatedStyle]}
        onLayout={onComposerLayout} // ← new
        {...props}
      >
        <TextInput
          className="flex-1 p-2 bg-muted rounded-lg text-foreground"
          value={input}
          onChangeText={setInput}
          placeholder={placeholder}
          placeholderTextColor="#666"
          multiline
          onSubmitEditing={handleSend}
          blurOnSubmit={false}
          editable={!loading}
          {...inputProps}
        />
        {renderSendButton
          ? renderSendButton(handleSend, !input.trim() || loading)
          : defaultSendButton}
      </Animated.View>
    </GestureDetector>
  );
});

ChatInput.displayName = 'ChatInput';
