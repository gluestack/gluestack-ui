/* eslint-disable react-hooks/rules-of-hooks */
import { useToken as useTokenStyle } from '@gluestack-style/react';

export const useToken = (tokenScale: string, token: string | string[]) => {
  return typeof token === 'string'
    ? (useTokenStyle(tokenScale, token) as string)
    : token &&
        (token.map((singleToken) =>
          useTokenStyle(tokenScale, singleToken)
        ) as string[]);
};
