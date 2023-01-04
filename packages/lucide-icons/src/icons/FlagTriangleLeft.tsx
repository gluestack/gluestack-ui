import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17 22V2L7 7l10 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlagTriangleLeft'
export const FlagTriangleLeft = React.memo(Icon)
