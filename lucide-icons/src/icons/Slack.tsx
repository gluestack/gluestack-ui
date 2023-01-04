import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path, Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect x="13" y="2" width="3" height="8" rx="1.5" />
      <Path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" />
      <Rect x="8" y="14" width="3" height="8" rx="1.5" />
      <Path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" />
      <Rect x="14" y="13" width="8" height="3" rx="1.5" />
      <Path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" />
      <Rect x="2" y="8" width="8" height="3" rx="1.5" />
      <Path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'Slack'
export const Slack = React.memo(Icon)
