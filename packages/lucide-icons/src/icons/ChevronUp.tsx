import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="18 15 12 9 6 15" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronUp'
export const ChevronUp = React.memo(Icon)
