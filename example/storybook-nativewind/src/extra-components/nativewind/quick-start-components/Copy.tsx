import { useMode } from '@/components/ui/gluestack-ui-provider/providerContext';
import React from 'react';

function Copy() {
  const { colorMode } = useMode();
  return colorMode === 'light' ? (
    <svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 2.30011C6.89543 2.30011 6 3.19554 6 4.30011V14.3001C6 15.4047 6.89543 16.3001 8 16.3001H14C15.1046 16.3001 16 15.4047 16 14.3001V4.30011C16 3.19554 15.1046 2.30011 14 2.30011H8ZM7 4.30011C7 3.74783 7.44772 3.30011 8 3.30011H14C14.5523 3.30011 15 3.74783 15 4.30011V14.3001C15 14.8524 14.5523 15.3001 14 15.3001H8C7.44772 15.3001 7 14.8524 7 14.3001V4.30011ZM4 6.30012C4 5.55984 4.4022 4.9135 5 4.56769V14.8001C5 16.1808 6.11929 17.3001 7.5 17.3001H13.7324C13.3866 17.8979 12.7403 18.3001 12 18.3001H7.5C5.567 18.3001 4 16.7331 4 14.8001V6.30012Z"
        fill="#171717"
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
        d="M8 2.30011C6.89543 2.30011 6 3.19554 6 4.30011V14.3001C6 15.4047 6.89543 16.3001 8 16.3001H14C15.1046 16.3001 16 15.4047 16 14.3001V4.30011C16 3.19554 15.1046 2.30011 14 2.30011H8ZM7 4.30011C7 3.74783 7.44772 3.30011 8 3.30011H14C14.5523 3.30011 15 3.74783 15 4.30011V14.3001C15 14.8524 14.5523 15.3001 14 15.3001H8C7.44772 15.3001 7 14.8524 7 14.3001V4.30011ZM4 6.30012C4 5.55984 4.4022 4.9135 5 4.56769V14.8001C5 16.1808 6.11929 17.3001 7.5 17.3001H13.7324C13.3866 17.8979 12.7403 18.3001 12 18.3001H7.5C5.567 18.3001 4 16.7331 4 14.8001V6.30012Z"
        fill="#FAFAFA"
      />
    </svg>
  );
}

export default Copy;