import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 7 10 10-5 5V2l5 5L7 17" />
      <Line x1="18" y1="12" y2="12" x2="21" />
      <Line x1="3" y1="12" y2="12" x2="6" />
    </StyledSvg>
  )
}
Icon.displayName = 'BluetoothConnected'
export const BluetoothConnected = React.memo(Icon)
