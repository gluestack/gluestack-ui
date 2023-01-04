import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M9 9.35a4 4 0 1 1 0 5.3" />
    </StyledSvg>
  )
}
Icon.displayName = 'Copyleft'
export const Copyleft = React.memo(Icon)
