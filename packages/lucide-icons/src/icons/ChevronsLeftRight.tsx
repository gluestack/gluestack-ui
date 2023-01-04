import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m9 7-5 5 5 5" />
      <Path d="m15 7 5 5-5 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronsLeftRight'
export const ChevronsLeftRight = React.memo(Icon)
