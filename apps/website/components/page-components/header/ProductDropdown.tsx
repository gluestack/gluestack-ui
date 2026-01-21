'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useColorMode } from '@/app/provider';
import { useEffect, useState } from 'react';
import { getProductsSection } from './MobileSidebarMenu';

const ProductDropdown = () => {
  const { colorMode } = useColorMode();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const productsSection = getProductsSection();
  const products = productsSection?.items || [];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <button
        className="lg:flex hidden rounded-full px-3 py-1 hover:bg-primary/10 active:bg-primary/20 outline-none focus-visible:ring-2 focus-visible:ring-primary items-center"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <span className="leading-normal font-normal text-sm text-foreground/70">
          Products
        </span>
        {dropdownOpen ? (
          <ChevronUp className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        ) : (
          <ChevronDown className="ml-1 h-4 w-4 text-foreground/70 pointer-events-none" />
        )}
      </button>

      {dropdownOpen && (
        <div className="absolute top-full left-0 min-w-[350px]">
          <div className="mt-2.5 p-1 bg-background shadow-lg border border-border rounded-md max-h-[300px] overflow-x-scroll">
            {products.map((product) => {
              const logoElement =
                mounted && colorMode === 'dark'
                  ? product.logoDark
                  : product.logo;

              return (
                <a
                  key={product.link}
                  className="p-3 rounded flex flex-row min-w-[200px] hover:bg-primary/10 gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={product.link}
                >
                  <div className="flex flex-row gap-3 justify-between w-full items-start">
                    <div className="w-6 h-6 mt-1 flex items-center justify-center flex-shrink-0">
                      {logoElement}
                    </div>
                    <div className="flex flex-row items-center gap-1">
                      <div className='flex flex-col'>
                        <span className="leading-normal font-medium text-sm text-foreground/70 mb-1">
                          {product.title}
                        </span>
                        {product.description && (
                          <span className="text-xs font-normal text-muted-foreground leading-normal">
                            {product.description}
                          </span>
                        )}
                      </div>
                      {product.badge && (
                        <div className="h-fit w-fit text-xs flex-shrink-0">
                          {product.badge}
                        </div>
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDropdown;
