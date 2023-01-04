import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
      <Path d="M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1" />
      <Path d="m11 7-3 5h4l-3 5" />
      <Line x1="22" x2="22" y1="11" y2="13" />
    </StyledSvg>
  )
}
Icon.displayName = 'BatteryCharging'
export const BatteryCharging = React.memo(Icon)
