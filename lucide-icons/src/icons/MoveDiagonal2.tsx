import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="5 11 5 5 11 5" />
      <Polyline points="19 13 19 19 13 19" />
      <Line x1="5" y1="5" x2="19" y2="19" />
    </StyledSvg>
  )
}
Icon.displayName = 'MoveDiagonal2'
export const MoveDiagonal2 = React.memo(Icon)
