import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <Path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </StyledSvg>
  )
}
Icon.displayName = 'Volume1'
export const Volume1 = React.memo(Icon)
