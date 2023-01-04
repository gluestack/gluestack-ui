import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <Path d="M20.83 14.83a4 4 0 0 0 0-5.66" />
      <Path d="M18 12h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'BluetoothSearching'
export const BluetoothSearching = React.memo(Icon)
