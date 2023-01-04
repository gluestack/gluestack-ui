import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="13 5 19 5 19 11" />
      <Polyline points="11 19 5 19 5 13" />
      <Line x1="19" y1="5" x2="5" y2="19" />
    </StyledSvg>
  )
}
Icon.displayName = 'MoveDiagonal'
export const MoveDiagonal = React.memo(Icon)
