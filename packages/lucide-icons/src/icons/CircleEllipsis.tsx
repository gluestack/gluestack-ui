import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M17 12h.01" />
      <Path d="M12 12h.01" />
      <Path d="M7 12h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'CircleEllipsis'
export const CircleEllipsis = React.memo(Icon)
