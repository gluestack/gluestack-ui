import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="14 9 9 4 4 9" />
      <Path d="M20 20h-7a4 4 0 0 1-4-4V4" />
    </StyledSvg>
  )
}
Icon.displayName = 'CornerLeftUp'
export const CornerLeftUp = React.memo(Icon)
