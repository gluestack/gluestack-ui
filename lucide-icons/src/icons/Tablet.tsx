import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <Line x1="12" y1="18" x2="12.01" y2="18" />
    </StyledSvg>
  )
}
Icon.displayName = 'Tablet'
export const Tablet = React.memo(Icon)
