import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M18 7c0-5.333-8-5.333-8 0" />
      <Path d="M10 7v14" />
      <Path d="M6 21h12" />
      <Path d="M6 13h10" />
    </StyledSvg>
  )
}
Icon.displayName = 'PoundSterling'
export const PoundSterling = React.memo(Icon)
