import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <Rect x="2" y="9" width="4" height="12" />
      <_Circle cx="4" cy="4" r="2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Linkedin'
export const Linkedin = React.memo(Icon)
