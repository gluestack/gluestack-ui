import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 20h.01" />
      <Path d="M7 20v-4" />
      <Path d="M12 20v-8" />
    </StyledSvg>
  )
}
Icon.displayName = 'SignalMedium'
export const SignalMedium = React.memo(Icon)
