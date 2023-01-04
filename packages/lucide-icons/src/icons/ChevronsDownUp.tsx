import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m7 20 5-5 5 5" />
      <Path d="m7 4 5 5 5-5" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronsDownUp'
export const ChevronsDownUp = React.memo(Icon)
