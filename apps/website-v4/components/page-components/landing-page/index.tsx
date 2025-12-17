import WebsiteLayout from './website-layout';
import HeroSection from './hero-section';

const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <WebsiteLayout>
        <HeroSection />
      </WebsiteLayout>
    </>
  );
};
export default App;
