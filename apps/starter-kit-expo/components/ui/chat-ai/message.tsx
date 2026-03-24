// components/ai-elements/message.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  type ReactElement,
  type PropsWithChildren,
} from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import type { UIMessage } from 'ai';

export type MessageProps = {
  role: UIMessage['role'];
  children: React.ReactNode;
  className?: string;
};

export const Message = memo(({ role, children, className }: MessageProps) => (
  <View
    className={`group flex w-full max-w-[95%] flex-col gap-2 ${
      role === 'user' ? 'self-end' : 'self-start'
    } ${className || ''}`}
  >
    {children}
  </View>
));

export type MessageContentProps = PropsWithChildren<{ className?: string }>;

export const MessageContent = memo(
  ({ children, className }: MessageContentProps) => (
    <View
      className={`flex w-fit min-w-0 max-w-full flex-col gap-2 overflow-hidden text-base px-4 py-3 rounded-3xl ${'self-end bg-blue-100 dark:bg-blue-900 text-foreground'} ${className || ''}`}
    >
      {children}
    </View>
  )
);

export type MessageActionsProps = PropsWithChildren<{ className?: string }>;

export const MessageActions = ({
  children,
  className,
}: MessageActionsProps) => (
  <View className={`flex-row items-center gap-1 ${className || ''}`}>
    {children}
  </View>
);

export type MessageActionProps = {
  onPress?: () => void;
  tooltip?: string;
  children: React.ReactNode;
  className?: string;
};

export const MessageAction = ({
  onPress,
  tooltip,
  children,
  className,
}: MessageActionProps) => {
  const handlePress = () => {
    if (tooltip) Alert.alert(tooltip);
    onPress?.();
  };
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700 ${className || ''}`}
    >
      {children}
    </TouchableOpacity>
  );
};

// ==================== MessageBranch Family ====================

interface MessageBranchContextType {
  currentBranch: number;
  totalBranches: number;
  goToPrevious: () => void;
  goToNext: () => void;
  branches: ReactElement[];
  setBranches: (branches: ReactElement[]) => void;
}

const MessageBranchContext = createContext<MessageBranchContextType | null>(
  null
);

const useMessageBranch = () => {
  const context = useContext(MessageBranchContext);
  if (!context)
    throw new Error(
      'MessageBranch components must be used within <MessageBranch>'
    );
  return context;
};

export type MessageBranchProps = PropsWithChildren<{
  defaultBranch?: number;
  onBranchChange?: (index: number) => void;
  className?: string;
}>;

export const MessageBranch = ({
  defaultBranch = 0,
  onBranchChange,
  children,
  className,
}: MessageBranchProps) => {
  const [currentBranch, setCurrentBranch] = useState(defaultBranch);
  const [branches, setBranches] = useState<ReactElement[]>([]);

  const handleBranchChange = useCallback(
    (newBranch: number) => {
      setCurrentBranch(newBranch);
      onBranchChange?.(newBranch);
    },
    [onBranchChange]
  );

  const goToPrevious = useCallback(() => {
    const newBranch =
      currentBranch > 0 ? currentBranch - 1 : branches.length - 1;
    handleBranchChange(newBranch);
  }, [currentBranch, branches.length, handleBranchChange]);

  const goToNext = useCallback(() => {
    const newBranch =
      currentBranch < branches.length - 1 ? currentBranch + 1 : 0;
    handleBranchChange(newBranch);
  }, [currentBranch, branches.length, handleBranchChange]);

  const contextValue = useMemo<MessageBranchContextType>(
    () => ({
      branches,
      currentBranch,
      goToNext,
      goToPrevious,
      setBranches,
      totalBranches: branches.length,
    }),
    [branches, currentBranch, goToNext, goToPrevious]
  );

  return (
    <MessageBranchContext.Provider value={contextValue}>
      <View className={`w-full gap-2 ${className || ''}`}>{children}</View>
    </MessageBranchContext.Provider>
  );
};

export const MessageBranchContent = ({ children }: PropsWithChildren) => {
  const { currentBranch, setBranches, branches } = useMessageBranch();
  const childrenArray = React.Children.toArray(children) as ReactElement[];

  useEffect(() => {
    if (branches.length !== childrenArray.length) setBranches(childrenArray);
  }, [childrenArray, branches.length, setBranches]);

  return childrenArray.map((branch, index) => (
    <View
      key={branch.key}
      className={index === currentBranch ? 'block' : 'hidden'}
    >
      {branch}
    </View>
  ));
};

export const MessageBranchSelector = ({ children }: PropsWithChildren) => {
  const { totalBranches } = useMessageBranch();
  if (totalBranches <= 1) return null;
  return <View className="flex-row">{children}</View>;
};

export const MessageBranchPrevious = ({ children }: PropsWithChildren) => {
  const { goToPrevious, totalBranches } = useMessageBranch();
  return (
    <TouchableOpacity
      disabled={totalBranches <= 1}
      onPress={goToPrevious}
      className="h-8 w-8 items-center justify-center"
    >
      {children ?? <ChevronLeft size={18} color="#64748b" />}
    </TouchableOpacity>
  );
};

export const MessageBranchNext = ({ children }: PropsWithChildren) => {
  const { goToNext, totalBranches } = useMessageBranch();
  return (
    <TouchableOpacity
      disabled={totalBranches <= 1}
      onPress={goToNext}
      className="h-8 w-8 items-center justify-center"
    >
      {children ?? <ChevronRight size={18} color="#64748b" />}
    </TouchableOpacity>
  );
};

export const MessageBranchPage = () => {
  const { currentBranch, totalBranches } = useMessageBranch();
  return (
    <Text className="text-slate-500 dark:text-slate-400 text-sm">
      {currentBranch + 1} of {totalBranches}
    </Text>
  );
};

export const MessageResponse = memo(
  ({ children }: { children: React.ReactNode }) => (
    <Text className="text-base leading-6 text-slate-900 dark:text-slate-100">
      {children}
    </Text>
  )
);

export type MessageToolbarProps = PropsWithChildren<{ className?: string }>;

export const MessageToolbar = ({
  children,
  className,
}: MessageToolbarProps) => (
  <View
    className={`mt-4 flex-row items-center justify-between gap-4 ${className || ''}`}
  >
    {children}
  </View>
);
