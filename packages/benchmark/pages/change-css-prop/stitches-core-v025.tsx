import dynamic from 'next/dynamic';

const CreateAndMountComponent = () => {
  const StitchesTest = dynamic(() => import('../../bench/change-css-prop/stitches-core-v025'), { ssr: false });

  return <StitchesTest />;
};

export default CreateAndMountComponent;
