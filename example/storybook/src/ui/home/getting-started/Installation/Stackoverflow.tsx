import { LayoutContext } from '@gluestack/design-system';
import React, { useContext } from 'react';

function Stackoverflow() {
  const { colorMode } = useContext(LayoutContext);
  return colorMode === 'light' ? (
    <svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6483 21.8632V15.4613H19.7851V24H0.507812V15.4613H2.63706V21.8632H17.6483ZM4.77306 19.7302H15.5161V17.5942H4.77306V19.7302ZM5.03556 14.8793L15.5168 17.0662L15.9661 14.9963L5.48931 12.8123L5.03556 14.8793ZM6.39456 9.82425L16.0988 14.352L17.0011 12.402L7.29831 7.87125L6.39531 9.80925L6.39456 9.82425ZM9.10956 5.03925L17.3243 11.895L18.6841 10.2727L10.4693 3.4215L9.11706 5.03475L9.10956 5.03925ZM14.4143 0L12.6683 1.293L19.0741 9.89775L20.8201 8.60475L14.4143 0Z"
        fill="black"
      />
    </svg>
  ) : (
    <svg
      width={21}
      height={24}
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.6483 21.8632V15.4613H19.7851V24H0.507812V15.4613H2.63706V21.8632H17.6483ZM4.77306 19.7302H15.5161V17.5942H4.77306V19.7302ZM5.03556 14.8793L15.5168 17.0662L15.9661 14.9963L5.48931 12.8123L5.03556 14.8793ZM6.39456 9.82425L16.0988 14.352L17.0011 12.402L7.29831 7.87125L6.39531 9.80925L6.39456 9.82425ZM9.10956 5.03925L17.3243 11.895L18.6841 10.2727L10.4693 3.4215L9.11706 5.03475L9.10956 5.03925ZM14.4143 0L12.6683 1.293L19.0741 9.89775L20.8201 8.60475L14.4143 0Z"
        fill="white"
      />
    </svg>
  );
}

export default Stackoverflow;
