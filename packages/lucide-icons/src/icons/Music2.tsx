import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="8" cy="18" r="4" />
      <Path d="M12 18V2l7 4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Music2'
export const Music2 = React.memo(Icon)
