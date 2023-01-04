import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="19" y1="5" x2="5" y2="19" />
      <_Circle cx="6.5" cy="6.5" r="2.5" />
      <_Circle cx="17.5" cy="17.5" r="2.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Percent'
export const Percent = React.memo(Icon)
