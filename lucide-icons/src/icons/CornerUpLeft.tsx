import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="9 14 4 9 9 4" />
      <Path d="M20 20v-7a4 4 0 0 0-4-4H4" />
    </StyledSvg>
  )
}
Icon.displayName = 'CornerUpLeft'
export const CornerUpLeft = React.memo(Icon)
