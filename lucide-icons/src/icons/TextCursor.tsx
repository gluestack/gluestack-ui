import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
      <Path d="M7 22h1a4 4 0 0 0 4-4v-1" />
      <Path d="M7 2h1a4 4 0 0 1 4 4v1" />
    </StyledSvg>
  )
}
Icon.displayName = 'TextCursor'
export const TextCursor = React.memo(Icon)
