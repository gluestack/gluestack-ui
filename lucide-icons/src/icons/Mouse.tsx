import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="6" y="3" width="12" height="18" rx="6" />
      <Path d="M12 7v4" />
    </StyledSvg>
  )
}
Icon.displayName = 'Mouse'
export const Mouse = React.memo(Icon)
