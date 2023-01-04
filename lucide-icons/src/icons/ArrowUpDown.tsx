import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="11 17 7 21 3 17" />
      <Line x1="7" y1="21" x2="7" y2="9" />
      <Polyline points="21 7 17 3 13 7" />
      <Line x1="17" y1="15" x2="17" y2="3" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowUpDown'
export const ArrowUpDown = React.memo(Icon)
