import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0" />
      <Path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14" />
      <Path d="M10 20h4" />
      <_Circle cx="16" cy="20" r="2" />
      <_Circle cx="8" cy="20" r="2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Luggage'
export const Luggage = React.memo(Icon)
