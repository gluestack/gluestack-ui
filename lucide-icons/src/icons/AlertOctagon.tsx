import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
      <Line x1="12" y1="8" x2="12" y2="12" />
      <Line x1="12" y1="16" x2="12.01" y2="16" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlertOctagon'
export const AlertOctagon = React.memo(Icon)
