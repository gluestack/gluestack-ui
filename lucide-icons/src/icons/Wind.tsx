import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <Path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <Path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Wind'
export const Wind = React.memo(Icon)
