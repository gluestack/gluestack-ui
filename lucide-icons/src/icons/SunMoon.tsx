import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <Path d="M12 8a2.828 2.828 0 1 0 4 4" />
      <Path d="M12 2v2" />
      <Path d="M12 20v2" />
      <Path d="m4.93 4.93 1.41 1.41" />
      <Path d="m17.66 17.66 1.41 1.41" />
      <Path d="M2 12h2" />
      <Path d="M20 12h2" />
      <Path d="m6.34 17.66-1.41 1.41" />
      <Path d="m19.07 4.93-1.41 1.41" />
    </StyledSvg>
  )
}
Icon.displayName = 'SunMoon'
export const SunMoon = React.memo(Icon)
