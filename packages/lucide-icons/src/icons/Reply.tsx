import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="9 17 4 12 9 7" />
      <Path d="M20 18v-2a4 4 0 0 0-4-4H4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Reply'
export const Reply = React.memo(Icon)
