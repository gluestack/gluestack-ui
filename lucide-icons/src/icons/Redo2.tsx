import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="m15 14 5-5-5-5" />
      <Path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13" />
    </StyledSvg>
  )
}
Icon.displayName = 'Redo2'
export const Redo2 = React.memo(Icon)
