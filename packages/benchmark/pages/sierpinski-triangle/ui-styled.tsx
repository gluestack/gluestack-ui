import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/sierpinski-triangle/ui-styled'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
