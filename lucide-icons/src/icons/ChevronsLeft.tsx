import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="11 17 6 12 11 7" />
      <Polyline points="18 17 13 12 18 7" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronsLeft'
export const ChevronsLeft = React.memo(Icon)
