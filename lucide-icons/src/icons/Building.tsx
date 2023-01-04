import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <Path d="M9 22v-4h6v4" />
      <Path d="M8 6h.01" />
      <Path d="M16 6h.01" />
      <Path d="M12 6h.01" />
      <Path d="M12 10h.01" />
      <Path d="M12 14h.01" />
      <Path d="M16 10h.01" />
      <Path d="M16 14h.01" />
      <Path d="M8 10h.01" />
      <Path d="M8 14h.01" />
    </StyledSvg>
  )
}
Icon.displayName = 'Building'
export const Building = React.memo(Icon)
