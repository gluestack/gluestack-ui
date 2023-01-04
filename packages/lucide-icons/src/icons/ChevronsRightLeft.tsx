import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m20 17-5-5 5-5" />
      <Path d="m4 17 5-5-5-5" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronsRightLeft'
export const ChevronsRightLeft = React.memo(Icon)
