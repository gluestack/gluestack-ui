import React from "react";
import "./button.css";
import { Button as GluestackButton, ButtonText } from "@gluestack-ui/themed";
import { Wrapper } from "./Wrapper";

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <Wrapper>
      <GluestackButton>
        <ButtonText>Hello</ButtonText>
      </GluestackButton>
    </Wrapper>
  );
};
