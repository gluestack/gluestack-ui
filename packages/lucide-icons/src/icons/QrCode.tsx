import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="3" y="3" width="5" height="5" rx="1" />
      <Rect x="16" y="3" width="5" height="5" rx="1" />
      <Rect x="3" y="16" width="5" height="5" rx="1" />
      <Path d="M21 16h-3a2 2 0 0 0-2 2v3" />
      <Path d="M21 21v.01" />
      <Path d="M12 7v3a2 2 0 0 1-2 2H7" />
      <Path d="M3 12h.01" />
      <Path d="M12 3h.01" />
      <Path d="M12 16v.01" />
      <Path d="M16 12h1" />
      <Path d="M21 12v.01" />
      <Path d="M12 21v-1" />
    </StyledSvg>
  )
}
Icon.displayName = 'QrCode'
export const QrCode = React.memo(Icon)
