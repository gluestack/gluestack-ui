import React, { memo } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Svg, { Defs, Pattern, Rect, G, Circle } from "react-native-svg";

type NoiseOverlayProps = {
  /**
   * Color of the noise (hex with optional alpha)
   * @default "#00000040"
   */
  color?: string;
  /**
   * Opacity of the overlay (0-100)
   * @default 25
   */
  opacity?: number;
  /**
   * Additional styles for the container
   */
  style?: ViewStyle;
};

/**
 * A static monotone noise/grain overlay component.
 * Uses a pre-computed SVG pattern for optimal performance.
 */
export const NoiseOverlay = memo(
  ({ color = "#00000040", opacity = 25, style }: NoiseOverlayProps) => {
    return (
      <View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          { opacity: opacity / 100, overflow: "hidden", borderRadius: 16 },
          style,
        ]}
      >
        <Svg width="100%" height="100%" style={StyleSheet.absoluteFill}>
          <Defs>
            <Pattern
              id="grain"
              x="0"
              y="0"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <G fill={color}>
                {/* Row 0-5 */}
                <Circle cx="1" cy="1" r="0.3" />
                <Circle cx="3" cy="2" r="0.3" />
                <Circle cx="5" cy="1" r="0.3" />
                <Circle cx="7" cy="3" r="0.3" />
                <Circle cx="9" cy="1" r="0.3" />
                <Circle cx="11" cy="2" r="0.3" />
                <Circle cx="13" cy="4" r="0.3" />
                <Circle cx="15" cy="1" r="0.3" />
                <Circle cx="17" cy="3" r="0.3" />
                <Circle cx="19" cy="2" r="0.3" />
                <Circle cx="21" cy="5" r="0.3" />
                <Circle cx="23" cy="1" r="0.3" />
                <Circle cx="25" cy="3" r="0.3" />
                <Circle cx="27" cy="2" r="0.3" />
                <Circle cx="29" cy="4" r="0.3" />
                <Circle cx="31" cy="1" r="0.3" />
                <Circle cx="33" cy="3" r="0.3" />
                <Circle cx="35" cy="5" r="0.3" />
                <Circle cx="37" cy="2" r="0.3" />
                <Circle cx="39" cy="4" r="0.3" />
                <Circle cx="41" cy="1" r="0.3" />
                <Circle cx="43" cy="3" r="0.3" />
                <Circle cx="45" cy="2" r="0.3" />
                <Circle cx="47" cy="4" r="0.3" />
                <Circle cx="49" cy="1" r="0.3" />
                <Circle cx="2" cy="4" r="0.3" />
                <Circle cx="4" cy="5" r="0.3" />
                <Circle cx="6" cy="3" r="0.3" />
                <Circle cx="8" cy="5" r="0.3" />
                <Circle cx="10" cy="4" r="0.3" />
                <Circle cx="12" cy="5" r="0.3" />
                <Circle cx="14" cy="3" r="0.3" />
                <Circle cx="16" cy="5" r="0.3" />
                <Circle cx="18" cy="4" r="0.3" />
                <Circle cx="20" cy="3" r="0.3" />
                <Circle cx="22" cy="4" r="0.3" />
                <Circle cx="24" cy="5" r="0.3" />
                <Circle cx="26" cy="4" r="0.3" />
                <Circle cx="28" cy="5" r="0.3" />
                <Circle cx="30" cy="3" r="0.3" />
                <Circle cx="32" cy="5" r="0.3" />
                <Circle cx="34" cy="4" r="0.3" />
                <Circle cx="36" cy="3" r="0.3" />
                <Circle cx="38" cy="5" r="0.3" />
                <Circle cx="40" cy="4" r="0.3" />
                <Circle cx="42" cy="5" r="0.3" />
                <Circle cx="44" cy="4" r="0.3" />
                <Circle cx="46" cy="5" r="0.3" />
                <Circle cx="48" cy="3" r="0.3" />
                {/* Row 6-10 */}
                <Circle cx="1" cy="6" r="0.3" />
                <Circle cx="3" cy="7" r="0.3" />
                <Circle cx="5" cy="8" r="0.3" />
                <Circle cx="7" cy="6" r="0.3" />
                <Circle cx="9" cy="9" r="0.3" />
                <Circle cx="11" cy="7" r="0.3" />
                <Circle cx="13" cy="8" r="0.3" />
                <Circle cx="15" cy="6" r="0.3" />
                <Circle cx="17" cy="9" r="0.3" />
                <Circle cx="19" cy="7" r="0.3" />
                <Circle cx="21" cy="8" r="0.3" />
                <Circle cx="23" cy="6" r="0.3" />
                <Circle cx="25" cy="9" r="0.3" />
                <Circle cx="27" cy="7" r="0.3" />
                <Circle cx="29" cy="8" r="0.3" />
                <Circle cx="31" cy="6" r="0.3" />
                <Circle cx="33" cy="9" r="0.3" />
                <Circle cx="35" cy="7" r="0.3" />
                <Circle cx="37" cy="8" r="0.3" />
                <Circle cx="39" cy="6" r="0.3" />
                <Circle cx="41" cy="9" r="0.3" />
                <Circle cx="43" cy="7" r="0.3" />
                <Circle cx="45" cy="8" r="0.3" />
                <Circle cx="47" cy="6" r="0.3" />
                <Circle cx="49" cy="9" r="0.3" />
                <Circle cx="2" cy="8" r="0.3" />
                <Circle cx="4" cy="9" r="0.3" />
                <Circle cx="6" cy="7" r="0.3" />
                <Circle cx="8" cy="10" r="0.3" />
                <Circle cx="10" cy="8" r="0.3" />
                <Circle cx="12" cy="10" r="0.3" />
                <Circle cx="14" cy="9" r="0.3" />
                <Circle cx="16" cy="10" r="0.3" />
                <Circle cx="18" cy="8" r="0.3" />
                <Circle cx="20" cy="10" r="0.3" />
                <Circle cx="22" cy="9" r="0.3" />
                <Circle cx="24" cy="10" r="0.3" />
                <Circle cx="26" cy="8" r="0.3" />
                <Circle cx="28" cy="10" r="0.3" />
                <Circle cx="30" cy="9" r="0.3" />
                <Circle cx="32" cy="10" r="0.3" />
                <Circle cx="34" cy="8" r="0.3" />
                <Circle cx="36" cy="10" r="0.3" />
                <Circle cx="38" cy="9" r="0.3" />
                <Circle cx="40" cy="10" r="0.3" />
                <Circle cx="42" cy="8" r="0.3" />
                <Circle cx="44" cy="10" r="0.3" />
                <Circle cx="46" cy="9" r="0.3" />
                <Circle cx="48" cy="10" r="0.3" />
                {/* Row 11-15 */}
                <Circle cx="1" cy="11" r="0.3" />
                <Circle cx="3" cy="12" r="0.3" />
                <Circle cx="5" cy="13" r="0.3" />
                <Circle cx="7" cy="11" r="0.3" />
                <Circle cx="9" cy="14" r="0.3" />
                <Circle cx="11" cy="12" r="0.3" />
                <Circle cx="13" cy="13" r="0.3" />
                <Circle cx="15" cy="11" r="0.3" />
                <Circle cx="17" cy="14" r="0.3" />
                <Circle cx="19" cy="12" r="0.3" />
                <Circle cx="21" cy="13" r="0.3" />
                <Circle cx="23" cy="11" r="0.3" />
                <Circle cx="25" cy="14" r="0.3" />
                <Circle cx="27" cy="12" r="0.3" />
                <Circle cx="29" cy="13" r="0.3" />
                <Circle cx="31" cy="11" r="0.3" />
                <Circle cx="33" cy="14" r="0.3" />
                <Circle cx="35" cy="12" r="0.3" />
                <Circle cx="37" cy="13" r="0.3" />
                <Circle cx="39" cy="11" r="0.3" />
                <Circle cx="41" cy="14" r="0.3" />
                <Circle cx="43" cy="12" r="0.3" />
                <Circle cx="45" cy="13" r="0.3" />
                <Circle cx="47" cy="11" r="0.3" />
                <Circle cx="49" cy="14" r="0.3" />
                <Circle cx="2" cy="13" r="0.3" />
                <Circle cx="4" cy="14" r="0.3" />
                <Circle cx="6" cy="12" r="0.3" />
                <Circle cx="8" cy="15" r="0.3" />
                <Circle cx="10" cy="13" r="0.3" />
                <Circle cx="12" cy="15" r="0.3" />
                <Circle cx="14" cy="14" r="0.3" />
                <Circle cx="16" cy="15" r="0.3" />
                <Circle cx="18" cy="13" r="0.3" />
                <Circle cx="20" cy="15" r="0.3" />
                <Circle cx="22" cy="14" r="0.3" />
                <Circle cx="24" cy="15" r="0.3" />
                <Circle cx="26" cy="13" r="0.3" />
                <Circle cx="28" cy="15" r="0.3" />
                <Circle cx="30" cy="14" r="0.3" />
                <Circle cx="32" cy="15" r="0.3" />
                <Circle cx="34" cy="13" r="0.3" />
                <Circle cx="36" cy="15" r="0.3" />
                <Circle cx="38" cy="14" r="0.3" />
                <Circle cx="40" cy="15" r="0.3" />
                <Circle cx="42" cy="13" r="0.3" />
                <Circle cx="44" cy="15" r="0.3" />
                <Circle cx="46" cy="14" r="0.3" />
                <Circle cx="48" cy="15" r="0.3" />
                {/* Row 16-20 */}
                <Circle cx="1" cy="16" r="0.3" />
                <Circle cx="3" cy="17" r="0.3" />
                <Circle cx="5" cy="18" r="0.3" />
                <Circle cx="7" cy="16" r="0.3" />
                <Circle cx="9" cy="19" r="0.3" />
                <Circle cx="11" cy="17" r="0.3" />
                <Circle cx="13" cy="18" r="0.3" />
                <Circle cx="15" cy="16" r="0.3" />
                <Circle cx="17" cy="19" r="0.3" />
                <Circle cx="19" cy="17" r="0.3" />
                <Circle cx="21" cy="18" r="0.3" />
                <Circle cx="23" cy="16" r="0.3" />
                <Circle cx="25" cy="19" r="0.3" />
                <Circle cx="27" cy="17" r="0.3" />
                <Circle cx="29" cy="18" r="0.3" />
                <Circle cx="31" cy="16" r="0.3" />
                <Circle cx="33" cy="19" r="0.3" />
                <Circle cx="35" cy="17" r="0.3" />
                <Circle cx="37" cy="18" r="0.3" />
                <Circle cx="39" cy="16" r="0.3" />
                <Circle cx="41" cy="19" r="0.3" />
                <Circle cx="43" cy="17" r="0.3" />
                <Circle cx="45" cy="18" r="0.3" />
                <Circle cx="47" cy="16" r="0.3" />
                <Circle cx="49" cy="19" r="0.3" />
                <Circle cx="2" cy="18" r="0.3" />
                <Circle cx="4" cy="19" r="0.3" />
                <Circle cx="6" cy="17" r="0.3" />
                <Circle cx="8" cy="20" r="0.3" />
                <Circle cx="10" cy="18" r="0.3" />
                <Circle cx="12" cy="20" r="0.3" />
                <Circle cx="14" cy="19" r="0.3" />
                <Circle cx="16" cy="20" r="0.3" />
                <Circle cx="18" cy="18" r="0.3" />
                <Circle cx="20" cy="20" r="0.3" />
                <Circle cx="22" cy="19" r="0.3" />
                <Circle cx="24" cy="20" r="0.3" />
                <Circle cx="26" cy="18" r="0.3" />
                <Circle cx="28" cy="20" r="0.3" />
                <Circle cx="30" cy="19" r="0.3" />
                <Circle cx="32" cy="20" r="0.3" />
                <Circle cx="34" cy="18" r="0.3" />
                <Circle cx="36" cy="20" r="0.3" />
                <Circle cx="38" cy="19" r="0.3" />
                <Circle cx="40" cy="20" r="0.3" />
                <Circle cx="42" cy="18" r="0.3" />
                <Circle cx="44" cy="20" r="0.3" />
                <Circle cx="46" cy="19" r="0.3" />
                <Circle cx="48" cy="20" r="0.3" />
                {/* Row 21-25 */}
                <Circle cx="1" cy="21" r="0.3" />
                <Circle cx="3" cy="22" r="0.3" />
                <Circle cx="5" cy="23" r="0.3" />
                <Circle cx="7" cy="21" r="0.3" />
                <Circle cx="9" cy="24" r="0.3" />
                <Circle cx="11" cy="22" r="0.3" />
                <Circle cx="13" cy="23" r="0.3" />
                <Circle cx="15" cy="21" r="0.3" />
                <Circle cx="17" cy="24" r="0.3" />
                <Circle cx="19" cy="22" r="0.3" />
                <Circle cx="21" cy="23" r="0.3" />
                <Circle cx="23" cy="21" r="0.3" />
                <Circle cx="25" cy="24" r="0.3" />
                <Circle cx="27" cy="22" r="0.3" />
                <Circle cx="29" cy="23" r="0.3" />
                <Circle cx="31" cy="21" r="0.3" />
                <Circle cx="33" cy="24" r="0.3" />
                <Circle cx="35" cy="22" r="0.3" />
                <Circle cx="37" cy="23" r="0.3" />
                <Circle cx="39" cy="21" r="0.3" />
                <Circle cx="41" cy="24" r="0.3" />
                <Circle cx="43" cy="22" r="0.3" />
                <Circle cx="45" cy="23" r="0.3" />
                <Circle cx="47" cy="21" r="0.3" />
                <Circle cx="49" cy="24" r="0.3" />
                <Circle cx="2" cy="23" r="0.3" />
                <Circle cx="4" cy="24" r="0.3" />
                <Circle cx="6" cy="22" r="0.3" />
                <Circle cx="8" cy="25" r="0.3" />
                <Circle cx="10" cy="23" r="0.3" />
                <Circle cx="12" cy="25" r="0.3" />
                <Circle cx="14" cy="24" r="0.3" />
                <Circle cx="16" cy="25" r="0.3" />
                <Circle cx="18" cy="23" r="0.3" />
                <Circle cx="20" cy="25" r="0.3" />
                <Circle cx="22" cy="24" r="0.3" />
                <Circle cx="24" cy="25" r="0.3" />
                <Circle cx="26" cy="23" r="0.3" />
                <Circle cx="28" cy="25" r="0.3" />
                <Circle cx="30" cy="24" r="0.3" />
                <Circle cx="32" cy="25" r="0.3" />
                <Circle cx="34" cy="23" r="0.3" />
                <Circle cx="36" cy="25" r="0.3" />
                <Circle cx="38" cy="24" r="0.3" />
                <Circle cx="40" cy="25" r="0.3" />
                <Circle cx="42" cy="23" r="0.3" />
                <Circle cx="44" cy="25" r="0.3" />
                <Circle cx="46" cy="24" r="0.3" />
                <Circle cx="48" cy="25" r="0.3" />
                {/* Row 26-30 */}
                <Circle cx="1" cy="26" r="0.3" />
                <Circle cx="3" cy="27" r="0.3" />
                <Circle cx="5" cy="28" r="0.3" />
                <Circle cx="7" cy="26" r="0.3" />
                <Circle cx="9" cy="29" r="0.3" />
                <Circle cx="11" cy="27" r="0.3" />
                <Circle cx="13" cy="28" r="0.3" />
                <Circle cx="15" cy="26" r="0.3" />
                <Circle cx="17" cy="29" r="0.3" />
                <Circle cx="19" cy="27" r="0.3" />
                <Circle cx="21" cy="28" r="0.3" />
                <Circle cx="23" cy="26" r="0.3" />
                <Circle cx="25" cy="29" r="0.3" />
                <Circle cx="27" cy="27" r="0.3" />
                <Circle cx="29" cy="28" r="0.3" />
                <Circle cx="31" cy="26" r="0.3" />
                <Circle cx="33" cy="29" r="0.3" />
                <Circle cx="35" cy="27" r="0.3" />
                <Circle cx="37" cy="28" r="0.3" />
                <Circle cx="39" cy="26" r="0.3" />
                <Circle cx="41" cy="29" r="0.3" />
                <Circle cx="43" cy="27" r="0.3" />
                <Circle cx="45" cy="28" r="0.3" />
                <Circle cx="47" cy="26" r="0.3" />
                <Circle cx="49" cy="29" r="0.3" />
                <Circle cx="2" cy="28" r="0.3" />
                <Circle cx="4" cy="29" r="0.3" />
                <Circle cx="6" cy="27" r="0.3" />
                <Circle cx="8" cy="30" r="0.3" />
                <Circle cx="10" cy="28" r="0.3" />
                <Circle cx="12" cy="30" r="0.3" />
                <Circle cx="14" cy="29" r="0.3" />
                <Circle cx="16" cy="30" r="0.3" />
                <Circle cx="18" cy="28" r="0.3" />
                <Circle cx="20" cy="30" r="0.3" />
                <Circle cx="22" cy="29" r="0.3" />
                <Circle cx="24" cy="30" r="0.3" />
                <Circle cx="26" cy="28" r="0.3" />
                <Circle cx="28" cy="30" r="0.3" />
                <Circle cx="30" cy="29" r="0.3" />
                <Circle cx="32" cy="30" r="0.3" />
                <Circle cx="34" cy="28" r="0.3" />
                <Circle cx="36" cy="30" r="0.3" />
                <Circle cx="38" cy="29" r="0.3" />
                <Circle cx="40" cy="30" r="0.3" />
                <Circle cx="42" cy="28" r="0.3" />
                <Circle cx="44" cy="30" r="0.3" />
                <Circle cx="46" cy="29" r="0.3" />
                <Circle cx="48" cy="30" r="0.3" />
                {/* Row 31-35 */}
                <Circle cx="1" cy="31" r="0.3" />
                <Circle cx="3" cy="32" r="0.3" />
                <Circle cx="5" cy="33" r="0.3" />
                <Circle cx="7" cy="31" r="0.3" />
                <Circle cx="9" cy="34" r="0.3" />
                <Circle cx="11" cy="32" r="0.3" />
                <Circle cx="13" cy="33" r="0.3" />
                <Circle cx="15" cy="31" r="0.3" />
                <Circle cx="17" cy="34" r="0.3" />
                <Circle cx="19" cy="32" r="0.3" />
                <Circle cx="21" cy="33" r="0.3" />
                <Circle cx="23" cy="31" r="0.3" />
                <Circle cx="25" cy="34" r="0.3" />
                <Circle cx="27" cy="32" r="0.3" />
                <Circle cx="29" cy="33" r="0.3" />
                <Circle cx="31" cy="31" r="0.3" />
                <Circle cx="33" cy="34" r="0.3" />
                <Circle cx="35" cy="32" r="0.3" />
                <Circle cx="37" cy="33" r="0.3" />
                <Circle cx="39" cy="31" r="0.3" />
                <Circle cx="41" cy="34" r="0.3" />
                <Circle cx="43" cy="32" r="0.3" />
                <Circle cx="45" cy="33" r="0.3" />
                <Circle cx="47" cy="31" r="0.3" />
                <Circle cx="49" cy="34" r="0.3" />
                <Circle cx="2" cy="33" r="0.3" />
                <Circle cx="4" cy="34" r="0.3" />
                <Circle cx="6" cy="32" r="0.3" />
                <Circle cx="8" cy="35" r="0.3" />
                <Circle cx="10" cy="33" r="0.3" />
                <Circle cx="12" cy="35" r="0.3" />
                <Circle cx="14" cy="34" r="0.3" />
                <Circle cx="16" cy="35" r="0.3" />
                <Circle cx="18" cy="33" r="0.3" />
                <Circle cx="20" cy="35" r="0.3" />
                <Circle cx="22" cy="34" r="0.3" />
                <Circle cx="24" cy="35" r="0.3" />
                <Circle cx="26" cy="33" r="0.3" />
                <Circle cx="28" cy="35" r="0.3" />
                <Circle cx="30" cy="34" r="0.3" />
                <Circle cx="32" cy="35" r="0.3" />
                <Circle cx="34" cy="33" r="0.3" />
                <Circle cx="36" cy="35" r="0.3" />
                <Circle cx="38" cy="34" r="0.3" />
                <Circle cx="40" cy="35" r="0.3" />
                <Circle cx="42" cy="33" r="0.3" />
                <Circle cx="44" cy="35" r="0.3" />
                <Circle cx="46" cy="34" r="0.3" />
                <Circle cx="48" cy="35" r="0.3" />
                {/* Row 36-40 */}
                <Circle cx="1" cy="36" r="0.3" />
                <Circle cx="3" cy="37" r="0.3" />
                <Circle cx="5" cy="38" r="0.3" />
                <Circle cx="7" cy="36" r="0.3" />
                <Circle cx="9" cy="39" r="0.3" />
                <Circle cx="11" cy="37" r="0.3" />
                <Circle cx="13" cy="38" r="0.3" />
                <Circle cx="15" cy="36" r="0.3" />
                <Circle cx="17" cy="39" r="0.3" />
                <Circle cx="19" cy="37" r="0.3" />
                <Circle cx="21" cy="38" r="0.3" />
                <Circle cx="23" cy="36" r="0.3" />
                <Circle cx="25" cy="39" r="0.3" />
                <Circle cx="27" cy="37" r="0.3" />
                <Circle cx="29" cy="38" r="0.3" />
                <Circle cx="31" cy="36" r="0.3" />
                <Circle cx="33" cy="39" r="0.3" />
                <Circle cx="35" cy="37" r="0.3" />
                <Circle cx="37" cy="38" r="0.3" />
                <Circle cx="39" cy="36" r="0.3" />
                <Circle cx="41" cy="39" r="0.3" />
                <Circle cx="43" cy="37" r="0.3" />
                <Circle cx="45" cy="38" r="0.3" />
                <Circle cx="47" cy="36" r="0.3" />
                <Circle cx="49" cy="39" r="0.3" />
                <Circle cx="2" cy="38" r="0.3" />
                <Circle cx="4" cy="39" r="0.3" />
                <Circle cx="6" cy="37" r="0.3" />
                <Circle cx="8" cy="40" r="0.3" />
                <Circle cx="10" cy="38" r="0.3" />
                <Circle cx="12" cy="40" r="0.3" />
                <Circle cx="14" cy="39" r="0.3" />
                <Circle cx="16" cy="40" r="0.3" />
                <Circle cx="18" cy="38" r="0.3" />
                <Circle cx="20" cy="40" r="0.3" />
                <Circle cx="22" cy="39" r="0.3" />
                <Circle cx="24" cy="40" r="0.3" />
                <Circle cx="26" cy="38" r="0.3" />
                <Circle cx="28" cy="40" r="0.3" />
                <Circle cx="30" cy="39" r="0.3" />
                <Circle cx="32" cy="40" r="0.3" />
                <Circle cx="34" cy="38" r="0.3" />
                <Circle cx="36" cy="40" r="0.3" />
                <Circle cx="38" cy="39" r="0.3" />
                <Circle cx="40" cy="40" r="0.3" />
                <Circle cx="42" cy="38" r="0.3" />
                <Circle cx="44" cy="40" r="0.3" />
                <Circle cx="46" cy="39" r="0.3" />
                <Circle cx="48" cy="40" r="0.3" />
                {/* Row 41-45 */}
                <Circle cx="1" cy="41" r="0.3" />
                <Circle cx="3" cy="42" r="0.3" />
                <Circle cx="5" cy="43" r="0.3" />
                <Circle cx="7" cy="41" r="0.3" />
                <Circle cx="9" cy="44" r="0.3" />
                <Circle cx="11" cy="42" r="0.3" />
                <Circle cx="13" cy="43" r="0.3" />
                <Circle cx="15" cy="41" r="0.3" />
                <Circle cx="17" cy="44" r="0.3" />
                <Circle cx="19" cy="42" r="0.3" />
                <Circle cx="21" cy="43" r="0.3" />
                <Circle cx="23" cy="41" r="0.3" />
                <Circle cx="25" cy="44" r="0.3" />
                <Circle cx="27" cy="42" r="0.3" />
                <Circle cx="29" cy="43" r="0.3" />
                <Circle cx="31" cy="41" r="0.3" />
                <Circle cx="33" cy="44" r="0.3" />
                <Circle cx="35" cy="42" r="0.3" />
                <Circle cx="37" cy="43" r="0.3" />
                <Circle cx="39" cy="41" r="0.3" />
                <Circle cx="41" cy="44" r="0.3" />
                <Circle cx="43" cy="42" r="0.3" />
                <Circle cx="45" cy="43" r="0.3" />
                <Circle cx="47" cy="41" r="0.3" />
                <Circle cx="49" cy="44" r="0.3" />
                <Circle cx="2" cy="43" r="0.3" />
                <Circle cx="4" cy="44" r="0.3" />
                <Circle cx="6" cy="42" r="0.3" />
                <Circle cx="8" cy="45" r="0.3" />
                <Circle cx="10" cy="43" r="0.3" />
                <Circle cx="12" cy="45" r="0.3" />
                <Circle cx="14" cy="44" r="0.3" />
                <Circle cx="16" cy="45" r="0.3" />
                <Circle cx="18" cy="43" r="0.3" />
                <Circle cx="20" cy="45" r="0.3" />
                <Circle cx="22" cy="44" r="0.3" />
                <Circle cx="24" cy="45" r="0.3" />
                <Circle cx="26" cy="43" r="0.3" />
                <Circle cx="28" cy="45" r="0.3" />
                <Circle cx="30" cy="44" r="0.3" />
                <Circle cx="32" cy="45" r="0.3" />
                <Circle cx="34" cy="43" r="0.3" />
                <Circle cx="36" cy="45" r="0.3" />
                <Circle cx="38" cy="44" r="0.3" />
                <Circle cx="40" cy="45" r="0.3" />
                <Circle cx="42" cy="43" r="0.3" />
                <Circle cx="44" cy="45" r="0.3" />
                <Circle cx="46" cy="44" r="0.3" />
                <Circle cx="48" cy="45" r="0.3" />
                {/* Row 46-50 */}
                <Circle cx="1" cy="46" r="0.3" />
                <Circle cx="3" cy="47" r="0.3" />
                <Circle cx="5" cy="48" r="0.3" />
                <Circle cx="7" cy="46" r="0.3" />
                <Circle cx="9" cy="49" r="0.3" />
                <Circle cx="11" cy="47" r="0.3" />
                <Circle cx="13" cy="48" r="0.3" />
                <Circle cx="15" cy="46" r="0.3" />
                <Circle cx="17" cy="49" r="0.3" />
                <Circle cx="19" cy="47" r="0.3" />
                <Circle cx="21" cy="48" r="0.3" />
                <Circle cx="23" cy="46" r="0.3" />
                <Circle cx="25" cy="49" r="0.3" />
                <Circle cx="27" cy="47" r="0.3" />
                <Circle cx="29" cy="48" r="0.3" />
                <Circle cx="31" cy="46" r="0.3" />
                <Circle cx="33" cy="49" r="0.3" />
                <Circle cx="35" cy="47" r="0.3" />
                <Circle cx="37" cy="48" r="0.3" />
                <Circle cx="39" cy="46" r="0.3" />
                <Circle cx="41" cy="49" r="0.3" />
                <Circle cx="43" cy="47" r="0.3" />
                <Circle cx="45" cy="48" r="0.3" />
                <Circle cx="47" cy="46" r="0.3" />
                <Circle cx="49" cy="49" r="0.3" />
                <Circle cx="2" cy="48" r="0.3" />
                <Circle cx="4" cy="49" r="0.3" />
                <Circle cx="6" cy="47" r="0.3" />
                <Circle cx="10" cy="48" r="0.3" />
                <Circle cx="14" cy="49" r="0.3" />
                <Circle cx="18" cy="48" r="0.3" />
                <Circle cx="22" cy="49" r="0.3" />
                <Circle cx="26" cy="48" r="0.3" />
                <Circle cx="30" cy="49" r="0.3" />
                <Circle cx="34" cy="48" r="0.3" />
                <Circle cx="38" cy="49" r="0.3" />
                <Circle cx="42" cy="48" r="0.3" />
                <Circle cx="46" cy="49" r="0.3" />
              </G>
            </Pattern>
          </Defs>
          <Rect x="0" y="0" width="100%" height="100%" fill="url(#grain)" />
        </Svg>
      </View>
    );
  }
);

NoiseOverlay.displayName = "NoiseOverlay";

export default NoiseOverlay;
