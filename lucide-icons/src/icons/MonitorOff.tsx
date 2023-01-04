import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2" />
      <Path d="M22 15V5a2 2 0 0 0-2-2H9" />
      <Path d="M8 21h8" />
      <Path d="M12 17v4" />
      <Path d="m2 2 20 20" />
    </StyledSvg>
  )
}
Icon.displayName = 'MonitorOff'
export const MonitorOff = React.memo(Icon)
