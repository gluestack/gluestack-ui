import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="6 9 12 15 18 9" />
    </StyledSvg>
  )
}
Icon.displayName = 'ChevronDown'
export const ChevronDown = React.memo(Icon)
