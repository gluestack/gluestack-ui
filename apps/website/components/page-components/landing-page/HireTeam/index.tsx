import Image from 'next/image';
import GeekyantsLogo from '@/public/svg/geekyants-logo.svg';
import { Button, ButtonText } from '@/components/ui/button';

const index = () => {
  return (
    <section className="mt-[120px] bg-gradient-to-r from-[#000000] to-[#161616] py-16 px-8 md:px-8 lg:px-40 2xl:px-96 rounded-xl  shadow-2xl">
      <div className="text-left">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <Image
            src={GeekyantsLogo}
            alt="GeekyAnts Logo"
            width={140}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Looking to hire a development team?
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl">
          Work with our solutions partner - GeekyAnts, with 15+ years of
          experience and 600+ global clients.
        </p>

        {/* Call-to-Action Button */}
        <Button className="bg-white data-[hover=true]:bg-white/80 border border-gray-200 px-8 py-3 rounded-full text-base font-medium transition-colors duration-200">
          <ButtonText className="text-black data-[hover=true]:text-black">
            Book a Discovery Call
          </ButtonText>
        </Button>
      </div>
    </section>
  );
};

export default index;
