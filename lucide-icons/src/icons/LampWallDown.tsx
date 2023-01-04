import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M11 13h6l3 7H8l3-7Z" />
      <Path d="M14 13V8a2 2 0 0 0-2-2H8" />
      <Path d="M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z" />
    </StyledSvg>
  )
}
Icon.displayName = 'LampWallDown'
export const LampWallDown = React.memo(Icon)
