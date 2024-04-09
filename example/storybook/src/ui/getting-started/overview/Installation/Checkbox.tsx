//@ts-nocheck
import { LayoutContext } from '@gluestack/design-system';
import React, { useContext } from 'react';

function Checkbox() {
  const { colorMode } = useContext(LayoutContext);
  return colorMode === 'light' ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10404_112294)">
        <path d="M0 24H24V0H0V2.455H21.546V21.545H2.454V0H0V24Z" fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_10404_112294">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_10267_68881)">
        <path d="M0 24H24V0H0V2.455H21.546V21.545H2.454V0H0V24Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_10267_68881">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Checkbox;
