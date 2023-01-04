import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </StyledSvg>
  )
}
Icon.displayName = 'Loader2'
export const Loader2 = React.memo(Icon)
