import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-a-variant/stitches-core-v025'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
