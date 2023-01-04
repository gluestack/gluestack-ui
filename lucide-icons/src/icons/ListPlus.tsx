import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 12H3" />
      <Path d="M16 6H3" />
      <Path d="M16 18H3" />
      <Path d="M18 9v6" />
      <Path d="M21 12h-6" />
    </StyledSvg>
  )
}
Icon.displayName = 'ListPlus'
export const ListPlus = React.memo(Icon)
