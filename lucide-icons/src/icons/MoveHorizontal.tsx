import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="18 8 22 12 18 16" />
      <Polyline points="6 8 2 12 6 16" />
      <Line x1="2" y1="12" x2="22" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'MoveHorizontal'
export const MoveHorizontal = React.memo(Icon)
