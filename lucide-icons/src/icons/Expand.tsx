import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <Path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <Path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <Path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </StyledSvg>
  )
}
Icon.displayName = 'Expand'
export const Expand = React.memo(Icon)
