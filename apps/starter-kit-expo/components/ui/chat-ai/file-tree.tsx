import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {
  ChevronRight,
  File as FileIcon,
  Folder,
  FolderOpen,
} from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from 'react-native-reanimated';

// ====================== Custom Collapsible ======================

type CollapsibleProps = {
  open: boolean;
  children: ReactNode;
};

const Collapsible = ({ open, children }: CollapsibleProps) => {
  const progress = useSharedValue(open ? 1 : 0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
    maxHeight: progress.value * 9999,
  }));

  React.useEffect(() => {
    progress.value = withTiming(open ? 1 : 0, { duration: 180 });
  }, [open]);

  return <Animated.View style={animatedStyle}>{children}</Animated.View>;
};

// ====================== Contexts ======================

interface FileTreeContextType {
  expandedPaths: Set<string>;
  togglePath: (path: string) => void;
  selectedPath?: string;
  onSelect?: (path: string) => void;
}

const FileTreeContext = createContext<FileTreeContextType>({
  expandedPaths: new Set(),
  togglePath: () => {},
});

interface FileTreeFolderContextType {
  path: string;
  name: string;
  isExpanded: boolean;
}

const FileTreeFolderContext = createContext<FileTreeFolderContextType>({
  path: '',
  name: '',
  isExpanded: false,
});

// ====================== Main FileTree ======================

export type FileTreeProps = {
  expanded?: Set<string>;
  defaultExpanded?: Set<string>;
  selectedPath?: string;
  onSelect?: (path: string) => void;
  onExpandedChange?: (expanded: Set<string>) => void;
  className?: string;
  children: ReactNode;
};

export const FileTree = ({
  expanded: controlledExpanded,
  defaultExpanded = new Set(),
  selectedPath,
  onSelect,
  onExpandedChange,
  className,
  children,
}: FileTreeProps) => {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);

  const expandedPaths = controlledExpanded ?? internalExpanded;

  const togglePath = useCallback(
    (path: string) => {
      const newExpanded = new Set(expandedPaths);
      if (newExpanded.has(path)) {
        newExpanded.delete(path);
      } else {
        newExpanded.add(path);
      }
      setInternalExpanded(newExpanded);
      onExpandedChange?.(newExpanded);
    },
    [expandedPaths, onExpandedChange]
  );

  const contextValue = useMemo(
    () => ({ expandedPaths, togglePath, selectedPath, onSelect }),
    [expandedPaths, togglePath, selectedPath, onSelect]
  );

  return (
    <FileTreeContext.Provider value={contextValue}>
      <View
        className={`bg-background rounded-xl border border-border overflow-hidden ${className || ''}`}
      >
        <View className="p-2">{children}</View>
      </View>
    </FileTreeContext.Provider>
  );
};

// ====================== Folder ======================

export type FileTreeFolderProps = {
  path: string;
  name: string;
  children?: ReactNode;
  className?: string;
};

export const FileTreeFolder = ({
  path,
  name,
  children,
  className,
}: FileTreeFolderProps) => {
  const { expandedPaths, togglePath, selectedPath, onSelect } =
    useContext(FileTreeContext);

  const isExpanded = expandedPaths.has(path);
  const isSelected = selectedPath === path;

  const handleToggle = useCallback(() => togglePath(path), [togglePath, path]);
  const handleSelect = useCallback(() => onSelect?.(path), [onSelect, path]);

  const folderContextValue = useMemo(
    () => ({ isExpanded, name, path }),
    [isExpanded, name, path]
  );

  return (
    <FileTreeFolderContext.Provider value={folderContextValue}>
      <View className={className}>
        <TouchableOpacity
          className={`flex-row items-center py-1.5 px-2 rounded-md ${isSelected ? 'bg-accent' : ''}`}
          onPress={handleSelect}
          activeOpacity={0.7}
        >
          <TouchableOpacity
            onPress={handleToggle}
            className="p-1"
            activeOpacity={0.7}
          >
            <ChevronRight
              size={18}
              className="text-muted-foreground"
              style={{ transform: [{ rotate: isExpanded ? '90deg' : '0deg' }] }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center flex-1 gap-2"
            onPress={handleSelect}
            activeOpacity={0.7}
          >
            {isExpanded ? (
              <FolderOpen size={18} className="text-primary" />
            ) : (
              <Folder size={18} className="text-primary" />
            )}
            <Text className="text-sm text-foreground flex-1" numberOfLines={1}>
              {name}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Collapsible open={isExpanded}>
          <View className="ml-6 pl-1 border-l border-border">{children}</View>
        </Collapsible>
      </View>
    </FileTreeFolderContext.Provider>
  );
};

// ====================== File ======================

export type FileTreeFileProps = {
  path: string;
  name: string;
  icon?: ReactNode;
  className?: string;
};

export const FileTreeFile = ({
  path,
  name,
  icon,
  className,
}: FileTreeFileProps) => {
  const { selectedPath, onSelect } = useContext(FileTreeContext);
  const isSelected = selectedPath === path;

  const handlePress = useCallback(() => onSelect?.(path), [onSelect, path]);

  return (
    <TouchableOpacity
      className={`flex-row items-center py-1.5 px-2 rounded-md ${isSelected ? 'bg-accent' : ''} ${className || ''}`}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View className="w-6.5" />
      <View className="flex-row items-center gap-2 flex-1">
        {icon ?? <FileIcon size={18} className="text-muted-foreground" />}
        <Text className="text-sm text-foreground flex-1" numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// ====================== Actions ======================

export const FileTreeActions = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <View
      className={`ml-auto flex-row items-center gap-1.5 ${className || ''}`}
    >
      {children}
    </View>
  );
};
