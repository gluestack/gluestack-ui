import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <Path d="M12 3v1" />
      <Path d="M12 20v1" />
      <Path d="M3 12h1" />
      <Path d="M20 12h1" />
      <Path d="m18.364 5.636-.707.707" />
      <Path d="m6.343 17.657-.707.707" />
      <Path d="m5.636 5.636.707.707" />
      <Path d="m17.657 17.657.707.707" />
    </StyledSvg>
  )
}
Icon.displayName = 'SunMedium'
export const SunMedium = React.memo(Icon)
