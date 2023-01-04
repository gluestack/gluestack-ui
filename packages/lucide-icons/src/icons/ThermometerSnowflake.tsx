import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 12h10" />
      <Path d="M9 4v16" />
      <Path d="m3 9 3 3-3 3" />
      <Path d="M12 6 9 9 6 6" />
      <Path d="m6 18 3-3 1.5 1.5" />
      <Path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'ThermometerSnowflake'
export const ThermometerSnowflake = React.memo(Icon)
