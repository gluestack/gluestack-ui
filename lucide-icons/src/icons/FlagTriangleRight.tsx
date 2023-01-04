import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M7 22V2l10 5-10 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'FlagTriangleRight'
export const FlagTriangleRight = React.memo(Icon)
