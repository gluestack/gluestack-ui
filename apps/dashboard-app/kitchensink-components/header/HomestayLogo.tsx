import React, { useContext } from "react";
import { Image } from "@/components/ui";
import { ThemeContext } from "@/App";

const HomestayLogo = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Image
      source={
        colorMode === "light"
          ? require("../../assets/light-logo.svg")
          : require("../../assets/dark-logo.svg")
      }
      alt="homestaylogo"
      className="h-[42px] w-[142px]"
    />
  );
};

export default HomestayLogo;
