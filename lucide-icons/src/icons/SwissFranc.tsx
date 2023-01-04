import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M10 21V3h8" />
      <Path d="M6 16h9" />
      <Path d="M10 9.5h7" />
    </StyledSvg>
  )
}
Icon.displayName = 'SwissFranc'
export const SwissFranc = React.memo(Icon)
