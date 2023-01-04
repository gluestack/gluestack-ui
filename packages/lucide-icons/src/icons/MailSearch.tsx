import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Circle as _Circle, Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5" />
      <Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      <Path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z" />
      <_Circle cx="18" cy="18" r="3" />
      <Path d="m22 22-1.5-1.5" />
    </StyledSvg>
  )
}
Icon.displayName = 'MailSearch'
export const MailSearch = React.memo(Icon)
