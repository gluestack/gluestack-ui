import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M22 2 2 22" />
    </StyledSvg>
  )
}
Icon.displayName = 'CircleSlashed'
export const CircleSlashed = React.memo(Icon)
