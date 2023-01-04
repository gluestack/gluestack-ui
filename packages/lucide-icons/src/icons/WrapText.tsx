import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Line x1="3" y1="6" x2="21" y2="6" />
      <Path d="M3 12h15a3 3 0 1 1 0 6h-4" />
      <Polyline points="16 16 14 18 16 20" />
      <Line x1="3" y1="18" x2="10" y2="18" />
    </StyledSvg>
  )
}
Icon.displayName = 'WrapText'
export const WrapText = React.memo(Icon)
