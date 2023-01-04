import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20h.01" />
      <Path d="M7 20v-4" />
    </StyledSvg>
  )
}
Icon.displayName = 'SignalLow'
export const SignalLow = React.memo(Icon)
