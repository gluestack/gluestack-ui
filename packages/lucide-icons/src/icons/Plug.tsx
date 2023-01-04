import React from 'react';
import { StyledSvg } from '../StyledSvg';
import { Path } from 'react-native-svg';
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 22v-5" />
      <Path d="M9 7V2" />
      <Path d="M15 7V2" />
      <Path d="M6 13V8h12v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4Z" />
    </StyledSvg>
  );
};
Icon.displayName = 'Plug';
export const Plug = React.memo(Icon);
