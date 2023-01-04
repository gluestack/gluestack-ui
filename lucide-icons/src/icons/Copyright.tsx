import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="12" cy="12" r="10" />
      <Path d="M15 9.354a4 4 0 1 0 0 5.292" />
    </StyledSvg>
  )
}
Icon.displayName = 'Copyright'
export const Copyright = React.memo(Icon)
