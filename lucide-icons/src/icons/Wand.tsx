import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15 4V2" />
      <Path d="M15 16v-2" />
      <Path d="M8 9h2" />
      <Path d="M20 9h2" />
      <Path d="M17.8 11.8 19 13" />
      <Path d="M15 9h0" />
      <Path d="M17.8 6.2 19 5" />
      <Path d="m3 21 9-9" />
      <Path d="M12.2 6.2 11 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Wand'
export const Wand = React.memo(Icon)
