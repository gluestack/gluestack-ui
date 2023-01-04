import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="17 11 12 6 7 11" />
      <Polyline points="17 18 12 13 7 18" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronsUp'
export const ChevronsUp = React.memo(Icon)
