import { createContext, ReactNode, useContext } from 'react';
import type { SharedValue } from 'react-native-reanimated';
import { useSharedValue } from 'react-native-reanimated';

type BlankContextType = {
  blankSize: SharedValue<number>;
  userMessageHeight: SharedValue<number>;
  assistantMessageHeight: SharedValue<number>;
  messagesContainerHeight: SharedValue<number>;
};

export const BlankContext = createContext<BlankContextType | null>(null);

export const BlankProvider = ({ children }: { children: ReactNode }) => {
  const blankSize = useSharedValue(0);
  const userMessageHeight = useSharedValue(0);
  const assistantMessageHeight = useSharedValue(0);
  const messagesContainerHeight = useSharedValue(0);

  return (
    <BlankContext.Provider
      value={{
        blankSize,
        userMessageHeight,
        assistantMessageHeight,
        messagesContainerHeight,
      }}
    >
      {children}
    </BlankContext.Provider>
  );
};

export const useBlankContext = () => {
  const context = useContext(BlankContext);
  if (!context)
    throw new Error('useBlankContext must be used inside BlankProvider');
  return context;
};
