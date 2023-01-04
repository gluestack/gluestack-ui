import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 5h10" />
      <Path d="M11 9h7" />
      <Path d="M11 13h4" />
      <Path d="m3 17 3 3 3-3" />
      <Path d="M6 18V4" />
    </StyledSvg>
  )
}
Icon.displayName = 'SortDesc'
export const SortDesc = React.memo(Icon)
