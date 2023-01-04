import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 2v6h-6" />
      <Path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <Path d="M3 22v-6h6" />
      <Path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
    </StyledSvg>
  )
}
Icon.displayName = 'RefreshCw'
export const RefreshCw = React.memo(Icon)
