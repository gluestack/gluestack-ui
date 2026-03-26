import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import {
  ChevronRight,
  File as FileIcon,
  Folder,
  FolderOpen,
} from "lucide-react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

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
  path: "",
  name: "",
  isExpanded: false,
});

// ====================== Main FileTree ======================

export type FileTreeProps = {
  expanded?: Set<string>;
  defaultExpanded?: Set<string>;
  selectedPath?: string;
  onSelect?: (path: string) => void;
  onExpandedChange?: (expanded: Set<string>) => void;
  style?: any;
  children: ReactNode;
};

export const FileTree = ({
  expanded: controlledExpanded,
  defaultExpanded = new Set(),
  selectedPath,
  onSelect,
  onExpandedChange,
  style,
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
      <View style={[styles.container, style]}>
        <View style={styles.inner}>{children}</View>
      </View>
    </FileTreeContext.Provider>
  );
};

// ====================== Folder ======================

export type FileTreeFolderProps = {
  path: string;
  name: string;
  children?: ReactNode;
  style?: any;
};

export const FileTreeFolder = ({
  path,
  name,
  children,
  style,
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
      <View style={style}>
        <TouchableOpacity
          style={[styles.folderRow, isSelected && styles.selected]}
          onPress={handleSelect}
          activeOpacity={0.7}
        >
          <TouchableOpacity
            onPress={handleToggle}
            style={styles.chevronButton}
            activeOpacity={0.7}
          >
            <ChevronRight
              size={18}
              color="#64748b"
              style={{ transform: [{ rotate: isExpanded ? "90deg" : "0deg" }] }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.folderContent}
            onPress={handleSelect}
            activeOpacity={0.7}
          >
            {isExpanded ? (
              <FolderOpen size={18} color="#3b82f6" />
            ) : (
              <Folder size={18} color="#3b82f6" />
            )}
            <Text style={styles.name} numberOfLines={1}>
              {name}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Collapsible open={isExpanded}>
          <View style={styles.childrenContainer}>{children}</View>
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
  style?: any;
};

export const FileTreeFile = ({
  path,
  name,
  icon,
  style,
}: FileTreeFileProps) => {
  const { selectedPath, onSelect } = useContext(FileTreeContext);
  const isSelected = selectedPath === path;

  const handlePress = useCallback(() => onSelect?.(path), [onSelect, path]);

  return (
    <TouchableOpacity
      style={[styles.fileRow, isSelected && styles.selected, style]}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      <View style={styles.spacer} />
      <View style={styles.fileContent}>
        {icon ?? <FileIcon size={18} color="#64748b" />}
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// ====================== Actions ======================

export const FileTreeActions = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return <View style={[styles.actions, style]}>{children}</View>;
};

// ====================== Styles ======================

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e2e8f0",
    overflow: "hidden",
  },
  inner: {
    padding: 8,
  },
  folderRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  folderContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  chevronButton: {
    padding: 4,
  },
  fileRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  fileContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    flex: 1,
  },
  spacer: {
    width: 26,
  },
  name: {
    fontSize: 14,
    color: "#1f2937",
    flex: 1,
  },
  selected: {
    backgroundColor: "#f1f5f9",
  },
  childrenContainer: {
    marginLeft: 24,
    paddingLeft: 4,
    borderLeftWidth: 1,
    borderLeftColor: "#e2e8f0",
  },
  actions: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});