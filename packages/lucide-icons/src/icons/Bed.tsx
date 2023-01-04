import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M2 4v16" />
      <Path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <Path d="M2 17h20" />
      <Path d="M6 8v9" />
    </StyledSvg>
  )
}
Icon.displayName = 'Bed'
export const Bed = React.memo(Icon)
