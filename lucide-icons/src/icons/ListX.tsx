import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 12H3" />
      <Path d="M16 6H3" />
      <Path d="M16 18H3" />
      <Path d="m19 10-4 4" />
      <Path d="m15 10 4 4" />
    </StyledSvg>
  )
}
Icon.displayName = 'ListX'
export const ListX = React.memo(Icon)
