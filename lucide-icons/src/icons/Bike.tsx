import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="5.5" cy="17.5" r="3.5" />
      <_Circle cx="18.5" cy="17.5" r="3.5" />
      <Path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Bike'
export const Bike = React.memo(Icon)
