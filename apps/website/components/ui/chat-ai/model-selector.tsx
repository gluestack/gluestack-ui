import React, {
  Children,
  isValidElement,
  cloneElement,
  type ReactNode,
  type ComponentProps,
} from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from '@/components/ui/modal';
import { X } from 'lucide-react-native';
import { Pressable, Text, View, TextInput, ScrollView } from 'react-native';

// Context
const ModelSelectorContext = React.createContext<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
} | null>(null);

const useModelSelector = () => {
  const ctx = React.useContext(ModelSelectorContext);
  if (!ctx)
    throw new Error(
      'ModelSelector sub-components must be used inside <ModelSelector>'
    );
  return ctx;
};

// ─────────────────────────────────────────────────────────────
// Root
// ─────────────────────────────────────────────────────────────
export type ModelSelectorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
  children: ReactNode;
};

export const ModelSelector = ({
  open,
  onOpenChange,
  size = 'md',
  children,
}: ModelSelectorProps) => {
  const childrenArray = Children.toArray(children);

  const triggerChildren: ReactNode[] = [];
  let contentElement: React.ReactElement | null = null;

  childrenArray.forEach((child) => {
    if (isValidElement(child) && child.type === ModelSelectorContent) {
      contentElement = child;
    } else {
      triggerChildren.push(child);
    }
  });

  return (
    <ModelSelectorContext.Provider value={{ open, onOpenChange }}>
      {triggerChildren}

      <Modal isOpen={open} onClose={() => onOpenChange(false)} size={size}>
        <ModalBackdrop />
        {contentElement}
      </Modal>
    </ModelSelectorContext.Provider>
  );
};

// ─────────────────────────────────────────────────────────────
// Trigger (asChild support)
// ─────────────────────────────────────────────────────────────
export type ModelSelectorTriggerProps = {
  asChild?: boolean;
} & ComponentProps<typeof Pressable>;

export const ModelSelectorTrigger = ({
  asChild = false,
  className,
  children,
  onPress: userOnPress,
  ...props
}: ModelSelectorTriggerProps) => {
  const { onOpenChange } = useModelSelector();

  const handlePress = () => {
    onOpenChange(true);
    userOnPress?.();
  };

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...props,
      onPress: handlePress,
      className: `${children.props.className || ''} ${className || ''}`,
    } as any);
  }

  return (
    <Pressable
      className={`w-[200px] h-[40px] bg-primary justify-between ${className || ''}`}
      onPress={handlePress}
      {...props}
    >
      {children}
    </Pressable>
  );
};

// ─────────────────────────────────────────────────────────────
// Content — NOW passes size to ModalContent (this fixes the crash)
// ─────────────────────────────────────────────────────────────
export type ModelSelectorContentProps = ComponentProps<typeof ModalContent> & {
  title?: ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'full'; // ← added
};

export const ModelSelectorContent = ({
  title = 'Model Selector',
  children,
  className,
  size, // ← receive from root
  ...props
}: ModelSelectorContentProps) => (
  <ModalContent className={className} {...props}>
    <ModalHeader>
      <Text className="sr-only">{title}</Text>
      <ModalCloseButton>
        <X size={20} className="text-muted-foreground" />
      </ModalCloseButton>
    </ModalHeader>
    <ScrollView className="max-h-[500px]">
      <ModalBody>{children}</ModalBody>
    </ScrollView>
  </ModalContent>
);

// Rest of the components (unchanged)
export const ModelSelectorInput = ({
  className,
  ...props
}: ComponentProps<typeof TextInput>) => (
  <TextInput
    className={`h-12 px-4 border-b border-border text-base text-foreground placeholder:text-muted-foreground ${className || ''}`}
    placeholder="Search models..."
    {...props}
  />
);

export const ModelSelectorList = ({
  className,
  ...props
}: ComponentProps<typeof View>) => (
  <View className={`flex-1 ${className || ' w-full'}`} {...props} />
);

export const ModelSelectorEmpty = ({
  className,
  ...props
}: ComponentProps<typeof View>) => (
  <View
    className={`flex-1 items-center justify-center py-12 ${className || ''}`}
    {...props}
  >
    <Text className="text-muted-foreground">No models found.</Text>
  </View>
);

export const ModelSelectorGroup = ({
  heading,
  children,
  className,
  ...props
}: ComponentProps<typeof View> & { heading?: string }) => (
  <View className={className} {...props}>
    {heading && (
      <Text className="px-4 py-2 text-sm font-semibold text-muted-foreground">
        {heading}
      </Text>
    )}
    {children}
  </View>
);

export const ModelSelectorItem = ({
  isSelected = false,
  children,
  className,
  ...props
}: ComponentProps<typeof Pressable> & { isSelected?: boolean }) => {
  console.log(children);
  return (
    <Pressable
      className={`flex-row items-center  h-4 w-4 px-4 py-3 ${isSelected ? 'bg-accent' : 'active:bg-muted'} ${className || ''}`}
      {...props}
    >
      {children}
    </Pressable>
  );
};

export const ModelSelectorShortcut = ({
  className,
  ...props
}: ComponentProps<typeof View>) => (
  <View className={`ml-auto ${className || ''}`} {...props} />
);

export const ModelSelectorSeparator = ({
  className,
}: {
  className?: string;
}) => <View className={`h-px bg-border mx-4 my-1 ${className || ''}`} />;

export const ModelSelectorLogo = ({ provider }: { provider: string }) => (
  <View className="w-5 h-5 rounded-full bg-muted items-center justify-center">
    <Text className="text-[10px] text-foreground font-medium text-foreground">
      {provider.slice(0, 2).toUpperCase()}
    </Text>
  </View>
);

export const ModelSelectorLogoGroup = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <View className={`flex-row -space-x-1 ${className || ''}`}>{children}</View>
);

export const ModelSelectorName = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <Text
    className={`flex-1 text-left text-base ml-3 text-foreground ${className || ''}`}
  >
    {children}
  </Text>
);
