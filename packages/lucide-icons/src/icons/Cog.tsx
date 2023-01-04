import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <Path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <Path d="M12 2v2" />
      <Path d="M12 22v-2" />
      <Path d="m17 20.66-1-1.73" />
      <Path d="M11 10.27 7 3.34" />
      <Path d="m20.66 17-1.73-1" />
      <Path d="m3.34 7 1.73 1" />
      <Path d="M14 12h8" />
      <Path d="M2 12h2" />
      <Path d="m20.66 7-1.73 1" />
      <Path d="m3.34 17 1.73-1" />
      <Path d="m17 3.34-1 1.73" />
      <Path d="m11 13.73-4 6.93" />
    </StyledSvg>
  );
};
Icon.displayName = 'Cog';
export const Cog = React.memo(Icon);
