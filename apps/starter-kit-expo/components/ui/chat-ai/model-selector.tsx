import React, { Children, isValidElement } from 'react';
import type { ComponentProps, ReactNode } from 'react';
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@/components/ui/modal';
import { X } from 'lucide-react-native';
import { Pressable, Text, View, TextInput } from 'react-native';

// ====================== Core Components ======================

export type ModelSelectorProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

export const ModelSelector = ({
  open,
  onOpenChange,
  children,
}: ModelSelectorProps) => {
  // Filter children - trigger renders outside, content goes in modal
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
    <View>
      {triggerChildren}
      <Modal isOpen={open} onClose={() => onOpenChange(false)}>
        <ModalBackdrop />
        {contentElement}
      </Modal>
    </View>
  );
};

export type ModelSelectorTriggerProps = ComponentProps<typeof Pressable>;

export const ModelSelectorTrigger = ({
  className,
  ...props
}: ModelSelectorTriggerProps) => (
  <Pressable
    className={`w-[200px] h-[40px] bg-primary justify-between ${className || ''}`}
    {...props}
  />
);

export type ModelSelectorContentProps = ComponentProps<typeof ModalContent> & {
  title?: ReactNode;
};

export const ModelSelectorContent = ({
  title = 'Model Selector',
  children,
  className,
  size,
  ...props
}: ModelSelectorContentProps) => {
  return (
    <ModalContent className={className} size={size} {...props}>
      <ModalHeader>
        <Text className="sr-only">{title}</Text>
        <ModalCloseButton>
          <X size={20} className="text-muted-foreground" />
        </ModalCloseButton>
      </ModalHeader>

      <ModalBody className="p-0 flex-1">{children as ReactNode}</ModalBody>
    </ModalContent>
  );
};

// ====================== Command-like Components ======================

export type ModelSelectorInputProps = ComponentProps<typeof TextInput>;

export const ModelSelectorInput = ({
  className,
  ...props
}: ModelSelectorInputProps) => (
  <TextInput
    className={`h-12 px-4 border-b border-border text-base text-foreground placeholder:text-muted-foreground ${className || ''}`}
    placeholder="Search models..."
    {...props}
  />
);

export type ModelSelectorListProps = ComponentProps<typeof View>;
export const ModelSelectorList = ({
  className,
  ...props
}: ModelSelectorListProps) => (
  <View className={`flex-1 ${className || ''}`} {...props} />
);

export type ModelSelectorEmptyProps = ComponentProps<typeof View>;
export const ModelSelectorEmpty = ({
  className,
  ...props
}: ModelSelectorEmptyProps) => (
  <View
    className={`flex-1 items-center justify-center py-12 ${className || ''}`}
    {...props}
  >
    <Text className="text-muted-foreground">No models found.</Text>
  </View>
);

export type ModelSelectorGroupProps = ComponentProps<typeof View> & {
  heading?: string;
};
export const ModelSelectorGroup = ({
  heading,
  children,
  className,
  ...props
}: ModelSelectorGroupProps) => (
  <View className={className} {...props}>
    {heading && (
      <Text className="px-4 py-2 text-sm font-semibold text-muted-foreground">
        {heading}
      </Text>
    )}
    {children}
  </View>
);

export type ModelSelectorItemProps = ComponentProps<typeof Pressable> & {
  value?: string;
  isSelected?: boolean;
};

export const ModelSelectorItem = ({
  isSelected = false,
  children,
  className,
  ...props
}: ModelSelectorItemProps) => (
  <Pressable
    className={`flex-row items-center px-4 py-3 ${
      isSelected ? 'bg-accent' : 'active:bg-muted'
    } ${className || ''}`}
    {...props}
  >
    {children}
  </Pressable>
);

export type ModelSelectorShortcutProps = ComponentProps<typeof View>;
export const ModelSelectorShortcut = ({
  className,
  ...props
}: ModelSelectorShortcutProps) => (
  <View className={`ml-auto ${className || ''}`} {...props} />
);

export const ModelSelectorSeparator = ({
  className,
}: {
  className?: string;
}) => <View className={`h-px bg-border mx-4 my-1 ${className || ''}`} />;

// ====================== UI Helpers ======================

export type ModelSelectorLogoProps = {
  provider: string;
};

export const ModelSelectorLogo = ({ provider }: ModelSelectorLogoProps) => (
  <View className="w-5 h-5 rounded-full bg-muted items-center justify-center">
    <Text className="text-[10px] font-medium text-foreground">
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
