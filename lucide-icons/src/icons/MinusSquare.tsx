import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="8" y1="12" x2="16" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'MinusSquare'
export const MinusSquare = React.memo(Icon)
