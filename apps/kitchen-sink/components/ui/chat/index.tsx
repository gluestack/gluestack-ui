'use client';
import { tva } from '@gluestack-ui/utils/nativewind-utils';
import React, {
  createContext,
  forwardRef,
  useContext,
} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
  type FlatListProps,
  type ImageProps,
  type PressableProps,
  type TextInputProps,
  type TextProps,
  type ViewProps,
} from 'react-native';

// ─── Types ────────────────────────────────────────────────────────────────────

type ChatBubbleVariant = 'sent' | 'received';

type ChatBubbleContextValue = { variant: ChatBubbleVariant };

const ChatBubbleContext = createContext<ChatBubbleContextValue>({
  variant: 'received',
});

// ─── Styles ───────────────────────────────────────────────────────────────────

const chatMessageListStyle = tva({
  base: 'flex-1',
});

const chatBubbleStyle = tva({
  base: 'flex-row gap-2 mb-3 max-w-[85%]',
  variants: {
    variant: {
      sent: 'self-end flex-row-reverse',
      received: 'self-start flex-row',
    },
  },
  defaultVariants: { variant: 'received' },
});

const chatBubbleAvatarStyle = tva({
  base: 'h-8 w-8 rounded-full bg-muted items-center justify-center shrink-0 overflow-hidden',
});

const chatBubbleAvatarFallbackStyle = tva({
  base: 'text-xs font-semibold text-foreground uppercase',
});

const chatBubbleAvatarImageStyle = tva({
  base: 'h-full w-full rounded-full',
});

const chatBubbleContentStyle = tva({
  base: 'flex flex-col gap-1',
  variants: {
    variant: {
      sent: 'items-end',
      received: 'items-start',
    },
  },
  defaultVariants: { variant: 'received' },
});

const chatBubbleMessageStyle = tva({
  base: 'rounded-2xl px-4 py-2.5',
  variants: {
    variant: {
      sent: 'bg-primary rounded-tr-none',
      received: 'bg-muted rounded-tl-none',
    },
  },
  defaultVariants: { variant: 'received' },
});

const chatBubbleMessageTextStyle = tva({
  base: 'text-sm leading-relaxed',
  variants: {
    variant: {
      sent: 'text-primary-foreground',
      received: 'text-foreground',
    },
  },
  defaultVariants: { variant: 'received' },
});

const chatBubbleTimestampStyle = tva({
  base: 'text-xs text-muted-foreground px-1',
});

const chatTypingIndicatorStyle = tva({
  base: 'flex-row gap-1.5 px-4 py-3 rounded-2xl rounded-tl-none bg-muted self-start',
});

const chatTypingIndicatorDotStyle = tva({
  base: 'h-2 w-2 rounded-full bg-muted-foreground/60',
});

const chatInputStyle = tva({
  base: 'flex-row items-end gap-2 px-4 py-3 border-t border-border bg-background',
});

const chatInputFieldStyle = tva({
  base: 'flex-1 min-h-10 max-h-32 rounded-2xl border border-border bg-muted/40 px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground web:outline-none',
});

const chatInputSendStyle = tva({
  base: 'h-10 w-10 rounded-full bg-primary items-center justify-center shrink-0 data-[disabled=true]:opacity-40',
});

// ─── Components ───────────────────────────────────────────────────────────────

// ChatMessageList — wraps FlatList for scrollable message history

type IChatMessageListProps<T> = Omit<FlatListProps<T>, 'className'> & {
  className?: string;
  contentContainerClassName?: string;
};

function ChatMessageList<T>({
  className,
  contentContainerClassName,
  ...props
}: IChatMessageListProps<T>) {
  return (
    <FlatList
      {...props}
      // @ts-ignore - NativeWind className on FlatList
      className={chatMessageListStyle({ class: className })}
      contentContainerStyle={[
        { paddingHorizontal: 16, paddingVertical: 12 },
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    />
  );
}

ChatMessageList.displayName = 'ChatMessageList';

// ChatScrollView — for non-data-driven usage

const ChatScrollView = forwardRef<
  React.ComponentRef<typeof ScrollView>,
  React.ComponentProps<typeof ScrollView> & { className?: string }
>(function ChatScrollView({ className, ...props }, ref) {
  return (
    <ScrollView
      ref={ref}
      {...props}
      // @ts-ignore
      className={chatMessageListStyle({ class: className })}
      contentContainerStyle={[{ paddingHorizontal: 16, paddingVertical: 12 }]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    />
  );
});

// ChatBubble — a single message row

type IChatBubbleProps = ViewProps & {
  className?: string;
  variant?: ChatBubbleVariant;
};

const ChatBubble = forwardRef<React.ComponentRef<typeof View>, IChatBubbleProps>(
  function ChatBubble({ className, variant = 'received', children, ...props }, ref) {
    return (
      <ChatBubbleContext.Provider value={{ variant }}>
        <View
          ref={ref}
          {...props}
          className={chatBubbleStyle({ variant, class: className })}
        >
          {children}
        </View>
      </ChatBubbleContext.Provider>
    );
  }
);

ChatBubble.displayName = 'ChatBubble';

// ChatBubbleAvatar

type IChatBubbleAvatarProps = ViewProps & { className?: string };

const ChatBubbleAvatar = forwardRef<
  React.ComponentRef<typeof View>,
  IChatBubbleAvatarProps
>(function ChatBubbleAvatar({ className, ...props }, ref) {
  return (
    <View
      ref={ref}
      {...props}
      className={chatBubbleAvatarStyle({ class: className })}
    />
  );
});

ChatBubbleAvatar.displayName = 'ChatBubbleAvatar';

// ChatBubbleAvatarFallback

type IChatBubbleAvatarFallbackProps = TextProps & { className?: string };

const ChatBubbleAvatarFallback = forwardRef<
  React.ComponentRef<typeof Text>,
  IChatBubbleAvatarFallbackProps
>(function ChatBubbleAvatarFallback({ className, ...props }, ref) {
  return (
    <Text
      ref={ref}
      {...props}
      className={chatBubbleAvatarFallbackStyle({ class: className })}
    />
  );
});

ChatBubbleAvatarFallback.displayName = 'ChatBubbleAvatarFallback';

// ChatBubbleAvatarImage

type IChatBubbleAvatarImageProps = ImageProps & { className?: string };

const ChatBubbleAvatarImage = forwardRef<
  React.ComponentRef<typeof Image>,
  IChatBubbleAvatarImageProps
>(function ChatBubbleAvatarImage({ className, ...props }, ref) {
  return (
    <Image
      ref={ref}
      {...props}
      // @ts-ignore
      className={chatBubbleAvatarImageStyle({ class: className })}
    />
  );
});

ChatBubbleAvatarImage.displayName = 'ChatBubbleAvatarImage';

// ChatBubbleContent — aligns children based on variant from context

type IChatBubbleContentProps = ViewProps & { className?: string };

const ChatBubbleContent = forwardRef<
  React.ComponentRef<typeof View>,
  IChatBubbleContentProps
>(function ChatBubbleContent({ className, ...props }, ref) {
  const { variant } = useContext(ChatBubbleContext);
  return (
    <View
      ref={ref}
      {...props}
      className={chatBubbleContentStyle({ variant, class: className })}
    />
  );
});

ChatBubbleContent.displayName = 'ChatBubbleContent';

// ChatBubbleMessage — the bubble itself

type IChatBubbleMessageProps = ViewProps & {
  className?: string;
  children?: React.ReactNode;
};

const ChatBubbleMessage = forwardRef<
  React.ComponentRef<typeof View>,
  IChatBubbleMessageProps
>(function ChatBubbleMessage({ className, children, ...props }, ref) {
  const { variant } = useContext(ChatBubbleContext);
  return (
    <View
      ref={ref}
      {...props}
      className={chatBubbleMessageStyle({ variant, class: className })}
    >
      {typeof children === 'string' ? (
        <Text className={chatBubbleMessageTextStyle({ variant })}>
          {children}
        </Text>
      ) : (
        children
      )}
    </View>
  );
});

ChatBubbleMessage.displayName = 'ChatBubbleMessage';

// ChatBubbleTimestamp

type IChatBubbleTimestampProps = TextProps & { className?: string };

const ChatBubbleTimestamp = forwardRef<
  React.ComponentRef<typeof Text>,
  IChatBubbleTimestampProps
>(function ChatBubbleTimestamp({ className, ...props }, ref) {
  return (
    <Text
      ref={ref}
      {...props}
      className={chatBubbleTimestampStyle({ class: className })}
    />
  );
});

ChatBubbleTimestamp.displayName = 'ChatBubbleTimestamp';

// ChatTypingIndicator — animated dots shown while AI is generating

type IChatTypingIndicatorProps = ViewProps & { className?: string };

const ChatTypingIndicator = forwardRef<
  React.ComponentRef<typeof View>,
  IChatTypingIndicatorProps
>(function ChatTypingIndicator({ className, ...props }, ref) {
  return (
    <View
      ref={ref}
      {...props}
      className={chatTypingIndicatorStyle({ class: className })}
    >
      <View className={chatTypingIndicatorDotStyle({})} />
      <View className={chatTypingIndicatorDotStyle({})} />
      <View className={chatTypingIndicatorDotStyle({})} />
    </View>
  );
});

ChatTypingIndicator.displayName = 'ChatTypingIndicator';

// ChatInput — fixed input bar at the bottom

type IChatInputProps = ViewProps & { className?: string };

const ChatInput = forwardRef<React.ComponentRef<typeof View>, IChatInputProps>(
  function ChatInput({ className, ...props }, ref) {
    return (
      <View
        ref={ref}
        {...props}
        className={chatInputStyle({ class: className })}
      />
    );
  }
);

ChatInput.displayName = 'ChatInput';

// ChatInputField — the TextInput inside ChatInput

type IChatInputFieldProps = TextInputProps & { className?: string };

const ChatInputField = forwardRef<
  React.ComponentRef<typeof TextInput>,
  IChatInputFieldProps
>(function ChatInputField({ className, style, ...props }, ref) {
  return (
    <TextInput
      ref={ref}
      multiline
      {...props}
      className={chatInputFieldStyle({ class: className })}
      placeholderTextColor="gray"
      style={style}
    />
  );
});

ChatInputField.displayName = 'ChatInputField';

// ChatInputSend — the send button

type IChatInputSendProps = PressableProps & { className?: string };

const ChatInputSend = forwardRef<
  React.ComponentRef<typeof Pressable>,
  IChatInputSendProps
>(function ChatInputSend({ className, children, ...props }, ref) {
  return (
    <Pressable
      ref={ref}
      accessibilityRole="button"
      accessibilityLabel="Send message"
      {...props}
      className={chatInputSendStyle({ class: className })}
    >
      {children}
    </Pressable>
  );
});

ChatInputSend.displayName = 'ChatInputSend';

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  ChatMessageList,
  ChatScrollView,
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleAvatarFallback,
  ChatBubbleAvatarImage,
  ChatBubbleContent,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
  ChatTypingIndicator,
  ChatInput,
  ChatInputField,
  ChatInputSend,
};

export type { ChatBubbleVariant };