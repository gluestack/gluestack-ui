import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Rect } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Rect
        x="12"
        y="1"
        width="15.56"
        height="15.56"
        rx="2.41"
        transform="rotate(45 12 1)"
      />
    </StyledSvg>
  )
}
Icon.displayName = 'Diamond'
export const Diamond = React.memo(Icon)
