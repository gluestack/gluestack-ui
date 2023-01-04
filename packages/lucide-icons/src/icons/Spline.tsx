import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 6V4c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z" />
      <Path d="M7 20v-2c0-.6-.4-1-1-1H4a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h2c.6 0 1-.4 1-1Z" />
      <Path d="M5 17A12 12 0 0 1 17 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Spline'
export const Spline = React.memo(Icon)
