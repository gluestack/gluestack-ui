import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      <Line x1="2" y1="20" x2="22" y2="20" />
    </StyledSvg>
  )
}
Icon.displayName = 'Laptop2'
export const Laptop2 = React.memo(Icon)
