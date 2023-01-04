import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 2h4" />
      <Path d="M12 14v-4" />
      <Path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
      <Path d="M9 17H4v5" />
    </StyledSvg>
  )
}
Icon.displayName = 'TimerReset'
export const TimerReset = React.memo(Icon)
