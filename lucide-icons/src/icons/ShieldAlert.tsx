import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <Path d="M12 8v4" />
      <Path d="M12 16h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'ShieldAlert'
export const ShieldAlert = React.memo(Icon)
