import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M3 2v6h6" />
      <Path d="M3 13a9 9 0 1 0 3-7.7L3 8" />
    </StyledSvg>
  )
}
Icon.displayName = 'RotateCcw'
export const RotateCcw = React.memo(Icon)
