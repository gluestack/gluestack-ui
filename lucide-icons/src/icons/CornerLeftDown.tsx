import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="14 15 9 20 4 15" />
      <Path d="M20 4h-7a4 4 0 0 0-4 4v12" />
    </StyledSvg>
  )
}
Icon.displayName = 'CornerLeftDown'
export const CornerLeftDown = React.memo(Icon)
