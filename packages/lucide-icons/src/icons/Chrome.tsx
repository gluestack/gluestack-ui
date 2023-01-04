import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <_Circle cx="12" cy="12" r="4" />
      <Line x1="21.17" y1="8" x2="12" y2="8" />
      <Line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <Line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </StyledSvg>
  )
}
Icon.displayName = 'Chrome'
export const Chrome = React.memo(Icon)
