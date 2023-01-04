import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="5" r="3" />
      <Line x1="12" y1="22" x2="12" y2="8" />
      <Path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </StyledSvg>
  )
}
Icon.displayName = 'Anchor'
export const Anchor = React.memo(Icon)
