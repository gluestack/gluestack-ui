import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="8" cy="21" r="1" />
      <_Circle cx="19" cy="21" r="1" />
      <Path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </StyledSvg>
  )
}
Icon.displayName = 'ShoppingCart'
export const ShoppingCart = React.memo(Icon)
