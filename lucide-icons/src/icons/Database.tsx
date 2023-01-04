import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Ellipse, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Ellipse cx="12" cy="5" rx="9" ry="3" />
      <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Database'
export const Database = React.memo(Icon)
