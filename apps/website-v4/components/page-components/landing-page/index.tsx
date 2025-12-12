import { VStack } from '@/components/ui/vstack';
import { Box } from '@/components/ui/box';
import WebsiteLayout from './website-layout';

const App = ({ referrer }: { referrer: string }) => {
  return (
    <>
      <WebsiteLayout>
        <Box className="items-center justify-center">
          <VStack className="w-[85%] max-w-[1440px] justify-center self-center"></VStack>
        </Box>
      </WebsiteLayout>
    </>
  );
};
export default App;
