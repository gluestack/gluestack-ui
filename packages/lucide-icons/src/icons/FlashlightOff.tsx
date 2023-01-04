import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4" />
      <Path d="M7 2h11v4c0 2-2 2-2 4v1" />
      <Line x1="11" y1="6" x2="18" y2="6" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlashlightOff'
export const FlashlightOff = React.memo(Icon)
