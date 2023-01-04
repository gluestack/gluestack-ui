import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 2v14a2 2 0 0 0 2 2h14" />
      <Path d="M18 22V8a2 2 0 0 0-2-2H2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Crop'
export const Crop = React.memo(Icon)
