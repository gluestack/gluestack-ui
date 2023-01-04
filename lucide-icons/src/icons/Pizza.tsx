import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M15 11h.01" />
      <Path d="M11 15h.01" />
      <Path d="M16 16h.01" />
      <Path d="m2 16 20 6-6-20c-3.36.9-6.42 2.67-8.88 5.12A19.876 19.876 0 0 0 2 16Z" />
      <Path d="M17 6c-6.29 1.47-9.43 5.13-11 11" />
    </StyledSvg>
  )
}
Icon.displayName = 'Pizza'
export const Pizza = React.memo(Icon)
