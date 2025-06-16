import React, { useContext } from "react";
import { Icon, MoonIcon, SunIcon, Pressable } from "../../components/ui";
import { ThemeContext } from "../../App";

const ToggleMode = () => {
  const { colorMode, toggleColorMode } = useContext(ThemeContext);
  return (
    <Pressable onPress={toggleColorMode}>
      <Icon
        as={colorMode === "dark" ? SunIcon : MoonIcon}
        size="xl"
        className="stroke-background-700 fill-background-700"
      />
    </Pressable>
  );
};

export default ToggleMode;
