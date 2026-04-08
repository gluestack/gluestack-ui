import React, {
  memo,
  createContext,
  useContext,
  useState,
  useMemo,
} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  Image,
  ViewStyle,
} from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import type { UIMessage } from 'ai';
import Animated from 'react-native-reanimated';
import { useUserMessageAnimation } from './userAnimation';
import { useBlankSize } from './useBlank';
import Markdown from 'react-native-markdown-display';

type MessageContextType = {
  role: UIMessage['role'];
  message?: UIMessage;
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

    const contextValue = useMemo(() => ({ role, message }), [role, message]);

    if (role === 'user') {
      return (
        <MessageContext.Provider value={contextValue}>
          <Animated.View
            ref={combinedRef}
            onLayout={(event) => {
              animOnLayout?.(event);
              blankOnLayout?.(event);
            }}
            style={animationStyle as ViewStyle}
            className={`group mt-4 flex w-full max-w-[95%] flex-col gap-2 ${className || ''}`}
          >
            {children}
          </Animated.View>
        </MessageContext.Provider>
      );
    }

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

export const MessageContent = memo(
  ({ children, className }: MessageContentProps) => {
    const { role } = useMessageContext();

    const roleStyles =
      role === 'user' ? 'self-end bg-muted max-w-[90%] px-4' : 'self-start ';

    return (
      <View
        className={`flex w-fit min-w-0 flex-col justify-center gap-2 overflow-hidden text-base  py-3 rounded-3xl ${roleStyles} ${className || ''}`}
      >
        {children}
      </View>
    );
  }
);

export const MessageResponse = memo(({ message }: { message: UIMessage }) => {
  const markdownRules = {
    text: (node, children, parent) => {
      return (
        <Text key={node.key} className="text-lg text-foreground ">
          {node.content}
        </Text>
      );
    },

    ordered_list: (node, children) => {
      return (
        <View key={node.key} className="mb-2">
          {children}
        </View>
      );
    },

    list_item: (node, children, parent) => {
      const isOrdered = parent?.type === 'ordered_list';
      const index = node.index ?? 0;
      return (
        <View key={node.key} className="flex-row items-start mb-1">
          <Text className="text-foreground mr-2">
            {isOrdered ? `${index + 1}.` : '•'}
          </Text>
          <View className="flex-1">
            <View className="flex-1">{children}</View>
          </View>
        </View>
      );
    },

    paragraph: (node, children) => {
      return (
        <View key={node.key} className="">
          {children}
        </View>
      );
    },

    strong: (node, children) => (
      <Text key={node.key} className="font-bold text-foreground">
        {children}
      </Text>
    ),

    em: (node, children) => (
      <Text key={node.key} className="italic text-foreground">
        {children}
      </Text>
    ),

    fence: (node) => (
      <View key={node.key} className="rounded-xl p-3 my-2 bg-muted">
        <Text className="text-white font-mono text-sm">{node.content}</Text>
      </View>
    ),

    code_block: (node) => (
      <View className="bg-slate-900 rounded-xl p-3 my-2" key={node.key}>
        <Text className="text-white font-mono text-sm">{node.content}</Text>
      </View>
    ),

    code_inline: (node) => (
      <Text
        key={node.key}
        className="bg-slate-800 text-white px-1 py-0.5 rounded"
      >
        {node.content}
      </Text>
    ),
  };

  if (!message?.parts) {
    return <Markdown rules={markdownRules}>{message?.content || ''}</Markdown>;
  }

  const hasText = message.parts.some((p) => p.type === 'text');
  const hasFile = message.parts.some((p) => p.type === 'file');

  if (!hasText && !hasFile) {
    return <Text className="text-muted-foreground">Thinking...</Text>;
  }

  return (
    <View className="gap-2">
      {message.parts.map((part, index) => {
        if (part.type === 'text') {
          return (
            <Markdown key={index} rules={markdownRules}>
              {part.text || ''}
            </Markdown>
          );
        }

        if (part.type === 'file') {
          let uri = '';

          if (part.url) uri = part.url;
          else if (part.data && part.mimeType) {
            uri = `data:${part.mimeType};base64,${part.data}`;
          }

          if (!uri) return null;

          return (
            <Image
              key={index}
              source={{ uri }}
              className="w-40 h-40 rounded-xl mt-1.5"
              resizeMode="cover"
            />
          );
        }

        return null;
      })}
    </View>
  );
});

export type MessageToolbarProps = {
  children: React.ReactNode;
  className?: string;
  message?: UIMessage;
};

export const MessageToolbar = memo(
  ({ children, className }: MessageToolbarProps) => {
    const { role, message } = useMessageContext();

    const roleStyles = role === 'user' ? 'self-end' : 'self-start';
    const hasText = message?.parts?.some(
      (p) => p.type === 'text' && p.text?.length > 0
    );

    if (!hasText) return null;

    if (role === 'user') return null;

    return (
      <View
        className={`-mt-4 ml-2 flex-row items-center gap-3 ${roleStyles} ${className || ''}`}
      >
        {children}
      </View>
    );
  }
);

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
      className={index === currentBranch ? 'flex' : 'hidden'}
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
    <ChevronLeft size={18} className="text-muted-foreground" />
  </TouchableOpacity>
);

export const MessageBranchNext = () => (
  <TouchableOpacity
    onPress={() => {}}
    className="h-8 w-8 items-center justify-center"
  >
    <ChevronRight size={18} className="text-muted-foreground" />
  </TouchableOpacity>
);

export const MessageBranchPage = () => {
  const { currentBranch, totalBranches } = useMessageBranch();
  return (
    <Text className="text-sm text-muted-foreground">
      {currentBranch + 1} of {totalBranches}
    </Text>
  );
};
