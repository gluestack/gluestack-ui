import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="19 20 9 12 19 4 19 20" />
      <Line x1="5" y1="19" x2="5" y2="5" />
    </StyledSvg>
  )
}
Icon.displayName = 'SkipBack'
export const SkipBack = React.memo(Icon)
