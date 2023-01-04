import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
      <Path d="M5 3 2 6" />
      <Path d="m22 6-3-3" />
      <Path d="m6 19-2 2" />
      <Path d="m18 19 2 2" />
      <Path d="m9 13 2 2 4-4" />
    </StyledSvg>
  )
}
Icon.displayName = 'AlarmCheck'
export const AlarmCheck = React.memo(Icon)
