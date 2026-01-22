import Image from 'next/image';
import GeekyantsLogo from '@/public/svg/geekyants-logo.svg';
import HireTeamButton from './HireTeamButton';

const partnerApps = [
  {
    name: 'RapidNative',
    logo: '/icon/logo/rapidnative/logo.png',
    description: 'Generate native apps instantly with AI prompts.',
    url: 'https://rapidnative.com/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
  },
  {
    name: 'AppLighter',
    logo: '/icon/logo/applighter/logo.png',
    description: 'AI-Ready Full-Stack Expo Starter Kit.',
    url: 'https://www.applighter.com/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
  },
  {
    name: 'FlyDash',
    logo: '/icon/logo/flydash/logo.png',
    description: 'AI-Powered Internal Tools & Dashboard Builder.',
    url: 'https://flydash.io/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
  },
];

const HireTeam = () => {
  return (
    <section className="mt-[120px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Box - Main Content */}
        <div className="flex-1 bg-gradient-to-r from-[#000000] to-[#161616] py-12 px-8 md:px-10 rounded-xl shadow-2xl">
          {/* Logo */}
          <div className="flex items-center mb-6">
            <Image
              src={GeekyantsLogo}
              alt="GeekyAnts Logo"
              width={140}
              height={32}
              className="h-8 w-auto"
            />
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Built by GeekyAnts.
            <br />
            Backed by expertise.
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base md:text-lg mb-8">
            An OSS-loving team of React Native experts with 15+ years of
            experience and 600+ global clients. Need help building your app?
          </p>

          {/* Call-to-Action Button */}
          <HireTeamButton />
        </div>

        {/* Right Box - Partner Apps */}
        <div className="flex-1 bg-gradient-to-r from-[#000000] to-[#161616] py-12 px-8 md:px-10 rounded-xl shadow-2xl">
          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our Partners
          </h3>

          {/* Subtitle */}
          <p className="text-gray-400 text-base mb-8">
            Trusted tools built by our partners
          </p>

          {/* App List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {partnerApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <div className="h-12 w-12 relative mb-3">
                  <Image
                    src={app.logo}
                    alt={`${app.name} logo`}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white text-base font-semibold mb-1">
                  {app.name}
                </span>
                <span className="text-gray-400 text-sm">
                  {app.description}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTeam;