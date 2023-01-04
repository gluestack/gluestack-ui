import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 4H9a3 3 0 0 0-2.83 4" />
      <Path d="M14 12a4 4 0 0 1 0 8H6" />
      <Line x1="4" y1="12" x2="20" y2="12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Strikethrough'
export const Strikethrough = React.memo(Icon)
