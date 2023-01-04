import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="12" y1="3" x2="12" y2="21" />
      <Polyline points="8 8 4 12 8 16" />
      <Polyline points="16 16 20 12 16 8" />
    </StyledSvg>
  )
}
Icon.displayName = 'SeparatorVertical'
export const SeparatorVertical = React.memo(Icon)
