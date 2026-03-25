// components/ai-elements/message.tsx
import React, { memo } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import type { UIMessage } from 'ai';
import { createContext, useContext, useState } from 'react';

// ==================== BASIC MESSAGE COMPONENTS ====================

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

export type MessageContentProps = {
  role?: 'user' | 'assistant'|'system'; // ← Fixed: Now accepts role
  children: React.ReactNode;
  className?: string;
};

export const MessageContent = memo(

  ({ role, children, className }: MessageContentProps) => {
    console.log("the role inside message ",role)
   return (
    <View
      className={`flex w-fit min-w-0 max-w-full flex-col gap-2 overflow-hidden text-base px-4 py-3 rounded-3xl ${
        role === 'user'
          ? 'self-end bg-blue-600 text-white'
          : 'self-start bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
      } ${className || ''}`}
    >
      {children}
    </View>
    
  )}
);

export const MessageResponse = memo(
  ({ children }: { children: React.ReactNode }) => (
    <Text className="text-base leading-6">{children}</Text>
  )
);

// ==================== TOOLBAR ====================

export type MessageToolbarProps = {
  children: React.ReactNode;
  className?: string;
};

export const MessageToolbar = ({
  children,
  className,
}: MessageToolbarProps) => (
  <View className={`mt-3 flex-row items-center gap-3 ${className || ''}`}>
    {children}
  </View>
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
      className="h-8 w-8 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-700"
    >
      {children}
    </TouchableOpacity>
  );
};

// ==================== MESSAGE BRANCH (Advanced) ====================
// (Keeping your original branch code as-is, only small cleanup)

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
  if (!context)
    throw new Error(
      'MessageBranch components must be used within <MessageBranch>'
    );
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

  const contextValue = {
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
  }, [childrenArray]);

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
