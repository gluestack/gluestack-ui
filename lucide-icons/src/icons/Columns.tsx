import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <Line x1="12" y1="3" x2="12" y2="21" />
    </StyledSvg>
  )
}
Icon.displayName = 'Columns'
export const Columns = React.memo(Icon)
