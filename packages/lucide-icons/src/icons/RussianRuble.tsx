import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14 11c5.333 0 5.333-8 0-8" />
      <Path d="M6 11h8" />
      <Path d="M6 15h8" />
      <Path d="M9 21V3" />
      <Path d="M9 3h5" />
    </StyledSvg>
  )
}
Icon.displayName = 'RussianRuble'
export const RussianRuble = React.memo(Icon)
