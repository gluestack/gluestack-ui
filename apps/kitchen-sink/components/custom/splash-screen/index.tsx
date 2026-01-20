import React from "react";
import LottieView from "lottie-react-native";
import { Box } from "@/components/ui/box";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const SplashScreen = () => {
  return (
    <Box
      className="flex-1 bg-black justify-center items-center"
      style={{ width, height }}
    >
      <LottieView
        autoPlay
        loop={false}
        source={require("@/assets/animations/splash.json")}
        style={{ width: 300, height: 300 }}
      />
    </Box>
  );
};