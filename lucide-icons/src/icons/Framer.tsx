import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7" />
    </StyledSvg>
  )
}
Icon.displayName = 'Framer'
export const Framer = React.memo(Icon)
