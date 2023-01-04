import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m8 14-6 6h9v-3" />
      <Path d="M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Slice'
export const Slice = React.memo(Icon)
