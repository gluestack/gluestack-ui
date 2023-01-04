import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M9.26 9.26 3 11v3l14.14 3.14" />
      <Path d="M21 15.34V6l-7.31 2.03" />
      <Path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      <Line x1="2" x2="22" y1="2" y2="22" />
    </StyledSvg>
  )
}
Icon.displayName = 'MegaphoneOff'
export const MegaphoneOff = React.memo(Icon)
