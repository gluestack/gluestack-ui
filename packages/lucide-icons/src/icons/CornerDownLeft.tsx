import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="9 10 4 15 9 20" />
      <Path d="M20 4v7a4 4 0 0 1-4 4H4" />
    </StyledSvg>
  )
}
Icon.displayName = 'CornerDownLeft'
export const CornerDownLeft = React.memo(Icon)
