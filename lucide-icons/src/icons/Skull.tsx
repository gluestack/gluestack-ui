import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="9" cy="12" r="1" />
      <_Circle cx="15" cy="12" r="1" />
      <Path d="M8 20v2h8v-2" />
      <Path d="m12.5 17-.5-1-.5 1h1z" />
      <Path d="M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20" />
    </StyledSvg>
  )
}
Icon.displayName = 'Skull'
export const Skull = React.memo(Icon)
