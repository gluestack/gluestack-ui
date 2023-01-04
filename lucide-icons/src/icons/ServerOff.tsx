import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5" />
      <Path d="M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z" />
      <Path d="M22 17v-1a2 2 0 0 0-2-2h-1" />
      <Path d="M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z" />
      <Path d="M6 18h.01" />
      <Path d="m2 2 20 20" />
    </StyledSvg>
  )
}
Icon.displayName = 'ServerOff'
export const ServerOff = React.memo(Icon)
