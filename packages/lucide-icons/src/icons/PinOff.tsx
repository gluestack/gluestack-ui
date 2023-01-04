import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="2" y1="2" x2="22" y2="22" />
      <Line x1="12" y1="17" x2="12" y2="22" />
      <Path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12" />
      <Path d="M15 9.34V6h1a2 2 0 0 0 0-4H7.89" />
    </StyledSvg>
  )
}
Icon.displayName = 'PinOff'
export const PinOff = React.memo(Icon)
