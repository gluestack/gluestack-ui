import Header from '@/components/page-components/header';
import GluestackProBanner from '../gluestack-pro-banner';

function WebsiteLayout({
  children,
}: {
  applyBgImage?: boolean;
  children: any;
}) {
  return (
    <div
      className={`w-screen h-dvh overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scrollbar-hide`}
      style={{
        height: '100dvh', // Fallback for browsers that don't support dvh
        minHeight: '-webkit-fill-available', // iOS Safari specific fix
      }}
    >
      <GluestackProBanner />
      <Header />
      <div className='px-8 md:px-0'>{children}</div>
    </div>
  );
}

export default WebsiteLayout;
