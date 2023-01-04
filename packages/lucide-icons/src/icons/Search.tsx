import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Line } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <_Circle cx="11" cy="11" r="8" />
      <Line x1="21" y1="21" x2="16.65" y2="16.65" />
    </StyledSvg>
  )
}
Icon.displayName = 'Search'
export const Search = React.memo(Icon)
