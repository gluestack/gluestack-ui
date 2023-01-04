import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 2h4" />
      <Path d="M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7" />
      <Path d="M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2" />
      <Path d="m2 2 20 20" />
      <Path d="M12 12v-2" />
    </StyledSvg>
  )
}
Icon.displayName = 'TimerOff'
export const TimerOff = React.memo(Icon)
