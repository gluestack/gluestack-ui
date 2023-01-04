import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="11" cy="11" r="8" />
      <Line x1="21" y1="21" x2="16.65" y2="16.65" />
      <Line x1="11" y1="8" x2="11" y2="14" />
      <Line x1="8" y1="11" x2="14" y2="11" />
    </StyledSvg>
  )
}
Icon.displayName = 'ZoomIn'
export const ZoomIn = React.memo(Icon)
