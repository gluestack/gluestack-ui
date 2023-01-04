import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 4v6a6 6 0 0 0 12 0V4" />
      <Line x1="4" y1="20" x2="20" y2="20" />
    </StyledSvg>
  )
}
Icon.displayName = 'Underline'
export const Underline = React.memo(Icon)
