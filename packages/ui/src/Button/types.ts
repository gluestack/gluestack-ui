import type { PressableProps } from "react-native";
import type { SxProps } from "@gluestack/styled";

interface IButtonProps extends PressableProps {
  /**
   * Called when a mouse enters the Pressable
   */
  onHoverIn?: () => void;
  /**
   * Called when a mouse leaves the Pressable
   */
  onHoverOut?: () => void;
  /**
   * Called when Pressable receives focus
   */
  onFocus?: () => void;
  /**
   * Called when Pressable loses focus
   */
  onBlur?: () => void;
  sx?: SxProps;
  resolveContextChildrenStyle?: Array<SxProps>;
  children?: React.ReactNode;
  variant: "greenBox" | "blueBox";
}

export type ButtonProps = Partial<IButtonProps>;
