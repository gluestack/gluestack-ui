import dynamic from 'next/dynamic';

const SierpinskiTriangle = () => {
  const StitchesTest = dynamic(() => import('../../bench/mount-wide-tree/stitches-react-v025'), { ssr: false });

  return <StitchesTest />;
};

export default SierpinskiTriangle;
