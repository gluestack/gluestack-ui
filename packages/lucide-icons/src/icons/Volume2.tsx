import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polygon } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <Path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      <Path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </StyledSvg>
  )
}
Icon.displayName = 'Volume2'
export const Volume2 = React.memo(Icon)
