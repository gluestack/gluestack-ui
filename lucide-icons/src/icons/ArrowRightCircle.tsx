import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Polyline points="12 16 16 12 12 8" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowRightCircle'
export const ArrowRightCircle = React.memo(Icon)
