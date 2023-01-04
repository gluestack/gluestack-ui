import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 7 10 10-5 5V2l5 5L7 17" />
    </StyledSvg>
  )
}
Icon.displayName = 'Bluetooth'
export const Bluetooth = React.memo(Icon)
