import React from 'react';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';

type ProductHuntBannerProps = {
  showPHBanner: boolean;
  setShowPHBanner: (value: boolean) => void;
};

const ProductHuntBanner = ({
  showPHBanner,
  setShowPHBanner,
}: ProductHuntBannerProps) => {
  if (!showPHBanner) return null;
  return (
    <Box className="sticky top-[53px] md:top-[60px] z-20">
      <div className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-red-600">
        <div className="mx-auto w-[85%] max-w-[1440px] px-2 sm:px-2">
          <div className="flex items-center justify-between gap-3 py-2 md:py-2.5">
            <a
              href="https://www.producthunt.com/products/gluestack?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-gluestack&#0045;v3"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1009919&theme=light&t=1756285092927"
                alt="gluestack&#0032;v3 Product Hunt featured badge"
                width="110"
                className="h-6 md:h-7 w-auto"
              />
            </a>
            <p className="text-[13px] sm:text-sm md:text-base font-medium text-white/95 text-center">
              We're live on Product Hunt!
              <span className="hidden lg:inline">
                {' '}
                · If you like gluestack, please support us.
              </span>
            </p>
            <HStack className="gap-2">
              <a
                href="https://www.producthunt.com/products/gluestack?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-gluestack&#0045;v3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-white text-orange-600 hover:bg-white/90 active:bg-white/80 transition px-3 py-1 text-xs sm:text-sm font-semibold"
              >
                Vote
              </a>
              <button
                type="button"
                aria-label="Dismiss Product Hunt banner"
                onClick={() => setShowPHBanner(false)}
                className="ml-1 inline-flex items-center justify-center rounded-md/5 p-1.5 text-white/80 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </HStack>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ProductHuntBanner;
