import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="6 3 18 3 22 9 12 22 2 9" />
      <Path d="m12 22 4-13-3-6" />
      <Path d="M12 22 8 9l3-6" />
      <Path d="M2 9h20" />
    </StyledSvg>
  )
}
Icon.displayName = 'Gem'
export const Gem = React.memo(Icon)
