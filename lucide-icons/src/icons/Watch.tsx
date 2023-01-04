import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="6" />
      <Polyline points="12 10 12 12 13 13" />
      <Path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <Path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </StyledSvg>
  )
}
Icon.displayName = 'Watch'
export const Watch = React.memo(Icon)
