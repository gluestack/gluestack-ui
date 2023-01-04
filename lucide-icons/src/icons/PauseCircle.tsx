import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Line x1="10" y1="15" x2="10" y2="9" />
      <Line x1="14" y1="15" x2="14" y2="9" />
    </StyledSvg>
  )
}
Icon.displayName = 'PauseCircle'
export const PauseCircle = React.memo(Icon)
