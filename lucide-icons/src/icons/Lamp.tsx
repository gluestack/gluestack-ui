import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M8 2h8l4 10H4L8 2Z" />
      <Path d="M12 12v6" />
      <Path d="M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'Lamp'
export const Lamp = React.memo(Icon)
