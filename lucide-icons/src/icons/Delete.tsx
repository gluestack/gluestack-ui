import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Line, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z" />
      <Line x1="18" y1="9" x2="12" y2="15" />
      <Line x1="12" y1="9" x2="18" y2="15" />
    </StyledSvg>
  )
}
Icon.displayName = 'Delete'
export const Delete = React.memo(Icon)
