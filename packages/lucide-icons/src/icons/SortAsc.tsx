import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 11h4" />
      <Path d="M11 15h7" />
      <Path d="M11 19h10" />
      <Path d="M9 7 6 4 3 7" />
      <Path d="M6 6v14" />
    </StyledSvg>
  )
}
Icon.displayName = 'SortAsc'
export const SortAsc = React.memo(Icon)
