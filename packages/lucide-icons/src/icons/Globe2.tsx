import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15 21v-4a2 2 0 0 1 2-2h4" />
      <Path d="M7 4v2a3 3 0 0 0 3 2h0a2 2 0 0 1 2 2 2 2 0 0 0 4 0 2 2 0 0 1 2-2h3" />
      <Path d="M3 11h2a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2 2 2 0 0 1 2 2v4" />
      <_Circle cx="12" cy="12" r="10" />
    </StyledSvg>
  )
}
Icon.displayName = 'Globe2'
export const Globe2 = React.memo(Icon)
