import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 2v5" />
      <Path d="M6 7h12l4 9H2l4-9Z" />
      <Path d="M9.17 16a3 3 0 1 0 5.66 0" />
    </StyledSvg>
  )
}
Icon.displayName = 'LampCeiling'
export const LampCeiling = React.memo(Icon)
