import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="6" cy="6" r="3" />
      <_Circle cx="6" cy="18" r="3" />
      <Line x1="20" y1="4" x2="8.12" y2="15.88" />
      <Line x1="14.47" y1="14.48" x2="20" y2="20" />
      <Line x1="8.12" y1="8.12" x2="12" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Scissors'
export const Scissors = React.memo(Icon)
