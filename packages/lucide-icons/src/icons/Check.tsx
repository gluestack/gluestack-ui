import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Polyline } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Polyline points="20 6 9 17 4 12" />
    </StyledSvg>
  )
}
Icon.displayName = 'Check'
export const Check = React.memo(Icon)
