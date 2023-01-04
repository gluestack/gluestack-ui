import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3" />
      <Path d="M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3" />
      <Path d="M4 12H2" />
      <Path d="M10 12H8" />
      <Path d="M16 12h-2" />
      <Path d="M22 12h-2" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlipVertical'
export const FlipVertical = React.memo(Icon)
