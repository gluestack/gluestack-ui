import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="14" width="7" height="7" />
      <Rect x="3" y="3" width="7" height="7" />
      <Line x1="14" y1="4" x2="21" y2="4" />
      <Line x1="14" y1="9" x2="21" y2="9" />
      <Line x1="14" y1="15" x2="21" y2="15" />
      <Line x1="14" y1="20" x2="21" y2="20" />
    </StyledSvg>
  )
}
Icon.displayName = 'LayoutList'
export const LayoutList = React.memo(Icon)
