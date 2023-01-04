import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M16 12H3" />
      <Path d="M16 18H3" />
      <Path d="M10 6H3" />
      <Path d="M21 18V8a2 2 0 0 0-2-2h-5" />
      <Path d="m16 8-2-2 2-2" />
    </StyledSvg>
  )
}
Icon.displayName = 'ListStart'
export const ListStart = React.memo(Icon)
