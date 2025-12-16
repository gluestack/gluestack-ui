import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
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
