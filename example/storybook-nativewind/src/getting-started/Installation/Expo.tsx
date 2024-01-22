//@ts-nocheck
import { LayoutContext } from '@gluestack/design-system';
import React, { useContext } from 'react';

function Expo() {
  const { colorMode } = useContext(LayoutContext);
  return colorMode === 'light' ? (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10219_12443)">
        <path
          d="M20.8114 7.8719C22.5454 7.8719 23.951 6.46627 23.951 4.73234C23.951 2.9984 22.5454 1.59277 20.8114 1.59277C19.0775 1.59277 17.6719 2.9984 17.6719 4.73234C17.6719 6.46627 19.0775 7.8719 20.8114 7.8719Z"
          fill="white"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5072 3.13086C23.3257 4.20552 22.7694 5.18118 21.9371 5.88481C21.1048 6.58844 20.0502 6.97459 18.9603 6.97477C18.8364 6.97477 18.7151 6.97477 18.5938 6.95912C19.1357 7.49758 19.8553 7.81998 20.6179 7.86591C21.3805 7.91184 22.1336 7.67815 22.7362 7.20862C23.3389 6.73909 23.7496 6.06594 23.8916 5.31529C24.0335 4.56464 23.8968 3.78799 23.5072 3.13086Z"
          fill="black"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.195312 18.0839L0.226617 6.1582L10.4918 12.1204V24.046L0.195312 18.0839Z"
          fill="white"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.226562 6.15749L10.5074 0.195312L15.6387 3.17705L10.4918 6.15749L15.6387 9.13923L10.4918 12.1197L0.226562 6.15749Z"
          fill="white"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6391 9.1396V15.1018L20.7874 12.12L20.8187 18.0835L10.4922 24.0457V12.12L15.6391 9.1396Z"
          fill="black"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6391 3.17773V9.13991L10.4922 6.15817L15.6391 3.17773Z"
          fill="black"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6406 9.13965L20.7889 12.1201L15.6406 15.1018V9.13965Z"
          fill="white"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4905 18.2493L0.195312 12.2871"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6311 3.17773L5.35156 9.13991V21.0708"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6442 9.13925L5.35938 3.18359"
          stroke="black"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10219_12443">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_10404_112275)">
        <path
          d="M20.8114 7.8719C22.5454 7.8719 23.951 6.46627 23.951 4.73234C23.951 2.9984 22.5454 1.59277 20.8114 1.59277C19.0775 1.59277 17.6719 2.9984 17.6719 4.73234C17.6719 6.46627 19.0775 7.8719 20.8114 7.8719Z"
          fill="black"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5072 3.13086C23.3257 4.20552 22.7694 5.18118 21.9371 5.88481C21.1048 6.58844 20.0502 6.97459 18.9603 6.97477C18.8364 6.97477 18.7151 6.97477 18.5938 6.95912C19.1357 7.49758 19.8553 7.81998 20.6179 7.86591C21.3805 7.91184 22.1336 7.67815 22.7362 7.20862C23.3389 6.73909 23.7496 6.06594 23.8916 5.31529C24.0335 4.56464 23.8968 3.78799 23.5072 3.13086Z"
          fill="white"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.195312 18.0839L0.226617 6.1582L10.4918 12.1204V24.046L0.195312 18.0839Z"
          fill="black"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M0.226562 6.15749L10.5074 0.195312L15.6387 3.17705L10.4918 6.15749L15.6387 9.13923L10.4918 12.1197L0.226562 6.15749Z"
          fill="black"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6391 9.1396V15.1018L20.7874 12.12L20.8187 18.0835L10.4922 24.0457V12.12L15.6391 9.1396Z"
          fill="white"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6391 3.17773V9.13991L10.4922 6.15817L15.6391 3.17773Z"
          fill="white"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6406 9.13965L20.7889 12.1201L15.6406 15.1018V9.13965Z"
          fill="black"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.4905 18.2493L0.195312 12.2871"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6311 3.17773L5.35156 9.13991V21.0708"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6442 9.13925L5.35938 3.18359"
          stroke="white"
          strokeWidth="0.391304"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_10404_112275">
          <rect width={24} height={24} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Expo;
