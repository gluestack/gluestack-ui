import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'SignalZero'
export const SignalZero = React.memo(Icon)
