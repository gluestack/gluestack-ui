import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 10V2" />
      <Path d="m4.93 10.93 1.41 1.41" />
      <Path d="M2 18h2" />
      <Path d="M20 18h2" />
      <Path d="m19.07 10.93-1.41 1.41" />
      <Path d="M22 22H2" />
      <Path d="m16 6-4 4-4-4" />
      <Path d="M16 18a4 4 0 0 0-8 0" />
    </StyledSvg>
  )
}
Icon.displayName = 'Sunset'
export const Sunset = React.memo(Icon)
