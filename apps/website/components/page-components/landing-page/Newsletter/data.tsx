export const communities = [
  {
    name: 'Twitter',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <g clipPath="url(#clip0_318_67648)">
          <mask
            id="mask0_318_67648"
            // style="mask-type:luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="16"
            height="16"
          >
            <path d="M0 0H16V16H0V0Z" fill="white" />
          </mask>
          <g mask="url(#mask0_318_67648)">
            <path
              d="M12.6 0.749512H15.0537L9.69372 6.89123L16 15.2501H11.0629L7.19314 10.1815L2.77029 15.2501H0.314286L6.04686 8.67865L0 0.750655H5.06286L8.55543 5.38265L12.6 0.749512ZM11.7371 13.7781H13.0971L4.32 2.14494H2.86171L11.7371 13.7781Z"
              fill="currentColor"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_318_67648">
            <rect width="16" height="16" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    link: 'https://twitter.com/gluestack',
    description:
      'Follow us on Twitter for updates and helpful tips on our community and projects.',
  },
  {
    name: 'GitHub',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: 'https://github.com/gluestack/gluestack-ui',
    description:
      'To file issues, request features, and contribute, check out our GitHub.',
  },
  {
    name: 'Discord',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M19.27 5.33005C17.94 4.71005 16.5 4.26005 15 4.00005C14.9868 3.99963 14.9738 4.00209 14.9617 4.00728C14.9496 4.01246 14.9388 4.02023 14.93 4.03005C14.75 4.36005 14.54 4.79005 14.4 5.12005C12.809 4.88005 11.191 4.88005 9.6 5.12005C9.46 4.78005 9.25 4.36005 9.06 4.03005C9.05 4.01005 9.02 4.00005 8.99 4.00005C7.49 4.26005 6.06 4.71005 4.72 5.33005C4.71 5.33005 4.7 5.34005 4.69 5.35005C1.97 9.42005 1.22 13.38 1.59 17.3C1.59 17.32 1.6 17.34 1.62 17.35C3.42 18.67 5.15 19.47 6.86 20C6.89 20.01 6.91999 20 6.93 19.98C7.33 19.43 7.69 18.85 8 18.24C8.02 18.2 8 18.16 7.96 18.15C7.39 17.93 6.85 17.67 6.32 17.37C6.28 17.35 6.27999 17.29 6.31 17.26C6.42 17.18 6.52999 17.09 6.64 17.01C6.66 16.99 6.69 16.99 6.71 17C10.15 18.57 13.86 18.57 17.26 17C17.28 16.99 17.31 16.99 17.33 17.01C17.44 17.1 17.55 17.18 17.66 17.27C17.7 17.3 17.7 17.36 17.65 17.38C17.13 17.69 16.58 17.94 16.01 18.16C15.97 18.17 15.96 18.22 15.97 18.25C16.29 18.86 16.65 19.44 17.04 19.99C17.07 20 17.1 20.01 17.13 20C18.85 19.47 20.58 18.67 22.38 17.35C22.4 17.34 22.41 17.32 22.41 17.3C22.85 12.77 21.68 8.84005 19.31 5.35005C19.3 5.34005 19.29 5.33005 19.27 5.33005ZM8.52 14.91C7.49 14.91 6.63 13.96 6.63 12.79C6.63 11.62 7.47 10.67 8.52 10.67C9.58 10.67 10.42 11.63 10.41 12.79C10.41 13.96 9.57 14.91 8.52 14.91ZM15.49 14.91C14.46 14.91 13.6 13.96 13.6 12.79C13.6 11.62 14.44 10.67 15.49 10.67C16.55 10.67 17.39 11.63 17.38 12.79C17.38 13.96 16.55 14.91 15.49 14.91Z"
          fill="currentColor"
        />
      </svg>
    ),
    link: 'https://discord.gg/95qQ84nf6f',
    description:
      'To get involved in the community, ask questions, and share tips.',
  },
];

export const developersData = [
  {
    id: 'developer-data-1',
    userName: 'Sanket Sahu',
    avatarURl: 'https://avatars.githubusercontent.com/u/1733433?v=4',
    profileUrl: 'https://github.com/sanketsahu',
  },
  {
    id: 'developer-data-2',
    userName: 'Suraj Ahmed Choudhury',
    avatarURl: 'https://avatars.githubusercontent.com/u/9393975?v=4',
    profileUrl: 'https://github.com/surajahmed',
  },
  {
    id: 'developer-data-3',
    userName: 'Rajat Chaudhary',
    avatarURl: 'https://avatars.githubusercontent.com/u/59024657?v=4',
    profileUrl: 'https://github.com/rajat693',
  },
  {
    id: 'developer-data-4',
    userName: 'Vaibhavi Kolloju',
    avatarURl: 'https://avatars.githubusercontent.com/u/55849924?v=4',
    profileUrl: 'https://github.com/vaibhk20',
  },
  {
    id: 'developer-data-5',
    userName: 'Damini Pandey',
    avatarURl: 'https://avatars.githubusercontent.com/u/61384878?v=4',
    profileUrl: 'https://github.com/DaminiPandey',
  },
  {
    id: 'developer-data-6',
    userName: 'Ujjwal Aggarwal',
    avatarURl: 'https://avatars.githubusercontent.com/u/98085611?v=4',
    profileUrl: 'https://github.com/ujjwal2608',
  },
  {
    id: 'developer-data-7',
    userName: 'Sanchit Kumar',
    avatarURl: 'https://avatars.githubusercontent.com/u/101696945?v=4',
    profileUrl: 'https://github.com/Sanchitv3',
  },
];
