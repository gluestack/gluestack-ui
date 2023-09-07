//@ts-nocheck
import { LayoutContext } from '@gluestack/design-system';
import React, { useContext } from 'react';

function Tilde() {
  const { colorMode } = useContext(LayoutContext);
  return colorMode === 'light' ? (
    <svg
      width={48}
      height={25}
      viewBox="0 0 48 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39 0H0L8.4 12.0001L0 24.6002H39L48 12.0001L39 0Z"
        fill="#268AD2"
      />
      <path
        d="M18.1641 13.7501C18.1641 13.7501 18.1641 10.2501 21.664 10.2501C23.9974 10.2501 24.289 12.2918 26.039 12.2918C28.3723 12.2918 28.3723 10.2501 28.3723 10.2501H29.8306C29.8306 10.2501 29.8306 13.7501 26.3307 13.7501C23.9974 13.7501 23.1224 11.7085 21.9557 11.7085C19.6224 11.7085 19.6224 13.7501 19.6224 13.7501H18.1641Z"
        fill="white"
      />
    </svg>
  ) : (
    <svg
      width={48}
      height={25}
      viewBox="0 0 48 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39 0H0L8.4 12.0001L0 24.6002H39L48 12.0001L39 0Z"
        fill="#268AD2"
      />
      <path
        d="M18.1641 13.7501C18.1641 13.7501 18.1641 10.2501 21.664 10.2501C23.9974 10.2501 24.289 12.2918 26.039 12.2918C28.3723 12.2918 28.3723 10.2501 28.3723 10.2501H29.8306C29.8306 10.2501 29.8306 13.7501 26.3307 13.7501C23.9974 13.7501 23.1224 11.7085 21.9557 11.7085C19.6224 11.7085 19.6224 13.7501 19.6224 13.7501H18.1641Z"
        fill="black"
      />
    </svg>
  );
}

export default Tilde;
