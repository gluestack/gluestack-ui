import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="8" cy="8" r="6" />
      <Path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
      <Path d="M7 6h1v4" />
      <Path d="m16.71 13.88.7.71-2.82 2.82" />
    </StyledSvg>
  )
}
Icon.displayName = 'Coins'
export const Coins = React.memo(Icon)
