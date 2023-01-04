import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
      <Path d="M15 3v6h6" />
      <Path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
      <Path d="M8 13h0" />
      <Path d="M16 13h0" />
    </StyledSvg>
  )
}
Icon.displayName = 'Sticker'
export const Sticker = React.memo(Icon)
