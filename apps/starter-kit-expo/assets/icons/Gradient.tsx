import React from 'react';
import { Svg, G, Ellipse, Defs, RadialGradient, Stop } from 'react-native-svg';

const SvgComponent = () => {
  return (
    <Svg width="965" height="1078" viewBox="0 0 965 1078" fill="none">
      <G opacity="1">
        <G>
          <Ellipse
            cx="222.599"
            cy="277.706"
            rx="641.842"
            ry="699.982"
            fill="url(#paint0_radial_2913_5676)"
          />
        </G>
        <G>
          <Ellipse
            cx="-82.2838"
            cy="30.7211"
            rx="463.716"
            ry="505.721"
            fill="url(#paint1_radial_2913_5676)"
          />
        </G>
      </G>
      <Defs>
        <RadialGradient
          id="paint0_radial_2913_5676"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(222.599 277.706) rotate(90) scale(780.255 715.448)"
        >
          <Stop offset="0%" stopColor="#FFFFFF" />
          <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
        </RadialGradient>
        <RadialGradient
          id="paint1_radial_2913_5676"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(-82.2838 30.7211) rotate(90) scale(563.717 516.895)"
        >
          <Stop offset="0%" stopColor="#121212" />
          <Stop offset="100%" stopColor="#121212" stopOpacity="0" />
        </RadialGradient>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
