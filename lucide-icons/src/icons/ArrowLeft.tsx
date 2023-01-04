import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="19" y1="12" x2="5" y2="12" />
      <Polyline points="12 19 5 12 12 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'ArrowLeft'
export const ArrowLeft = React.memo(Icon)
