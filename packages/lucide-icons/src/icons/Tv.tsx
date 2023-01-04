import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <Polyline points="17 2 12 7 7 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Tv'
export const Tv = React.memo(Icon)
