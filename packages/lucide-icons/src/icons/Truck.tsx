import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 17h4V5H2v12h3" />
      <Path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5" />
      <Path d="M14 17h1" />
      <_Circle cx="7.5" cy="17.5" r="2.5" />
      <_Circle cx="17.5" cy="17.5" r="2.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Truck'
export const Truck = React.memo(Icon)
