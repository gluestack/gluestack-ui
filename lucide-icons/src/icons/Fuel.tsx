import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="3" y1="22" x2="15" y2="22" />
      <Line x1="4" y1="9" x2="14" y2="9" />
      <Path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18" />
      <Path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Fuel'
export const Fuel = React.memo(Icon)
