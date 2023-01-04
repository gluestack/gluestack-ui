import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 12H2v4h16" />
      <Path d="M22 12v4" />
      <Path d="M7 12v4" />
      <Path d="M18 8c0-2.5-2-2.5-2-5" />
      <Path d="M22 8c0-2.5-2-2.5-2-5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Cigarette'
export const Cigarette = React.memo(Icon)
