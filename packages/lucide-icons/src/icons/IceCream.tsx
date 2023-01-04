import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
      <Path d="M17 7A5 5 0 0 0 7 7" />
      <Path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4" />
    </StyledSvg>
  )
}
Icon.displayName = 'IceCream'
export const IceCream = React.memo(Icon)
