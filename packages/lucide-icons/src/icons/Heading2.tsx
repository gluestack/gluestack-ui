import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M4 12h8" />
      <Path d="M4 18V6" />
      <Path d="M12 18V6" />
      <Path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
    </StyledSvg>
  )
}
Icon.displayName = 'Heading2'
export const Heading2 = React.memo(Icon)
