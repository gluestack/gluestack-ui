import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <_Circle cx="19" cy="16" r="2" />
      <Path d="M20 10c-2 2-3 3.5-3 6" />
    </StyledSvg>
  )
}
Icon.displayName = 'Heading6'
export const Heading6 = React.memo(Icon)
