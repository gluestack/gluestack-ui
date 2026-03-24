import Image from 'next/image';
import GeekyantsLogo from '@/public/svg/geekyants-logo.svg';
import HireTeamButton from './HireTeamButton';

const partnerAppsRows = [
  [
    {
      name: 'RapidNative',
      logo: '/icon/logo/rapidnative/logo.png',
      url: 'https://rapidnative.com/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
      description: 'Prompt to React Native app',
    },
    {
      name: 'AppLighter',
      logo: '/icon/logo/applighter/logo.png',
      url: 'https://www.applighter.com/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
      description: 'React Native Templates',
    },
  ],
  [
    {
      name: 'ScopeDesk',
      logo: '/icon/logo/scopedesk/logo.svg',
      url: 'https://scopedesk.com/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
      description: 'AI-Powered Project Scoping',
    },
  ],
  [
    {
      name: 'FlyDash',
      logo: '/icon/logo/flydash/logo.png',
      url: 'https://flydash.io/?utm_source=gluestack.io&utm_medium=partner_apps&utm_campaign=brand-awareness',
      description: 'Dashboard builder',
    },
  ],
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
          <div className="flex flex-col gap-3">
            {partnerAppsRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className={`grid gap-3 ${row.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
              >
                {row.map((app) => (
                  <a
                    key={app.name}
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    <div className="h-10 w-10 relative flex-shrink-0">
                      <Image
                        src={app.logo}
                        alt={`${app.name} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-white text-base font-semibold">
                      {app.name}
                      <p className="text-gray-400 text-xs">
                        {app.description}
                      </p>
                    </span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireTeam;
