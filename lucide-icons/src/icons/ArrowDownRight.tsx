import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="7" y1="7" x2="17" y2="17" />
      <Polyline points="17 7 17 17 7 17" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowDownRight'
export const ArrowDownRight = React.memo(Icon)
