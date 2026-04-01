// components/ai-elements/message.tsx
import React, {
  memo,
  useCallback,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import type { UIMessage } from 'ai';
import Animated from 'react-native-reanimated';
import { useUserMessageAnimation } from './userAnimation';
import { useBlankSize } from './useBlank';
import Markdown from 'react-native-markdown-display';
// ==================== CONTEXT FOR ROLE ====================
type MessageContextType = {
  role: UIMessage['role'];
};

const MessageContext = createContext<MessageContextType | null>(null);

const useMessageContext = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error(
      'MessageToolbar and other children must be used inside <Message>'
    );
  }
  return context;
};

// ==================== REF MERGER ====================
const mergeRefs = <T,>(
  ...refs: Array<React.Ref<T> | null | undefined>
): React.RefCallback<T> => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref != null) {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
};

// ==================== PROPS TYPES ====================

export type MessageProps = {
  role: UIMessage['role'];
  children: React.ReactNode;
  className?: string;
  index: number;
  message: UIMessage;
};

export type MessageContentProps = {
  children: React.ReactNode;
  className?: string;
};

// ==================== MAIN MESSAGE COMPONENT ====================

export const Message = memo(
  ({ role, children, className, index, message }: MessageProps) => {
    const isUserFirstMessage = index === 0;

    const {
      style: animationStyle,
      ref: animRef,
      onLayout: animOnLayout,
    } = useUserMessageAnimation({ disabled: !isUserFirstMessage });

    const { ref: blankRef, onLayout: blankOnLayout } = useBlankSize({
      role: 'user',
      disabled: !isUserFirstMessage,
    });

    const combinedRef = useMemo(
      () => mergeRefs(animRef, blankRef),
      [animRef, blankRef]
    );

    const contextValue = useMemo(() => ({ role }), [role]);

    if (role === 'user') {
      return (
        <MessageContext.Provider value={contextValue}>
          <Animated.View
            ref={combinedRef}
            onLayout={
              isUserFirstMessage
                ? (event) => {
                    animOnLayout?.(event);
                    blankOnLayout?.(event);
                  }
                : undefined
            }
            style={animationStyle}
            className={`group flex w-full max-w-[95%] flex-col gap-2 ${className || ''}`}
          >
            {children}
          </Animated.View>
        </MessageContext.Provider>
      );
    }

    // Assistant messages
    return (
      <MessageContext.Provider value={contextValue}>
        <Animated.View
          ref={blankRef}
          onLayout={blankOnLayout}
          className={`group flex w-full max-w-[95%] flex-col gap-2 ${className || ''}`}
        >
          {children}
        </Animated.View>
      </MessageContext.Provider>
    );
  }
);

// ==================== MESSAGE CONTENT ====================

export const MessageContent = memo(
  ({ children, className }: MessageContentProps) => {
    const { role } = useMessageContext();

    return (
      <View
        className={`flex w-fit min-w-0 max-w-[90%] mt-4 flex-col gap-2 overflow-hidden text-base px-4 py-3 rounded-3xl ${
          role === 'user'
            ? 'self-end bg-blue-600 text-white'
            : 'self-start bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
        } ${className || ''}`}
      >
        {children}
      </View>
    );
  }
);

// ==================== MESSAGE RESPONSE ====================

export const MessageResponse = memo(
  ({ message }: { message: UIMessage }) => {
    const isUser = message.role === 'user';

    // ✅ fallback (no parts yet)
    if (!message || !message.parts) {
      return (
        <Markdown
          style={{
            body: {
              color: '#fff',
              fontSize: 16,
              lineHeight: 22,
            },
            code_block: {
              backgroundColor: '#0f172a',
              color: '#e2e8f0',
              padding: 12,
              borderRadius: 10,
            },
            code_inline: {
              backgroundColor: '#1e293b',
              color: '#e2e8f0',
              padding: 4,
              borderRadius: 4,
            },
          }}
        >
          {message?.content || ''}
        </Markdown>
      );
    }

    return (
      <View style={{ gap: 8 }}>
        {message.parts.map((part, index) => {
          // ✅ TEXT / MARKDOWN
          if (part.type === 'text' || part.type === 'reasoning') {
            return (
              <Markdown
                key={index}
                style={{
                  body: {
                    color: isUser ? '#fff' : '#000',
                    fontSize: 16,
                    lineHeight: 22,
                  },
                  code_block: {
                    backgroundColor: '#0f172a',
                    color: '#e2e8f0',
                    padding: 12,
                    borderRadius: 10,
                  },
                  code_inline: {
                    backgroundColor: '#1e293b',
                    color: '#e2e8f0',
                    padding: 4,
                    borderRadius: 4,
                  },
                }}
              >
                {part.text || ''}
              </Markdown>
            );
          }

          // ✅ IMAGE (base64 or URL)
          if (part.type === 'file') {
            let uri = '';

            if (part.url) {
              uri = part.url;
            } else if (part.data && part.mimeType) {
              uri = `data:${part.mimeType};base64,${part.data}`;
            }

            if (!uri) return null;

            return (
              <Image
                key={index}
                source={{ uri }}
                style={{
                  width: 250,
                  height: 250,
                  borderRadius: 12,
                  marginTop: 6,
                }}
                resizeMode="cover"
              />
            );
          }

          return null;
        })}
      </View>
    );
  }
  
);
// ==================== MESSAGE TOOLBAR (Now auto gets role) ====================

export type MessageToolbarProps = {
  children: React.ReactNode;
  className?: string;
};

export const MessageToolbar = memo(
  ({ children, className }: MessageToolbarProps) => {
    const { role } = useMessageContext();

    return (
      <View
        className={`mt-3 flex-row items-center gap-3 ${
          role === 'user' ? 'self-end' : 'self-start'
        } ${className || ''}`}
      >
        {children}
      </View>
    );
  }
);

// ==================== MESSAGE ACTION ====================

export const MessageAction = ({
  onPress,
  tooltip,
  children,
}: {
  onPress?: () => void;
  tooltip?: string;
  children: React.ReactNode;
}) => {
  const handlePress = () => {
    if (tooltip) Alert.alert(tooltip);
    onPress?.();
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      className="h-8 w-8 items-center justify-center"
    >
      {children}
    </TouchableOpacity>
  );
};

// ==================== MESSAGE BRANCH COMPONENTS ====================

// ... (keeping your branch components as they are - they don't need role)

interface MessageBranchContextType {
  currentBranch: number;
  totalBranches: number;
  goToPrevious: () => void;
  goToNext: () => void;
  branches: React.ReactElement[];
  setBranches: (branches: React.ReactElement[]) => void;
}

const MessageBranchContext = createContext<MessageBranchContextType | null>(
  null
);

const useMessageBranch = () => {
  const context = useContext(MessageBranchContext);
  if (!context) {
    throw new Error(
      'MessageBranch components must be used within <MessageBranch>'
    );
  }
  return context;
};

export const MessageBranch = ({
  defaultBranch = 0,
  onBranchChange,
  children,
  className,
}: {
  defaultBranch?: number;
  onBranchChange?: (index: number) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  const [branches, setBranches] = useState<React.ReactElement[]>([]);

  const handleBranchChange = (newBranch: number) => {
    setCurrentBranch(newBranch);
    onBranchChange?.(newBranch);
  };

  const goToPrevious = () => {
    const newBranch =
      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
    handleBranchChange(newBranch);
  };

  const goToNext = () => {
    const newBranch =
      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
    handleBranchChange(newBranch);
  };

  const contextValue: MessageBranchContextType = {
    branches,
    currentBranch,
    goToNext,
    goToPrevious,
    setBranches,
    totalBranches: branches.length,
  };

  return (
    <MessageBranchContext.Provider value={contextValue}>
      <View className={`w-full gap-2 ${className || ''}`}>{children}</View>
    </MessageBranchContext.Provider>
  );
};

export const MessageBranchContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { currentBranch, setBranches } = useMessageBranch();
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement[];

  React.useEffect(() => {
    if (branches.length !== childrenArray.length) {
      setBranches(childrenArray);
    }
  }, [childrenArray, branches.length]);

  return childrenArray.map((branch, index) => (
    <View
      key={branch.key || index}
      className={index === currentBranch ? 'block' : 'hidden'}
    >
      {branch}
    </View>
  ));
};

export const MessageBranchSelector = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { totalBranches } = useMessageBranch();
  if (totalBranches <= 1) return null;
  return <View className="flex-row items-center gap-2">{children}</View>;
};

export const MessageBranchPrevious = () => (
  <TouchableOpacity
    onPress={() => {}}
    className="h-8 w-8 items-center justify-center"
  >
    <ChevronLeft size={18} color="#64748b" />
  </TouchableOpacity>
);

export const MessageBranchNext = () => (
  <TouchableOpacity
    onPress={() => {}}
    className="h-8 w-8 items-center justify-center"
  >
    <ChevronRight size={18} color="#64748b" />
  </TouchableOpacity>
);

export const MessageBranchPage = () => {
  const { currentBranch, totalBranches } = useMessageBranch();
  return (
    <Text className="text-slate-500 dark:text-slate-400 text-sm">
      {currentBranch + 1} of {totalBranches}
    </Text>
  );
};
