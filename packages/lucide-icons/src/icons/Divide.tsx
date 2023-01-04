import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="6" r="1" />
      <Line x1="5" y1="12" x2="19" y2="12" />
      <_Circle cx="12" cy="18" r="1" />
    </StyledSvg>
  )
}
Icon.displayName = 'Divide'
export const Divide = React.memo(Icon)
