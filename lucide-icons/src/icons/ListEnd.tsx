import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 12H3" />
      <Path d="M16 6H3" />
      <Path d="M10 18H3" />
      <Path d="M21 6v10a2 2 0 0 1-2 2h-4" />
      <Path d="m16 16-2 2 2 2" />
    </StyledSvg>
  )
}
Icon.displayName = 'ListEnd'
export const ListEnd = React.memo(Icon)
