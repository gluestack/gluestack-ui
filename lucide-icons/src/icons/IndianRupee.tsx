import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 3h12" />
      <Path d="M6 8h12" />
      <Path d="m6 13 8.5 8" />
      <Path d="M6 13h3" />
      <Path d="M9 13c6.667 0 6.667-10 0-10" />
    </StyledSvg>
  )
}
Icon.displayName = 'IndianRupee'
export const IndianRupee = React.memo(Icon)
