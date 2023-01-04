import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 18a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2H2v-2Z" />
      <Path d="M20 16a8 8 0 1 0-16 0" />
      <Path d="M12 4v4" />
      <Path d="M10 4h4" />
    </StyledSvg>
  )
}
Icon.displayName = 'ConciergeBell'
export const ConciergeBell = React.memo(Icon)
