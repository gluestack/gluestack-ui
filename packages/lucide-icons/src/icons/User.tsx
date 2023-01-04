import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <_Circle cx="12" cy="7" r="4" />
    </StyledSvg>
  )
}
Icon.displayName = 'User'
export const User = React.memo(Icon)
