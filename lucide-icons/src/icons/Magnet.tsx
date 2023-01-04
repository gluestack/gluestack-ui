import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15" />
      <Path d="m5 8 4 4" />
      <Path d="m12 15 4 4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Magnet'
export const Magnet = React.memo(Icon)
