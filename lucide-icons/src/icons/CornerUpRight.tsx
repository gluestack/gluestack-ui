import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="15 14 20 9 15 4" />
      <Path d="M4 20v-7a4 4 0 0 1 4-4h12" />
    </StyledSvg>
  )
}
Icon.displayName = 'CornerUpRight'
export const CornerUpRight = React.memo(Icon)
