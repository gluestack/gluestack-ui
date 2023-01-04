import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z" />
      <Path d="M21 14 10 2 3 14h18Z" />
      <Path d="M10 2v16" />
    </StyledSvg>
  )
}
Icon.displayName = 'Sailboat'
export const Sailboat = React.memo(Icon)
