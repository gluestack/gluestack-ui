import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M6 12h12" />
      <Path d="M6 20V4" />
      <Path d="M18 20V4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Heading'
export const Heading = React.memo(Icon)
