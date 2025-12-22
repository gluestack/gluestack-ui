import Image from 'next/image';
import GeekyantsLogo from '@/public/svg/geekyants-logo.svg';
import HireTeamButton from './HireTeamButton';

const HireTeam = () => {
  return (
    <section className="mt-[120px] bg-gradient-to-r from-[#000000] to-[#161616] py-16 px-8  rounded-xl shadow-2xl">
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
        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Work with our solutions partner - GeekyAnts, with 15+ years of
          experience and 600+ global clients.
        </p>

        {/* Call-to-Action Button */}
        <HireTeamButton />
      </div>
    </section>
  );
};

export default HireTeam;
