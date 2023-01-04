import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="16 18 22 12 16 6" />
      <Polyline points="8 6 2 12 8 18" />
    </StyledSvg>
  )
}
Icon.displayName = 'Code'
export const Code = React.memo(Icon)
