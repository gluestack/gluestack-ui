import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <Path d="M7.5 8 10 9" />
      <Path d="m14 9 2.5-1" />
      <Path d="M9 10h0" />
      <Path d="M15 10h0" />
    </StyledSvg>
  )
}
Icon.displayName = 'Angry'
export const Angry = React.memo(Icon)
