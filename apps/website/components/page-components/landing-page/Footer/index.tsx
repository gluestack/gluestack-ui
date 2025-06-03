import React, { useContext } from 'react';
import {
  Box,
  HStack,
  VStack,
  Text,
  Pressable,
  Link,
  Image,
} from '@/components/ui';
import { ThemeContext } from '@/utils/context/theme-context';

const footerItems = [
  {
    title: 'Resources',
    links: [
      {
        title: 'Figma',
        href: 'https://www.figma.com/community/file/1358053104938234615/gluestack-ui-v2-0-design-kit',
        isExternal: true,
      },
      {
        title: 'Docs',
        href: '/ui/docs',
      },
      {
        title: 'Blogs',
        href: '/blogs',
      },
    ],
  },
  {
    title: 'Products',
    links: [
      {
        title: 'AppLaunchKit',
        href: 'https://applaunchk.it/',
      },
      {
        title: 'Starter Kit',
        href: 'https://github.com/gluestack/gluestack-ui-starter-kits/',
      },
      {
        title: 'theappmarket',
        href: 'https://theappmarket.io/',
      },
    ],
  },
  {
    title: 'Legals',
    links: [
      {
        title: 'Terms',
        href: '/terms-of-service',
      },
      {
        title: 'Privacy Policy',
        href: '/privacy-policy',
      },
      {
        title: 'Cookie Policy',
        href: '/cookie-policy',
      },
    ],
  },
  {
    title: 'Contact',
    links: [
      {
        title: 'Support',
        href: '/support',
      },
    ],
  },
];

const Footer = () => {
  const { colorMode } = useContext(ThemeContext);
  return (
    <Box className="justify-center max-w-[1440px] w-[85%] my-0 mx-auto relative border-t border-outline-100 mt-[60px]">
      <VStack className="pt-12 pb-7 mb-5 md:pb-12 md:mb-0">
        <HStack className="flex-1 flex-wrap">
          <VStack className="mb-9 xl:mb-0 flex-1 min-w-[400px]">
            <Link href="/" className="no-underline mb-2">
              {colorMode === 'light' ? (
                <Image
                  alt="light gluestack logo"
                  className="w-[153px] h-[28px]"
                  source={require('@/public/svg/gluestack_logo.svg')}
                  resizeMode="contain"
                />
              ) : (
                <Image
                  alt="dark gluestack logo"
                  className="w-[153px] h-[28px]"
                  source={require('@/public/svg/gluestack_logo_dark.svg')}
                  resizeMode="contain"
                />
              )}
            </Link>
            <Text className="text-sm font-medium leading-normal text-typography-700">
              React & React Native Components & Patterns
            </Text>
            <HStack className="gap-2 mt-4">
              <Link
                href="https://github.com/gluestack/gluestack-ui"
                isExternal
                aria-label="github link"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21V19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26V21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                  />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/gluestackio/"
                isExternal
                aria-label="linkedin link"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                  />
                </svg>
              </Link>
              <Link
                href="https://bsky.app/profile/gluestack.io"
                isExternal
                aria-label="bluesky"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -3.268 64 68.414"
                  width="24"
                  height="24"
                >
                  <path
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                    d="M13.873 3.805C21.21 9.332 29.103 20.537 32 26.55v15.882c0-.338-.13.044-.41.867-1.512 4.456-7.418 21.847-20.923 7.944-7.111-7.32-3.819-14.64 9.125-16.85-7.405 1.264-15.73-.825-18.014-9.015C1.12 23.022 0 8.51 0 6.55 0-3.268 8.579-.182 13.873 3.805zm36.254 0C42.79 9.332 34.897 20.537 32 26.55v15.882c0-.338.13.044.41.867 1.512 4.456 7.418 21.847 20.923 7.944 7.111-7.32 3.819-14.64-9.125-16.85 7.405 1.264 15.73-.825 18.014-9.015C62.88 23.022 64 8.51 64 6.55c0-9.818-8.578-6.732-13.873-2.745z"
                  />
                </svg>
              </Link>
              <Link
                href="https://stackoverflow.com/questions/tagged/gluestack"
                isExternal
                aria-label="stackoverflow link"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17.36 20.2001V14.8201H19.15V22.0001H3V14.8201H4.8V20.2001H17.36ZM6.77 14.3201L7.14 12.5601L15.93 14.4101L15.56 16.1701L6.77 14.3201ZM7.93 10.1101L8.69 8.50012L16.83 12.2801L16.07 13.9001L7.93 10.1101ZM10.19 6.12012L11.34 4.74012L18.24 10.5001L17.09 11.8701L10.19 6.12012ZM14.64 1.87012L20 9.08012L18.56 10.1501L13.2 2.94012L14.64 1.87012ZM6.59 18.4101V16.6101H15.57V18.4101H6.59Z"
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                  />
                </svg>
              </Link>
              <Link
                href="https://discord.com/invite/V5SU7HZSAQ"
                isExternal
                aria-label="discord link"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.27 5.33005C17.94 4.71005 16.5 4.26005 15 4.00005C14.9868 3.99963 14.9738 4.00209 14.9617 4.00728C14.9496 4.01246 14.9388 4.02023 14.93 4.03005C14.75 4.36005 14.54 4.79005 14.4 5.12005C12.809 4.88005 11.191 4.88005 9.6 5.12005C9.46 4.78005 9.25 4.36005 9.06 4.03005C9.05 4.01005 9.02 4.00005 8.99 4.00005C7.49 4.26005 6.06 4.71005 4.72 5.33005C4.71 5.33005 4.7 5.34005 4.69 5.35005C1.97 9.42005 1.22 13.38 1.59 17.3C1.59 17.32 1.6 17.34 1.62 17.35C3.42 18.67 5.15 19.47 6.86 20C6.89 20.01 6.91999 20 6.93 19.98C7.33 19.43 7.69 18.85 8 18.24C8.02 18.2 8 18.16 7.96 18.15C7.39 17.93 6.85 17.67 6.32 17.37C6.28 17.35 6.27999 17.29 6.31 17.26C6.42 17.18 6.52999 17.09 6.64 17.01C6.66 16.99 6.69 16.99 6.71 17C10.15 18.57 13.86 18.57 17.26 17C17.28 16.99 17.31 16.99 17.33 17.01C17.44 17.1 17.55 17.18 17.66 17.27C17.7 17.3 17.7 17.36 17.65 17.38C17.13 17.69 16.58 17.94 16.01 18.16C15.97 18.17 15.96 18.22 15.97 18.25C16.29 18.86 16.65 19.44 17.04 19.99C17.07 20 17.1 20.01 17.13 20C18.85 19.47 20.58 18.67 22.38 17.35C22.4 17.34 22.41 17.32 22.41 17.3C22.85 12.77 21.68 8.84005 19.31 5.35005C19.3 5.34005 19.29 5.33005 19.27 5.33005ZM8.52 14.91C7.49 14.91 6.63 13.96 6.63 12.79C6.63 11.62 7.47 10.67 8.52 10.67C9.58 10.67 10.42 11.63 10.41 12.79C10.41 13.96 9.57 14.91 8.52 14.91ZM15.49 14.91C14.46 14.91 13.6 13.96 13.6 12.79C13.6 11.62 14.44 10.67 15.49 10.67C16.55 10.67 17.39 11.63 17.38 12.79C17.38 13.96 16.55 14.91 15.49 14.91Z"
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                  />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/gluestack"
                isExternal
                aria-label="twitter link"
                className="bg-background-50 p-1 justify-center rounded"
              >
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
                        fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_318_67648">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link
                href="https://gluestack.forumify.io/"
                isExternal
                aria-label="twitter link"
                className="bg-background-50 p-1 rounded"
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 3a7.5 7.5 0 0 0-6.797 10.675 68.094 68.094 0 0 0-.681 3.142.996.996 0 0 0 1.153 1.17c.623-.11 1.978-.36 3.236-.65A7.5 7.5 0 1 0 9.5 3Zm-.038 16a7.473 7.473 0 0 0 5.1 2c1.1 0 2.145-.237 3.088-.663 1.043.244 2.186.488 2.913.64a1.244 1.244 0 0 0 1.467-1.5c-.162-.703-.418-1.795-.671-2.803A7.503 7.503 0 0 0 17.015 6.41a8.44 8.44 0 0 1 .8 2.048 5.995 5.995 0 0 1 2.747 5.042c0 .992-.24 1.925-.665 2.747l-.13.253.07.276c.228.895.467 1.9.642 2.65-.774-.163-1.818-.39-2.74-.61l-.264-.062-.243.121c-.804.4-1.71.625-2.67.625a5.974 5.974 0 0 1-2.92-.756 8.517 8.517 0 0 1-2.18.256Z"
                    fill={colorMode === 'light' ? '#272625' : '#F6F6F6'}
                  />
                </svg>
              </Link>
            </HStack>

            <HStack className="items-center gap-1 mt-4">
              <Text className="no-underline text-typography-700 text-sm font-medium leading-normal">
                Created by
              </Text>

              <Link
                href="https://geekyants.com/?utm_source=gluestack.io&utm_medium=referral&utm_campaign=footer_link"
                isExternal
              >
                {colorMode === 'light' ? (
                  <Image
                    alt="geekyants logo light"
                    className="w-[81.362px] h-[14px]"
                    source={require('@/public/svg/Geekyants.svg')}
                    resizeMode="contain"
                  />
                ) : (
                  <Image
                    alt="geekyants logo dark"
                    className="w-[81.362px] h-[14px]"
                    source={require('@/public/svg/Geekyants_dark.svg')}
                    resizeMode="contain"
                  />
                )}
              </Link>
            </HStack>
          </VStack>

          {footerItems.map((item, key1) => (
            <VStack
              className="items-start basis-[50%] mt-6 xl:mt-0 xl:flex-1"
              key={key1}
              space="md"
            >
              <Text className="font-semibold leading-normal text-base text-typography-900 md:text-md">
                {item.title}
              </Text>
              <VStack space="md" className="gap-3">
                {item.links.map((link: any, key2) => (
                  <Pressable key={key2} focusable={false}>
                    {({ hovered }: any) => {
                      return (
                        <Link href={link.href} isExternal={link.isExternal}>
                          <HStack
                            className="items-center w-full md:w-[99%] lg:w-full"
                            space="md"
                          >
                            <Text
                              className={`${
                                hovered
                                  ? 'text-typography-800 underline underline-offset-4 group-hover/link:underline'
                                  : 'text-typography-700'
                              } leading-normal text-sm`}
                            >
                              {link.title}
                            </Text>
                            {link?.icon && (
                              <svg
                                width="13"
                                height="12"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.00007 1C5.72393 1 5.50007 0.776142 5.50007 0.5C5.50007 0.223858 5.72393 0 6.00007 0H12.0001C12.2762 0 12.5001 0.223858 12.5001 0.5V6.5C12.5001 6.77614 12.2762 7 12.0001 7C11.7239 7 11.5001 6.77614 11.5001 6.5V1.7071L1.35355 11.8536C1.15829 12.0488 0.841707 12.0488 0.646445 11.8536C0.451184 11.6583 0.451185 11.3417 0.646448 11.1464L10.793 1H6.00007Z"
                                  fill={hovered ? '#fafafa' : '#E5E5E5'}
                                />
                              </svg>
                            )}
                          </HStack>
                        </Link>
                      );
                    }}
                  </Pressable>
                ))}
              </VStack>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
