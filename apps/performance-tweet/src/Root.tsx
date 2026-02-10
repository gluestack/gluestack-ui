import { Composition } from 'remotion';
import { PerformanceComparison } from './PerformanceComparison';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PerformanceComparison"
        component={PerformanceComparison}
        durationInFrames={1020}
        fps={60}
        width={1080}
        height={1080}
      />
    </>
  );
};
