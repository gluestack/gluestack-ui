import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m17 3-5 5-5-5h10" />
      <Path d="m17 21-5-5-5 5h10" />
      <Path d="M4 12H2" />
      <Path d="M10 12H8" />
      <Path d="M16 12h-2" />
      <Path d="M22 12h-2" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlipVertical2'
export const FlipVertical2 = React.memo(Icon)
