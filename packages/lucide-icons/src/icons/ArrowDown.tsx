import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="12" y1="5" x2="12" y2="19" />
      <Polyline points="19 12 12 19 5 12" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowDown'
export const ArrowDown = React.memo(Icon)
