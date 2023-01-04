import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="9 18 15 12 9 6" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronRight'
export const ChevronRight = React.memo(Icon)
