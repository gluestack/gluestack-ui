import { LayoutContext } from '@gluestack/design-system';
import React, { useContext } from 'react';

function Copied() {
  const { colorMode } = useContext(LayoutContext);
  return colorMode === 'light' ? (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4.00001C6 2.89544 6.89543 2 8 2H14C15.1046 2 16 2.89544 16 4V14C16 15.1046 15.1046 16 14 16H8C6.89543 16 6 15.1046 6 14V4.00001ZM4 6.00002C4 5.25974 4.4022 4.61339 5 4.26758V14.5C5 15.8807 6.11929 17 7.5 17H13.7324C13.3866 17.5978 12.7403 18 12 18H7.5C5.567 18 4 16.433 4 14.5V6.00002Z"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 4.29981C6 3.19524 6.89543 2.2998 8 2.2998H14C15.1046 2.2998 16 3.19524 16 4.2998V14.2998C16 15.4044 15.1046 16.2998 14 16.2998H8C6.89543 16.2998 6 15.4044 6 14.2998V4.29981ZM4 6.29982C4 5.55954 4.4022 4.91319 5 4.56738V14.7998C5 16.1805 6.11929 17.2998 7.5 17.2998H13.7324C13.3866 17.8976 12.7403 18.2998 12 18.2998H7.5C5.567 18.2998 4 16.7328 4 14.7998V6.29982Z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default Copied;
