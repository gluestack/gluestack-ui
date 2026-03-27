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

export const ModelSelectorTrigger = (props: ModelSelectorTriggerProps) => (
  <Pressable
    className="w-[200px] h-[40px] bg-blue-500 justify-between"
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
          <X size={20} color="#64748b" />
        </ModalCloseButton>
      </ModalHeader>

      <ModalBody className="p-0 flex-1">{children as ReactNode}</ModalBody>
    </ModalContent>
  );
};

// ====================== Command-like Components ======================

export type ModelSelectorInputProps = ComponentProps<typeof TextInput>;

export const ModelSelectorInput = (props: ModelSelectorInputProps) => (
  <TextInput
    className="h-12 px-4 border-b border-gray-200 text-base"
    placeholder="Search models..."
    {...props}
  />
);

export type ModelSelectorListProps = ComponentProps<typeof View>;
export const ModelSelectorList = (props: ModelSelectorListProps) => (
  <View className="flex-1" {...props} />
);

export type ModelSelectorEmptyProps = ComponentProps<typeof View>;
export const ModelSelectorEmpty = (props: ModelSelectorEmptyProps) => (
  <View className="flex-1 items-center justify-center py-12" {...props}>
    <Text className="text-gray-500">No models found.</Text>
  </View>
);

export type ModelSelectorGroupProps = ComponentProps<typeof View> & {
  heading?: string;
};
export const ModelSelectorGroup = ({
  heading,
  children,
  ...props
}: ModelSelectorGroupProps) => (
  <View {...props}>
    {heading && (
      <Text className="px-4 py-2 text-sm font-semibold text-gray-500">
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
  ...props
}: ModelSelectorItemProps) => (
  <Pressable
    className={`flex-row items-center px-4 py-3 ${
      isSelected ? 'bg-blue-50' : 'active:bg-gray-100'
    }`}
    {...props}
  >
    {children}
  </Pressable>
);

export type ModelSelectorShortcutProps = ComponentProps<typeof View>;
export const ModelSelectorShortcut = (props: ModelSelectorShortcutProps) => (
  <View className="ml-auto" {...props} />
);

export const ModelSelectorSeparator = () => (
  <View className="h-px bg-gray-200 mx-4 my-1" />
);

// ====================== UI Helpers ======================

export type ModelSelectorLogoProps = {
  provider: string;
};

export const ModelSelectorLogo = ({ provider }: ModelSelectorLogoProps) => (
  <View className="w-5 h-5 rounded-full bg-gray-100 items-center justify-center">
    <Text className="text-[10px] font-medium">
      {provider.slice(0, 2).toUpperCase()}
    </Text>
  </View>
);

export const ModelSelectorLogoGroup = ({
  children,
}: {
  children: ReactNode;
}) => <View className="flex-row -space-x-1">{children}</View>;

export const ModelSelectorName = ({ children }: { children: ReactNode }) => (
  <Text className="flex-1 text-left text-base ml-3">{children}</Text>
);
