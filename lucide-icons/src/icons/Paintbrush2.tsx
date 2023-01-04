import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M14 19.9V16h3a2 2 0 0 0 2-2v-2H5v2c0 1.1.9 2 2 2h3v3.9a2 2 0 1 0 4 0Z" />
      <Path d="M6 12V2h12v10" />
      <Path d="M14 2v4" />
      <Path d="M10 2v2" />
    </StyledSvg>
  )
}
Icon.displayName = 'Paintbrush2'
export const Paintbrush2 = React.memo(Icon)
