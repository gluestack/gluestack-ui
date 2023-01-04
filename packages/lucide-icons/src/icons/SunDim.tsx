import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
      <Path d="M12 4h.01" />
      <Path d="M20 12h.01" />
      <Path d="M12 20h.01" />
      <Path d="M4 12h.01" />
      <Path d="M17.657 6.343h.01" />
      <Path d="M17.657 17.657h.01" />
      <Path d="M6.343 17.657h.01" />
      <Path d="M6.343 6.343h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'SunDim'
export const SunDim = React.memo(Icon)
